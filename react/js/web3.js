const inputELm = document.querySelector('#thumbnail');
const descriptionELm = document.querySelector('#description');
const supplyELm = document.querySelector('#supply');
const valueElm = document.querySelector('#value');
const royaltyELm = document.querySelector('#royalty');
const optionalURLELm = document.querySelector('#optionalURL');
const mintBtnELm = document.querySelector('#mintBtn');
const walletLoader = document.querySelector('#walletLoader');
const loader = document.querySelector('#loader');
const mintLoader = document.querySelector('#mintLoader');
const video = document.querySelector('#video');



const contractAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_count',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_uri',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_royaltyShare',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Minted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawBNB',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'baseURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'firstOwnerOfToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'NFTValue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'tokenRoyaltyShare',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
let contractAddress = '';

let imgBuffer,
  ipfs,
  imageUrl,
  description,
  supply,
  value,
  royalty,
  optionalUrl,
  tokenURI,
  contract,
  tokenType;
let returnValuesArr = [];
let deleteId = [];
let userTokenID = [];
let mintedArray = [];
let userTokenData = [];

window.onload = async () => {
  if (loader != null) {
    loader.hidden = true;
  }
  if (mintLoader != null) {
    mintLoader.hidden = true;
  }
  if (video != null) {
    video.hidden = true;
  }
 //console.log('connectWallet...>>');
  var i;
  for (i = 87; i <=90; i++){
   //console.log('wallet tokens >>>>>>>>>>>:::');
   //console.log(i);
try{
  //findTokenInYouWallet_walletPage(i);
  

}
catch(err){
 //console.log('erro tokens >>>>>>>>>>>:::');
 //console.log(err);  
}    
  }


 //connectWallet();
  checkingConnections();
  ipfs = IpfsApi({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
  });
  var url_string = window.location.href; // window.BinanceChain   window.location.href

 //console.log('url_string');
 //console.log(url_string);

 //console.log('binance');
 //console.log(window.BinanceChain);

 //console.log('ipfs');
 //console.log(ipfs);


  var url = new URL(url_string);
  let tokenId = 87 ; // 87; // url.searchParams.get('tokenId') ; // url.searchParams.get('tokenId');  // 87
  let searchWallet =  document.getElementById('acc1').value; //'0xae9a18983cb1131ce4c6e2c7ef7636b23e179e4c'; //'0xae9A18983CB1131CE4c6e2C7ef7636b23e179E4C'; // url.searchParams.get('wallet');

 //console.log('url.searchParams.get');
 //console.log(url.searchParams.get('tokenId'));


 //console.log('url');
 //console.log(url);

 //console.log('tokenId:::');
 //console.log(tokenId);

 //console.log('searchWallet');
 //console.log(searchWallet);



  if (searchWallet != null) {
    
    console.log('searchWallet not null :::::::');

    if (searchWallet.length === 42) {
      setTimeout(() => {
        getValueForCatalog(searchWallet);
      }, 1000);
    }
  } else {
    console.log('searchWallet IS NULL :::::::');
  }
  if (tokenId != null) {
    setTimeout(() => {
      getTokenData(tokenId);
      lista_tokens_1();
    }, 1000);

    // connected:

  }






};

async function connectWallet() {
  if (window.ethereum) {
     //onConnect()
    let id = await web3.eth.getChainId();

   //console.log('getChainId:');
   //console.log(id);

    if (id === 97) {
      contractAddress = '0xA1428ba8636bC3FEBC54158e4EDA88D50A0F006C';
      buySalecontractAddress = '0xcd622eFB5e6dc4e3c255fFCc43fC24cFC92B5beD';
    } else if (id === 56) {
      contractAddress = '0x92595603D198B4Dc99098701DDC313D2fEc56E88';
      buySalecontractAddress = '0xc90EcA83aC8b56f350129588b73B31feE67fE9D0';
      document.getElementById("conn").value = "1";
    } else {
      document.getElementById("conn").value = "0";
      alert('ERROR: Wrong MetaMask Network');
    }

    try {
      contract = new web3.eth.Contract(contractAbi, contractAddress);
      buySaleContract = new web3.eth.Contract(
        buySalecontractAbi,
        buySalecontractAddress
      );
      accounts = await ethereum.enable();

     //console.log('accounts:::');
     //console.log(accounts);

     //console.log('accounts 0000:::');
     //console.log(accounts[0]);

      // https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&address='+conta1+'&startblock=0&endblock=999999999&sort=asc
      document.getElementById("acc1").value = String("https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&address="+accounts[0]+"&startblock=0&endblock=999999999&sort=asc");
      document.getElementById("acc2").value = String(accounts[0]);
      
      //document.getElementById("conn").value = "";
    } catch (e) {
     //console.log(e);
    }
    getTokenOfUserFromEvent();
  }
}


