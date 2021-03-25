
 // Unpkg imports
 const Web3Modal = window.Web3Modal.default;
 const WalletConnectProvider = window.WalletConnectProvider.default;
//  const Fortmatic = window.Fortmatic;
 const evmChains = window.evmChains;
 
 // Web3modal instance
 let web3Modal
 
 // Chosen wallet provider given by the dialog window
 let provider;
 
 
 // Address of the selected account
 let selectedAccount;
 
 let connected = true;

 /**
  * Setup the orchestra
  */
 function init() {
 
   console.log("Initializing example");
   console.log("WalletConnectProvider is", WalletConnectProvider);
//    console.log("Fortmatic is", Fortmatic);
   console.log("window.ethereum is", window.ethereum);
 
   // Tell Web3modal what providers we have available.
   // Built-in web browser provider (only one can exist as a time)
   // like MetaMask, Brave or Opera is added automatically by Web3modal
   const providerOptions = {
     walletconnect: {
       package: WalletConnectProvider,
       options: {
         // Mikko's test key - don't copy as your mileage may vary
         infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
       }
     },
    //  fortmatic: {
    //    package: Fortmatic,
    //    options: {
    //      // Mikko's TESTNET api key
    //      key: "pk_test_391E26A3B43A3350"
    //    }
    //  }
   };
 
   web3Modal = new Web3Modal({
     cacheProvider: false, // optional
     providerOptions, // required
     disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
   });
 
   console.log("Web3Modal instance is", web3Modal);
 }


 /**
 * Connect wallet button pressed.
 */
async function onConnect() {
    init()
    console.log("Opening a dialog", web3Modal);

    if(connected){
        try {
            provider = await web3Modal.connect();
            connectBtn[0].value = "Connected"
            connectBtn[1].value = "Connected"
            web3 = new Web3(provider);
            connectWallet()
        } catch(e) {
            console.log("Could not get a wallet connection", e);
            return;
          }
            
        // Subscribe to accounts change
        provider.on("accountsChanged", (accounts) => {
            window.location.reload()
        });
    
        // Subscribe to chainId change
        provider.on("chainChanged", (chainId) => {
            window.location.reload()
        });
    
        // Subscribe to networkId change
        provider.on("networkChanged", (networkId) => {
            window.location.reload()
        });
    
    }
 }

async function checkingConnections() {
    web3 = new Web3(window.ethereum)
    const checkAccount = await web3.eth.getAccounts()
    if(checkAccount.length > 0){
        ethereum.enable()
        connectWallet()
        connected = false;
        connectBtn[0].value = "Connected"
        connectBtn[1].value = "Connected"
    }
}