function MojaFunkcija(){
    var number = prompt("Insert number betweek 1 and 999");
    if(isNaN(number)){
        alert("This is not a number!");
    }
    else {
        if(number<1 || number > 999){
            alert("Number must be between 1 and 999!");
        }
        else{
            if(document.getElementById('btnSqrt').clicked == true){
                alert(Math.sqrt(number));
            }
        }
    }
}
