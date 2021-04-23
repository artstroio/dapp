/*

{"status":"1","message":"OK","result":[{"blockNumber":"7887885","timeStamp":"1618153827",
"hash":"0xcc9097a4b41f0359b5ec14575a101248f8ac004ee925721514cc1285624b8aad","nonce":"1",
"blockHash":"0xc3ea19a49c7e1bc8a77df76b37b459a74b2e3a9621acd72ed86ea286a1fba5bc",
"from":"0x0000000000000000000000000000000000000000","contractAddress":"0xa1428ba8636bc3febc54158e4eda88d50a0f006c",
"to":"0xae9a18983cb1131ce4c6e2c7ef7636b23e179e4c","tokenID":"87","tokenName":"Artstro",
"tokenSymbol":"ARTST","tokenDecimal":"0","transactionIndex":"4","gas":"479559",
"gasPrice":"10000000000","gasUsed":"319706","cumulativeGasUsed":"1543348","input":"deprecated","confirmations":"1155"}]}

*/

    if (document.getElementById("connectBtn").value = "Connected") {
        
        lista_tokens_1();

        /*
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                var TokensListJSON = JSON.parse(this.responseText);

               //console.log('TokensListJSON.......');
               //console.log(TokensListJSON);
               //console.log('TokensListJSON..ITEM.....');
               //console.log(TokensListJSON['result']);

                
                document.getElementById("warning1").style.display = "block";

                ViewTokens(TokensListJSON['result']);


             
            } else{

                // document.getElementById("warning1").style.display = "block";
            }
        };

        var conta1 = String(document.getElementById("acc1").value) ; 
        // 0xae9A18983CB1131CE4c6e2C7ef7636b23e179E4C
        // https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&address='+conta1+'&startblock=0&endblock=999999999&sort=asc

       //console.log('conta1.....');
       //console.log(conta1);

        var link_1 = document.getElementById("acc1").value;

       //console.log('link_1.....');
       //console.log(link_1);

        xhttp.open("GET", "https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&address=0xae9A18983CB1131CE4c6e2C7ef7636b23e179E4C&startblock=0&endblock=999999999&sort=asc", true);
        xhttp.send();

        function ViewTokens(arr) {
            var tabStart = "<table>";
            var tabEnd = "</table>";
            var out = "";
            var i;
            try {
                for(i = 0; i <= arr.length; i++) {
                   //console.log('Token tokenID:::>>>');
                   //console.log(arr[i].tokenID);
    
                    out += '<tr><td><font id=tokenId></font><br><font id=tokenSymbol style=font-size:12px;>Symbol: "' + arr[i].tokenSymbol + '"</font><br><font id=tokenHash style=font-size:12px;>Tx: "' + arr[i].hash + '"</font></td></tr><tr><td><br><button onClick="selectThis('+String(arr[i].tokenID).replace("'", "")+')">Select this token ID: "' + arr[i].tokenID + '"</button><br><br><font style=font-size:10px;>This token is in your Wallet. If you want to sell this token, please take note of the Id number and send it to the Sell Contract clicking <a href="https://artstro.io/#send-token-sell"><span>HERE.</span></a> </font><hr></td></tr>';
    
                   //console.log('Token exibe view:::>>>');
                    document.getElementById("tokensList").innerHTML = tabStart + out + tabEnd;

                    document.getElementById("warning1").style.display = "none";
    
                }                
            } catch (error) {
               // do nothing.  
            }


            
        }
        */
    }

   


    function selectThis(val){
        document.getElementById("tokenid").value = String(val);
    }