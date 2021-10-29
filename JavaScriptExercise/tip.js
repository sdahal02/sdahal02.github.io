//script for tip calculation
    function calcTip(){
        let subtotal=Number(document.getElementById('subtotal').value);
        let tip=Number(document.getElementById('tip').value);
        let total= subtotal+(subtotal*(tip/100));
        //console.log(total);             
        document.getElementById('total').innerHTML = "$" + total.toFixed(2);
    }      