inputELm.addEventListener('change', (e) => {
  loader.hidden = false;
  const file = e.target.files[0];
  fileType = file['type'];
  validImageTypes = [
    'image/gif',
    'image/jpeg',
    'image/png',
    'video/webm',
    'video/mp4',
    'video/muted',
  ];
  if (!validImageTypes.includes(fileType)) {
    // invalid file type code goes here.
    alert('Invalid file type');
    return false;
  }
  if (thumbnail.files[0].size / 1024 / 1024 < 30) {
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      imgBuffer = ipfs.Buffer(reader.result);
    };
    setTimeout(() => {
      addData();
    }, 500);
  } else {
    alert('File Size exceed');
  }
});

let hash;

async function addData() {
  await ipfs.files.add(imgBuffer, (err, result) => {
    if (err) {
      alert(err);
    }
    hash = result[0];
    loader.hidden = true;
    imageUrl = `https://gateway.pinata.cloud/ipfs/${result[0].hash}`;
    const videoType = ['video/webm', 'video/mp4', 'video/muted'];
    if (videoType.includes(fileType)) {
      tokenImg.hidden = true;
      video.src = imageUrl;
      tokenType = 'video';
    } else {
      tokenImg.src = imageUrl;
      tokenType = 'image';
    }
  });
}

sendJSONToIPFS = async () => {
  mintBtnELm.value = 'Sending metadata to IPFS';
  mintLoader.hidden = false;
  getValues();
  const doc = JSON.stringify({
    description: description,
    supply: supply,
    value: value,
    royalty: royalty,
    optionalUrl: optionalUrl,
    img: imageUrl,
    type: tokenType,
  });

  ipfs.add(ipfs.Buffer(doc)).then((cid) => {
    mintLoader.hidden = true;
    tokenURI = `https://gateway.pinata.cloud/ipfs/${cid[0].hash}`;
    mintBtnELm.value = 'Approving Transaction to BSC (please wait)';
    mintLoader.hidden = false;
    mintToken();
  });
};

function getValues() {
  description = descriptionELm.value;
  supply = supplyELm.value;
  value = valueElm.value;
  royalty = royaltyELm.value;
  optionalUrl = optionalURLELm.value;
}

function mintToken() {
  contract.methods
    .mint(accounts[0], supply, tokenURI, web3.utils.toWei(value), royalty)
    .send({ from: accounts[0], value: '50000000000000000' })
    .then(() => {
      getTokenOfUserFromEvent();
      mintBtnELm.value = 'Transaction Confirmed (token minted)';
      mintLoader.hidden = true;
      window.location.hash = '#wallet';
      document.getElementById('myForm').reset();
    })
    .catch((e) => {
      alert('ERROR:', e);
    });
}

findTokenBtn[0].addEventListener('click', () => {
  // findToken(findTokenId[0].value); // findTokenID
  findToken_busca(document.getElementById('findTokenID').value); // findTokenID
});

findTokenBtn[1].addEventListener('click', () => {
  findTokenInYouWallet(showTokenID.value);
});

