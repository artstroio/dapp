const inputELm = document.querySelector("#thumbnail");
const descriptionELm = document.querySelector("#description");
const supplyELm = document.querySelector("#supply");
const valueElm = document.querySelector("#value");
const royaltyELm = document.querySelector("#royalty");
const optionalURLELm = document.querySelector("#optionalURL");
const mintBtnELm = document.querySelector("#mintBtn");
const walletLoader = document.querySelector("#walletLoader");
const loader = document.querySelector("#loader");
const mintLoader = document.querySelector("#mintLoader");
const video = document.querySelector("#video");

const contractAbi = [
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_royaltyShare",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Minted",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    name: "withdrawBNB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
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
    name: "firstOwnerOfToken",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "NFTValue",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    name: "tokenRoyaltyShare",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
];
let contractAddress = "";

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
  // connectWallet();
  checkingConnections()
  ipfs = IpfsApi({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
  });
  var url_string = window.location.href;
  var url = new URL(url_string);
  let searchWallet = url.searchParams.get("wallet");
  let tokenId = url.searchParams.get("tokenId");

  console.log(searchWallet);
  if (searchWallet != null) {
    if (searchWallet.length === 42) {
      setTimeout(() => {
        getValueForCatalog(searchWallet);
      }, 1000);
    }
  }
  if (tokenId != null) {
    setTimeout(() => {
      getTokenData(tokenId);
    }, 1000);
  }
};

async function connectWallet() {
  if (window.ethereum) {
    // onConnect()
    // web3 = new Web3(window.ethereum);
    let id = await web3.eth.getChainId();
    if (id === 97) {
      contractAddress = "0xA1428ba8636bC3FEBC54158e4EDA88D50A0F006C";
      buySalecontractAddress = "0xD1EEbD53598f424c11Dd870f18f71910e1B26ccb";
    } else if (id === 56) {
      contractAddress = "0x92595603D198B4Dc99098701DDC313D2fEc56E88";
    } else {
      alert("ERROR: Wrong MetaMask Network");
    }

    try {
      contract = new web3.eth.Contract(contractAbi, contractAddress);
      buySaleContract = new web3.eth.Contract(
        buySalecontractAbi,
        buySalecontractAddress
      );
      accounts = await ethereum.enable();
    } catch (e) {
      console.log(e);
    }
    getTokenOfUserFromEvent();
  }
}

inputELm.addEventListener("change", (e) => {
  loader.hidden = false;
  const file = e.target.files[0];
  fileType = file["type"];
  validImageTypes = [
    "image/gif",
    "image/jpeg",
    "image/png",
    "video/webm",
    "video/mp4",
    "video/muted",
  ];
  if (!validImageTypes.includes(fileType)) {
    // invalid file type code goes here.
    alert("Invalid file type");
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
    alert("File Size exceed");
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
    const videoType = ["video/webm", "video/mp4", "video/muted"];
    if (videoType.includes(fileType)) {
      tokenImg.hidden = true;
      video.src = imageUrl;
      tokenType = "video";
    } else {
      tokenImg.src = imageUrl;
      tokenType = "image";
    }
  });
}

sendJSONToIPFS = async () => {
  mintBtnELm.value = "Sending metadata to IPFS";
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
    mintBtnELm.value = "Approving Transaction to BSC (please wait)";
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
    .send({ from: accounts[0], value: "50000000000000000" })
    .then(() => {
      getTokenOfUserFromEvent();
      mintBtnELm.value = "Transaction Confirmed (token minted)";
      mintLoader.hidden = true;
      window.location.hash = "#wallet";
      document.getElementById("myForm").reset();
    })
    .catch((e) => {
      alert("ERROR:", e);
    });
}

findTokenBtn.addEventListener("click", () => {
  findToken(findTokenId.value);
});

function getTokenOfUserFromEvent() {
  let walletTokens = document.getElementById("walletTokens");
  walletTokens.innerHTML = "";

  contract
    .getPastEvents(
      "Transfer",
      { filter: { to: accounts[0] }, fromBlock: 0, toBlock: "latest" },
      (err, r) => {
        returnValuesArr = r;
        returnValuesArr = returnValuesArr.map((index) => index.returnValues);
        userTokenID = returnValuesArr.map((index) => index.tokenId);
      }
    )
    .then(() => {
      contract
        .getPastEvents(
          "Transfer",
          { filter: { from: accounts[0] }, fromBlock: 0, toBlock: "latest" },
          (err, r) => {
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
          contract.events.Minted({ fromBlock: 0 }, (err, r) => {
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
                  if (type1 === "image") {
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
    .catch(console.log);
}

function transferToken() {
  let tokenId = tokenid.value;
  let toAddress = destination.value;
  let fromAddress = accounts[0];

  transfertoken.value = "Approving Transaction (Please Wait)";

  contract.methods
    .transferFrom(fromAddress, toAddress, tokenId)
    .send({ from: accounts[0] })
    .then(() => {
      transfertoken.value = "Transaction Confirmed";
    })
    .catch((e) => {
      transfertoken.value = "Transaction Failed ";
      alert(e.message);
    });

  tokenid.value = "";
  destination.value = "";
}
