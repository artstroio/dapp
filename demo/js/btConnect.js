setInterval(btConn, 1000);


function btConn(){
    try{
        if (document.getElementById("conn").value == "0") {
            console.log("===> 0 ");
            document.getElementById("connectBtn0").value = "Not Connected";
        }    
        if (document.getElementById("conn").value == "1") {
            console.log("===> 1 ");
            document.getElementById("connectBtn0").value = "Connected";
        }
    } catch (e){
        console.log("===> 0 - erro ");
        document.getElementById("connectBtn0").value = "Not Connected";
    }

}
