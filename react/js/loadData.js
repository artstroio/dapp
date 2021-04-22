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





function ShowFormTransfer(_token_id) {
    document.getElementById("formTransfer_" +_token_id).style.display = "block";
    document.getElementById("btTransfer_" +_token_id).style.display = "none";
}

function transferToken_update(_tid, _wallet){

    document.getElementById("selId").innerHTML = _tid;
    var dest = "destinationWallet_"+String(_tid);

    if (String(document.getElementById(dest).value).length > 0) {
        document.getElementById("tokenid").value =_tid ;
        document.getElementById("destination").value = document.getElementById(dest).value;
        document.getElementById("selWallet").innerHTML = document.getElementById(dest).value;  
        
        document.getElementById("transfertoken").click();
        
    } else {
        alert("Please inform the destination wallet.");
    }


}


/*
API BSC: 9GE73HNKPWMZ38I896IEM63Z45SV52EGJF (App Name: ARTSTROio)
acc:
0x1dAF6997bF8800aa439e8E686323912CeEC4FEc4



https://api.bscscan.com/api?module=account&action=txlistinternal&address=0x1dAF6997bF8800aa439e8E686323912CeEC4FEc4&startblock=0&endblock=9999999&sort=asc&apikey=9GE73HNKPWMZ38I896IEM63Z45SV52EGJF


*/


function fillCombo(_id) {
    var xmlhttp = new XMLHttpRequest();
    var acc = String(document.getElementById("acc2").value);
    // var url = "https://api.bscscan.com/api?module=account&action=txlistinternal&address="+acc+"&startblock=0&endblock=9999999&sort=asc&apikey=9GE73HNKPWMZ38I896IEM63Z45SV52EGJF";
    
    // internal
    // https://api.bscscan.com/api?module=account&action=txlistinternal&address=0x1dAF6997bF8800aa439e8E686323912CeEC4FEc4&startblock=0&endblock=9999999&sort=asc&apikey=9GE73HNKPWMZ38I896IEM63Z45SV52EGJF
    var url = "https://api.bscscan.com/api?module=account&action=txlist&address=0x1dAF6997bF8800aa439e8E686323912CeEC4FEc4&startblock=0&endblock=9999999&sort=asc&apikey=9GE73HNKPWMZ38I896IEM63Z45SV52EGJF";

    // normal 
    // https://api.bscscan.com/api?module=account&action=txlist&address=0x1dAF6997bF8800aa439e8E686323912CeEC4FEc4&startblock=1&endblock=99999999&sort=asc&apikey=9GE73HNKPWMZ38I896IEM63Z45SV52EGJF


    console.log('');
    console.log('====== url');
    console.log(url);
    
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var resultjson = JSON.parse(this.responseText);

            console.log('');
            console.log('====== resultjson');
            console.log(resultjson);
            console.log('');

            listItems_json(resultjson, _id);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function listItems_json(addressList, domid) {
        var out = "";
        var i;

        console.log('');
        console.log('====== adicionando item no combo:');
        console.log(domid);

        var x = document.getElementById("combo_"+domid);

        for(i = 0; i < addressList['result'].length; i++) {

            console.log('====== adicionando item no combo:');
            try {

                var option = document.createElement("option");
                option.text = addressList['result'][i]['to'];
                x.add(option);
                var optiondetail = document.createElement("option");
                optiondetail.text = " value: " + addressList['result'][i]['value'];
                optiondetail.disabled = true;
                x.add(optiondetail);

                var optiondetail2 = document.createElement("option");
                optiondetail2.text = "";
                optiondetail2.disabled = true;
                x.add(optiondetail2);

                console.log('====== x ok >>>');
                
            } catch (err) {
                console.log('====== x ok - 2 >>>');
                console.log(err);
            }


        }
        //document.getElementById(domid).innerHTML = out;
    }    
}