function getTokenOfUserFromEvent() {
  const newWeb3 = new Web3('wss://apis.ankr.com/wss/13fcc698359b44aa971ed71dec279857/e0eccff31da3eb9772f92fab8e12a185/binance/full/main');
  newContract = new newWeb3.eth.Contract(contractAbi, contractAddress);

  let walletTokens = document.getElementById('walletTokens');
  walletTokens.innerHTML = '';

 //console.log('=======walletTokens==========>>>>>');
 //console.log('=======accounts[0]==========>>>>>');
 //console.log(accounts[0]);

  newContract
    .getPastEvents(
      'Transfer',
      { filter: { to: accounts[0] }, fromBlock: 0, toBlock: 'latest' },
      (err, r) => {

       //console.log('=================r>>>>>');
       //console.log(r);
       //console.log('=================err>>>>>');
       //console.log(err);

        returnValuesArr = r;
        returnValuesArr = returnValuesArr.map((index) => index.returnValues);
        userTokenID = returnValuesArr.map((index) => index.tokenId);
      }
    )
    .then(() => {
      newContract
        .getPastEvents(
          'Transfer',
          { filter: { from: accounts[0] }, fromBlock: 0, toBlock: 'latest' },
          (err, r) => {

           //console.log('=================>>>>>');
           //console.log(r);

            let tempData = r.map((index) => index.returnValues);
            deleteId = tempData.map((index) => index.tokenId);
            deleteId.map((index) => {
              returnValuesArr.map((index1, i) => {
                if (index === index1.tokenId) {
                  returnValuesArr.splice(i, 1);
                  userTokenID.splice(i, 1);
                }
              });
            });
          }
        )
        .then(() => {
          newContract.events.Minted({ fromBlock: 0 }, (err, r) => {
            userTokenID.map(async (index) => {
              if (r.returnValues.id === index) {
                walletLoader.hidden = true;
                let uri = r.returnValues.uri;
                let id = r.returnValues.id;
                let value = web3.utils.fromWei(
                  await buySaleContract.methods.tokenPrice(id).call()
                );
                let imageLink, optionalLink;
                axios(uri).then((r) => {
                  optionalLink = r.data.optionalUrl;
                  imageLink = r.data.img;
                  let des = r.data.description;
                  let type1 = r.data.type;
                  if (type1 === 'image') {
                    tag = `<img src=${imageLink} alt=""></a>`;
                  } else {
                    tag = `<video class="video-preview" id="video" autoplay loop muted src="${imageLink}">
                Your browser does not support the video tag.
              </video>`;
                  }
                  walletTokens.innerHTML += `<div class="col-4 col-6-medium col-12-small">
            <a href="${optionalLink}" class="image fit"> ${tag}
            <p><b>${des}</b></p><p>Current Price ${value} BNB</p>
            <p>Token Id: <a target="_blank" href="https://bscscan.com/token/${contractAddress}?a=${id}">${id}</a></p>
            <p><a target="_blank" href=${optionalLink}>Download Attachment</a> (if any)</p>
            </div>`;
                });
              }
            });
          });
        });
    })
    .catch((e) => {
     //console.log('=================erro>>>>>');
     //console.log(e);
    });
}

