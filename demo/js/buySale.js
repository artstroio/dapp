const buySalecontractAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "changeFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newTokenPrice",
        type: "uint256",
      },
    ],
    name: "changeTokenPrice",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "registerNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "NftRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
    ],
    name: "tokenSold",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contarctBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "findToken",
    outputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getFirstOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getRoyalty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getTokenValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "isAvailable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenRegistered",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

let buySalecontractAddress = "";
const fees = "25000000000000000";

/* Catalog INFO */
const saleWattletElm = document.querySelectorAll("#for-sale-wallet")[1];
const showSaleTokenBtn = document.getElementById("showSaleToken");

/* send token to contract info */
const sendTokenId = document.getElementById("sendTokenID");

/*Find Token INfo*/
const findTokenId = document.querySelectorAll("#findTokenID");
const findTokenBtn = document.querySelectorAll("#findTokenBtn");

/* Buy Token */
const buyToken = document.getElementById("buy-token");

if (showSaleTokenBtn != null) {
  showSaleTokenBtn.addEventListener("click", () => {
    window.location += `?wallet=${WalletSale.value}`;
    getValueForCatalog(WalletSale.value);
  });
}

function buyTokenBtn() {
  let tokenId = document.getElementById("tokenId").innerText;
  let tokenBtn = document.getElementById("buyTokenButton");
  tokenBtn.value = "Approving transaction";
  buySaleContract.methods
    .tokenPrice(tokenId)
    .call()
    .then((r) => {
      let price = (Number(fees) + Number(r)).toString();
      buySaleContract.methods
        .buyToken(tokenId)
        .send({ from: accounts[0], value: price })
        .then(() => {
          tokenBtn.value = "Transaction Confirmed Token Bought";
        });
    });
}

function findToken(_tokenId) {



  if (findTokenBtn != null) {
    findTokenBtn.value =
      "Finding Token (You will be redirected if token is found).";
  }



  buySaleContract.methods
    .isAvailable(_tokenId)
    .call()
    .then((r) => {
     //console.log(':::::::findToken::::r:::::::::::');
     //console.log(r);
      if (r) {
        window.location = `https://artstro.io/?tokenId=${_tokenId}#buy-token`;
        findTokenBtn.value = "Find Token";
      } else {
        alert("ERROR: no Token Found");
      }
    });
}

function findToken_busca(_tokenId) {
  findTokenInYouWallet_page_show_token(_tokenId);
}


function getTokenData(tokenId) {
  console.log('tokenId *:::');
  console.log(tokenId);

  buySaleContract.methods
    .findToken(tokenId)
    .call()
    .then(async (uri) => {

     //console.log('');
     //console.log('tokenId **:::');
     //console.log(tokenId);
     //console.log('uri *:::');
     //console.log(uri);
     //console.log('----');

      let price = await buySaleContract.methods.tokenPrice(tokenId).call();

     //console.log('price:');
     //console.log(price);


      if (uri === "ERROR") {
        // alert("ERROR: Token not for available for purchase.");
       //return false;
      }
      axios(uri).then((r) => {

       //console.log('r.data:::');
       //console.log(r.data);

        let tokenType = r.data.type;
        if (tokenType === "image") {
          tag = `<img src=${r.data.img} class="token-thumbnail-minting" id=${tokenId} alt=""></a>`;
        } else {
          tag = `<video class="video-preview" id="${tokenId}" autoplay loop muted src="${r.data.img}">
			    Your browser does not support the video tag.
		      </video>`;
        }
        buyToken.innerHTML = `<header>
				<h2>Buy this Token</h2>
				</header>
					<small>Transaction Fee is 0.025 $BNB + Network Gas Fee.</small> 									
				<section>
					<form action="#" method="post" onsubmit="return false">
						</br>
						<div class="row">				
							<div class="col-6 col-12-medium imagen-token">
								${tag}
							</div>
							<div class="col-6 col-12-medium">
							<h2>${r.data.description}</h2>
							<p>Token Id.: <a target="_blank" id='tokenId' href="https://bscscan.com/token/${contractAddress}?a=${tokenId}">${tokenId}</a></p>
							<h3>Current Price ${web3.utils.fromWei(price)} BNB</h3>
							</div>											
							<div class="col-12 mintbutton">
								<input type="submit" onClick = "buyTokenBtn()" id='buyTokenButton' value="Buy Token" />
							</div>
						</div>		
					</form>
				</section>`;
      });
    })
    .catch((e) =>{
     //console.log('erro wallet:');
     //console.log(e);
    });
}



function sendTokenToSellContract_pgWallet(_sendTokenId){
  let tokenId = _sendTokenId; // sendTokenId.value;
  console.log('====>>> send token tosell contract');
  console.log(tokenId);


  /**/ 
  sendTokenBtn.value = "Checking approval. Sending transaction.";
  contract.methods
    .isApprovedForAll(accounts[0], buySalecontractAddress)
    .call()
    .then((r) => {
      if (r) {
        sendTokenBtn.value = "Token approved. Sending transaction.";
        buySaleContract.methods
          .registerNFT(tokenId)
          .send({ from: accounts[0], value: fees })
          .then(() => {
            sendTokenBtn.value =
              "Transaction Confirmed. The token was sent to Sales Contract.";
          });
      } else if (!r) {
        sendTokenBtn.value =
          "Your token has not been approved yet. Sending transaction approval (Please Wait)";
        contract.methods
          .setApprovalForAll(buySalecontractAddress, true)
          .send({ from: accounts[0] })
          .then(() => {
            sendTokenBtn.value =
              "Your token has been approved. Transaction Sent.";
            buySaleContract.methods
              .registerNFT(tokenId)
              .send({ from: accounts[0], value: fees })
              .then(() => {
                sendTokenBtn.value =
                  "Your transaction has been confirmed. The token was sent to Sales Contract.";
              });
          });
      }
    }); 
    
}


