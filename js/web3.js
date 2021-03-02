const inputELm = document.querySelector('#thumbnail');
let imgBuffer;
let ipfs;
window.onload = async () => {
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
        alert(`IMAGE UPLOADED TO IPFS https://gateway.pinata.cloud/ipfs/${result[0].hash}`)
    })
}

const pinJSONToIPFS = (pinataApiKey, pinataSecretApiKey, JSONBody ) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey
            }
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        });
};