function findTokenInYouWallet(id) {
  let show_token = document.querySelector('#show-token');
  window.location.hash = '#show-token';
  contract.methods
    .ownerOf(id)
    .call()
    .then((r) => {

     //console.log('===========show-token=======acc');

     //console.log('r data :::');
     //console.log(r);

     //console.log('accounts :::');
     //console.log(accounts);

     //console.log('id:');
     //console.log(id);

     //console.log('accounts[0]:::');
     //console.log(accounts[0]);

     //console.log('comparative:r::');
     //console.log(String(r).toUpperCase());      

     //console.log('comparative:accounts::');
     //console.log(String(accounts).toUpperCase());    

     //console.log('==================');

      if (String(r).toUpperCase() == String(accounts[0]).toUpperCase()) {
        contract.methods
          .tokenURI(id)
          .call()
          .then(async (uri) => {
            axios(uri).then(async (r) => {
              optionalLink = r.data.optionalUrl;
              imageLink = r.data.img;
              let des = r.data.description;
              let tokenType = r.data.type;
              let price = await buySaleContract.methods.tokenPrice(id).call();

              if (tokenType === 'image') {
                tag = `<img src=${r.data.img} id=${id} alt=""></a>`;
              } else {
                tag = `<video class="video-preview" id="${id}" autoplay loop muted src="${r.data.img}">
            Your browser does not support the video tag.
          </video>`;
              }
              show_token.innerHTML = `
          <article id="show-token" class="wallet panel">
								 <header>
									<h2>Show Token</h2>
								</header>	
									<small>This token is in your Wallet. If you want to sell this token, please take note of the Id number and send it to the Sell Contract clicking <a href="https://artstro.io/#send-token-sell"><span>HERE.</span></a> </small>

          <section>
          <form action="#" method="post" onsubmit="return false">
            </br>										
            <div class="row">	

              <div class="col-6 col-12-medium imagen-token" style="margin-top:20px;">
					        <a href="#" class="image fit">${tag}</a>
              </div>
              <div class="col-6 col-12-medium" style="margin-top:20px;">
              <h2>${des}</h2>
              <p>Token Id: <a target="_blank" href="https://bscscan.com/token/${contractAddress}?a=${id}">${id}</a></p>
              <h3>Current Price ${web3.utils.fromWei(price)} BNB</h3>
              <p><a target="_blank" href=${optionalLink}>Download Attachment</a> (if any)</p>
              <b>Token not available for sale.</b>
              </div>											
            </div>	
          </form>
        </section>`;
            });
          });
      } else {
       //console.log('*** show-token owner Not Found');
        show_token.innerHTML = `
      <article id="show-token" class="wallet panel">
								 <header>
									<h2>Show Token</h2>
								</header>	
									<small>This token is in your Wallet. If you want to sell this token, please take note of the Id number and send it to the Sell Contract clicking <a href="https://artstro.io/#send-token-sell"><span>HERE.</span></a> </small>

      <div class="row">	<h1>This token is not in your Wallet</h1> </div>`;
      }
    });
}
function findTokenInYouWallet_walletPage() {
  var n;
  for (n = 0; n <= 100;n++){
    id = n;
    try{
     //console.log('=============0001=====findTokenInYouWallet_walletPage');
      //let show_token = document.querySelector('#show-token2');
      //window.location.hash = '#show-token2';
      contract.methods
        .ownerOf(id)
        .call()
        .then((r) => {
    
         //console.log('===========0002=======findTokenInYouWallet_walletPage');
    
          var listaTokens = ""; // document.getElementById('tokensList2').innerHTML
    
          if (String(r).toUpperCase() == String(accounts[0]).toUpperCase()) {
            contract.methods
              .tokenURI(id)
              .call()
              .then(async (uri) => {
               //console.log('===========0003=======findTokenInYouWallet_walletPage');
                axios(uri).then(async (r) => {
                 //console.log('===========0004=======findTokenInYouWallet_walletPage');
                  optionalLink = r.data.optionalUrl;
                  imageLink = r.data.img;
                  let des = r.data.description;
                  let tokenType = r.data.type;
                  let price = await buySaleContract.methods.tokenPrice(id).call();
                 //console.log('=========plota token on wallet=========');
                  if (tokenType === 'image') {
                    tag = `<img src=${r.data.img} id=${id} alt=""></a>`;
                  } else {
                    tag = `<video class="video-preview" id="${id}" autoplay loop muted src="${r.data.img}">
                Your browser does not support the video tag.
              </video>`;
                  }
                  listaTokens += `
              <article id="show-token" class="wallet panel">
                     <header>
                      <h2>Show Token</h2>
                    </header>	
                      <small>This token is in your Wallet. If you want to sell this token, please take note of the Id number and send it to the Sell Contract clicking <a href="https://artstro.io/#send-token-sell"><span>HERE.</span></a> </small>
    
              <section>
              <form action="#" method="post" onsubmit="return false">
                </br>										
                <div class="row">	
    
                  <div class="col-6 col-12-medium imagen-token" style="margin-top:20px;">
                      <a href="#" class="image fit">${tag}</a>
                  </div>
                  <div class="col-6 col-12-medium" style="margin-top:20px;">
                  <h2>${des}</h2>
                  <p>Token Id: <a target="_blank" href="https://bscscan.com/token/${contractAddress}?a=${id}">${id}</a></p>
                  <h3>Current Price ${web3.utils.fromWei(price)} BNB</h3>
                  <p><a target="_blank" href=${optionalLink}>Download Attachment</a> (if any)</p>
                  <b>Token not available for sale.</b>
                  </div>											
                </div>	
              </form>
            </section>`;
    
            document.getElementById('tokensList2').innerHTML = listaTokens ;
    
                });
              });
          } else {
            //
            document.getElementById('tokensList2').innerHTML = listaTokens ;
          }
        });
    }
    catch (err){
    //
    }
  }
  
}