function sendTokenToSellContract() {
  let tokenId = sendTokenId.value;
  sendTokenBtn.value = "Checking approval. Sending transaction.";
  contract.methods
    .isApprovedForAll(accounts[0], buySalecontractAddress)
    .call()
    .then((r) => {
      if (r) {
        sendTokenBtn.value = "Token approved. Sending transaction.";
        buySaleContract.methods
          .registerNFT(tokenId)
          .send({ from: accounts[0], value: fees })
          .then(() => {
            sendTokenBtn.value =
              "Transaction Confirmed. The token was sent to Sales Contract.";
          });
      } else if (!r) {
        sendTokenBtn.value =
          "Your token has not been approved yet. Sending transaction approval (Please Wait)";
        contract.methods
          .setApprovalForAll(buySalecontractAddress, true)
          .send({ from: accounts[0] })
          .then(() => {
            sendTokenBtn.value =
              "Your token has been approved. Transaction Sent.";
            buySaleContract.methods
              .registerNFT(tokenId)
              .send({ from: accounts[0], value: fees })
              .then(() => {
                sendTokenBtn.value =
                  "Your transaction has been confirmed. The token was sent to Sales Contract.";
              });
          });
      }
    });
}

function changePriceOfToken() {
  let tokenId = changeTokenID.value;
  let price = web3.utils.toWei(newTokenPrice.value);
 //console.log(tokenId);
 //console.log(price);
  changePriceBtn.value = "Sending and approving transaction.";
  buySaleContract.methods
    .changeTokenPrice(tokenId, price)
    .send({ from: accounts[0], value: fees })
    .then(() => {
      changePriceBtn.value = "New token price confirmed";
      changePriceBtn.value = "Updating information on the sales contract";
    });
}

function getValueForCatalog(address) {
  const newWeb3 = new Web3('wss://apis.ankr.com/wss/13fcc698359b44aa971ed71dec279857/e0eccff31da3eb9772f92fab8e12a185/binance/full/main');
  const newbuySaleContract = new newWeb3.eth.Contract(buySalecontractAbi, buySalecontractAddress);
 //console.log('address');
 //console.log(address);
  walletOfSale.innerText = address;
  newbuySaleContract
    .getPastEvents(
      "NftRegistered",
      { filter: { _user: address }, fromBlock: 0, toBlock: "latest" },
      (err, r) => {
        if (r.length == 0) {
          alert(
            "“There is no token available for sale from this wallet address.”"
          );
          return false;
        }
        returnValuesArrOfCatalog = r;
        returnValuesArrOfCatalog = returnValuesArrOfCatalog.map(
          (index) => index.returnValues
        );
        userTokenIDOfCatalog = returnValuesArrOfCatalog.map(
          (index) => index._tokenId
        );
      }
    )
    .then(() => {
      newbuySaleContract.getPastEvents(
        "tokenSold",
        { filter: { _tokenOwner: address }, fromBlock: 0, toBlock: "latest" },
        (err, r) => {
          let tempData = r.map((index) => index.returnValues);
          deleteIdOfCatalog = tempData.map((index) => index._tokenId);
          deleteIdOfCatalog.map((index) => {
            returnValuesArrOfCatalog.map((index1, i) => {
              if (index === index1._tokenId) {
                returnValuesArrOfCatalog.splice(i, 1);
                userTokenIDOfCatalog.splice(i, 1);
              }
            });
          });
          Promise.all(returnValuesArrOfCatalog).then(() => {
            saleWattletElm.innerHTML = "";
            returnValuesArrOfCatalog.map(async (index) => {
              let tokenId = index._tokenId;
              let price = await buySaleContract.methods
                .tokenPrice(tokenId)
                .call();
              let uri = index._uri;

             //console.log('index._uri');
             //console.log(index._uri);

              axios(uri).then((r) => {
                let tokenType = r.data.type;
                if (tokenType === "image") {
                  tag = `<img src=${r.data.img} id=${tokenId} alt=""></a>`;
                } else {
                  tag = `<video class="video-preview" id="${tokenId}" autoplay loop muted src="${r.data.img}">
                Your browser does not support the video tag.
              </video>`;
                }
                saleWattletElm.innerHTML += `<div class="col-4 col-6-medium col-12-small">
					<a href="#" class="image fit">${tag}</a>
					<p>${r.data.description}</p><p>Current Price: <b>${web3.utils.fromWei(
                  price
                )} BNB</b></p>
					<p>Token Id.: <a target="_blank" href="https://bscscan.com/token/${buySalecontractAddress}?a=${tokenId}">${tokenId}</a></p>
				</div>`;
              });
            });
          });
          setTimeout(() => {
            findTokenInCatalog();
          }, 1000);
        }
      );
    });
}

function findTokenInCatalog() {
  let imageOfCatalogElm = document.querySelectorAll(".image");
  imageOfCatalogElm.forEach((index) => {
    index.addEventListener("click", () => {
      //console.log('index.children[0]:::');
      //console.log(index.children[0])
      findToken(index.children[0].id);
    });
  });
}
