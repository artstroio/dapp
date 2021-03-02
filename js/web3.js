const inputELm = document.querySelector('#thumbnail');
const descriptionELm = document.querySelector('#description')
const supplyELm = document.querySelector('#supply');
const valueElm = document.querySelector('#value');
const royaltyELm = document.querySelector('#royalty');
const optionalURLELm = document.querySelector('#royalty');
const mintBtnELm = document.querySelector('#mintBtn');

let imgBuffer,ipfs,imageUrl,description,supply,value,royalty,optionalUrl,tokenURI;

window.onload = async () => {
    loader.hidden = true
    mintLoader.hidden = true
     ipfs = IpfsApi({
         host: 'ipfs.infura.io',
         port: 5001,
         protocol: 'https'
     })
    //  const ipfs = window.IpfsApi()
    if(window.ethereum) {
        web3 = new Web3(window.ethereum)
        try{    
            await ethereum.enable();
        }catch(e){
            console.log(e);
        }
    }
}

inputELm.addEventListener('change' ,(e) => {
    loader.hidden = false
    const file = e.target.files[0];
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
        imgBuffer = ipfs.Buffer(reader.result);
    }
    setTimeout(() => {
        addData()
    }, 500);

})

let hash;

async function addData() {
    await  ipfs.files.add(imgBuffer,(err,result) => {
        if(err) {
            console.log(err);
        }
        hash = result[0]
        console.log(hash)
        loader.hidden = true
        imageUrl = (`https://gateway.pinata.cloud/ipfs/${result[0].hash}`)
    })
}

sendJSONToIPFS = async () => {
    mintBtnELm.value = 'Sending metadata to IPFS'
    mintLoader.hidden = false;
    getValues()
    const doc = JSON.stringify({
        description: description,
        supply: supply,
        value: value,
        royalty: royalty,
        optionalUrl: optionalUrl,
        img: imageUrl
    });
    
    const cid = await ipfs.add(ipfs.Buffer(doc));
    console.log("IPFS cid:", cid);
    mintLoader.hidden = true;
    tokenURI = `https://gateway.pinata.cloud/ipfs/${cid[0].hash}`
    console.log(`https://gateway.pinata.cloud/ipfs/${cid[0].hash}`)  
    mintBtnELm.value = 'Sending Transaction to BSC'
    mintLoader.hidden = false;
  }

function getValues() {
    description = descriptionELm.value;
    supply = supplyELm.value;
    value = valueElm.value;
    royalty = royaltyELm.value;
    optionalUrl = optionalURLELm.value;
}