function findTokenInYouWallet_walletPage_individual(id) {
    document.getElementById('tokensList2').innerHTML = ``;
    try{
      //console.log('=============0001=====findTokenInYouWallet_walletPage');
      //let show_token = document.querySelector('#show-token2');
      //window.location.hash = '#show-token2';
      contract.methods
        .ownerOf(id)
        .call()
        .then((r) => {
    
          //console.log('===========0002=======findTokenInYouWallet_walletPage');
          var list_tokens_ini = `"<article id=show-token class=wallet panel>
          <header>
           <h2>Show Token</h2>
           </header>	
           <small>This token is in your Wallet. If you want to sell this token, please take note of the Id number and send it to the Sell Contract clicking <a href=https://artstro.io/#send-token-sell><span>HERE.</span></a></small>
           <section>"`;

           var listaTokens = ""; 
           var list_tokens_end = `"</section>"`;
    
          if (String(r).toUpperCase() == String(accounts[0]).toUpperCase()) {
            contract.methods
              .tokenURI(id)
              .call()
              .then(async (uri) => {
               //console.log('===========0003=======findTokenInYouWallet_walletPage');
                axios(uri).then(async (r) => {
                 //console.log('===========0004=======findTokenInYouWallet_walletPage');
                  optionalLink = r.data.optionalUrl;
                  imageLink = r.data.img;
                  let des = r.data.description;
                  let tokenType = r.data.type;
                  let price = await buySaleContract.methods.tokenPrice(id).call();
                 //console.log('=========plota token on wallet=========');
                  if (tokenType === 'image') {
                    tag = `<img src=${r.data.img} id=${id} alt=""></a>`;
                  } else {
                    tag = `<video class="video-preview" id="${id}" autoplay loop muted src="${r.data.img}">
                Your browser does not support the video tag.
                </video>`;
                  }
                  listaTokens += `
                  <form action="#" method="post" onsubmit="return false">

                    <div class="row"> 
                      <div class="col-6 col-12-medium imagen-token" style="margin-top:20px;">
                          <a href=${optionalLink} class="image fit">${tag}</a>
                      </div>    

                      <div class="col-6 col-12-medium imagen-token">
                          <h2>${des}</h2>
                          <p>Token Id: <a target="_blank" href="https://bscscan.com/token/${contractAddress}?a=${id}">${id}</a></p>
                          <h3>Current Price ${web3.utils.fromWei(price)} BNB</h3>
                          <p><a target="_blank" href=${optionalLink}>Download Attachment</a> (if any)</p>
                          <div style="width:100%">
                          <button class="mintBtn" onClick="sendTokenToSellContract_pgWallet(${id})">Send token to sell contract</button> 
                          </br>
                          <button class="mintBtn" onClick="ShowFormTransfer(${id})" id="btTransfer_${id}">Transfer token</button>
                           </div>

                          <div style="width:100%;" id="formTransfer_${id}" style="display:none;" ><input type="text" placeholder="Destination wallet" id="destinationWallet_backup${id}" style="display:none;">
                          
                          <select id="combo_${id}" name="env" style="width: 100%; position:relative;" onchange="this.nextElementSibling.value=this.value" style="font-size:10px; background-color:gray;">
                          <option></option>
                          </select>

                          <input type="text" id="destinationWallet_${id}" style="width: 400px; margin-top: 1px; margin-right: 25px; border: none; position:absolute; left:50px; background-color:#CCCCCC;" value="" placeholder="Destination wallet"/>
                          <button class="mintBtn" onClick="transferToken_update(${id}, ${id})">Transfer Token</button>
                          </div>
                          <b>Token not available for sale.</b>

                      </div>
                    </div>      
                                                      

                  </form><hr>`;

                  fillCombo(id);

            var tabini = ``;
            var tabend = ``;
            
            var item_list = tabini + listaTokens + tabend;

            document.getElementById('tokensList2').innerHTML += listaTokens;

            // verify if wallet is connected.
            var L = document.getElementById('tokensList2').innerHTML;
            if (L.length > 50){ // no tokens are beeing shown
                document.getElementById("connectBtn").value = "Connected";
                document.getElementById("conn").value = "1";
            }else {
                document.getElementById("connectBtn").value = "Connect your wallet";
                document.getElementById("conn").value = "0";
            }

                });
              });
          } else {
            // 
          }
        });
    }
    catch (err){
      //
    }


}

function findTokenInYouWallet_page_show_token(id) {
  try{
   //console.log('=============0001=====findTokenInYouWallet_walletPage');
    //let show_token = document.querySelector('#show-token2');
    //window.location.hash = '#show-token2';
    contract.methods
      .ownerOf(id)
      .call()
      .then((r) => {
  
       //console.log('===========0002=======findTokenInYouWallet_walletPage');
        document.getElementById('show_token_item').innerHTML = "";

         var listaTokens = ""; // document.getElementById('tokensList2').innerHTML
  
        if (String(r).toUpperCase() == String(accounts[0]).toUpperCase()) {
          contract.methods
            .tokenURI(id)
            .call()
            .then(async (uri) => {
             //console.log('===========0003=======findTokenInYouWallet_walletPage');
              axios(uri).then(async (r) => {
               //console.log('===========0004=======findTokenInYouWallet_walletPage');
                optionalLink = r.data.optionalUrl;
                imageLink = r.data.img;
                let des = r.data.description;
                let tokenType = r.data.type;
                let price = await buySaleContract.methods.tokenPrice(id).call();
               //console.log('=========plota token on wallet=========');
                if (tokenType === 'image') {
                  tag = `<img src=${r.data.img} id=${id} alt=""></a>`;
                } else {
                  tag = `<video class="video-preview" id="${id}" autoplay loop muted src="${r.data.img}">
              Your browser does not support the video tag.
            </video>`;
                }
                listaTokens += `<div>
            <article id="show-token" class="wallet panel">
                   <header>
                    <h2>Show Token</h2>
                  </header>	
                    <small>This token is in your Wallet. If you want to sell this token, please take note of the Id number and send it to the Sell Contract clicking <a href="https://artstro.io/#send-token-sell"><span>HERE.</span></a> </small>
  
            <section>
            <form action="#" method="post" onsubmit="return false">
              </br>										
              <div class="row">	
  
                <div class="col-6 col-12-medium imagen-token" style="margin-top:20px;">
                    <a href="#" class="image fit">${tag}</a>
                </div>
                <div class="col-6 col-12-medium" style="margin-top:20px;">
                <h2>${des}</h2>
                <p>Token Id: <a target="_blank" href="https://bscscan.com/token/${contractAddress}?a=${id}">${id}</a></p>
                <h3>Current Price ${web3.utils.fromWei(price)} BNB</h3>
                <p><a target="_blank" href=${optionalLink}>Download Attachment</a> (if any)</p>
                <b>Token not available for sale.</b>

                </div>											
              </div>	
            </form>
          </section></div>`;
  
          document.getElementById('show_token_item').innerHTML += listaTokens ;
  
              });
            });
        } else {
          //
          // document.getElementById('show_token_item').innerHTML += listaTokens ;
        }
      });
  }
  catch (err){
//
  }


}



function transferToken() {
  let tokenId = tokenid.value;
  let toAddress = destination.value;
  let fromAddress = accounts[0];

  transfertoken.value = 'Approving Transaction (Please Wait)';

  contract.methods
    .transferFrom(fromAddress, toAddress, tokenId)
    .send({ from: accounts[0] })
    .then(() => {
      transfertoken.value = 'Transaction Confirmed';
    })
    .catch((e) => {
      transfertoken.value = 'Transaction Failed ';
      alert(e.message);
    });

  tokenid.value = '';
  destination.value = '';
}


function lista_tokens_1(){
  var n = 0;
  for (n=0;n<=100;n++){
    try{
      findTokenInYouWallet_walletPage_individual(n);
    }
    catch (err){
      //
    }
  }
}