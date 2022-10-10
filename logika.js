function OnClick(){
    var broj = prompt("Unesite broj od 1 do 5");
    if(isNaN(broj)){
        alert("Niste uneli broj!");
    }
    else {
        if(broj < 1 || broj >5){
            alert("Unesen broj mora biti izmedju 1 i 5!")
        }
        else{
            if(broj == 1){
                document.write("Nikad nemoj odustati, jer uvek postoji vreme i mesto kada ce se plima promeniti.");
            }
            else if(broj == 2){
                document.write("Kreativan čovek motivisan je zeljom da postigne, a ne zeljom da pobedi druge.");
            }
            else if(broj == 3){
                document.write("Neka ti udica bude uvek bacena. U jezeru u kojem najmanje ocekujes, pojavice se riba.")
            }
            else if(broj == 4){
                document.write("Preko noci postaje slavan samo onaj ko je danima neumorno radio.")
            }
            else if(broj == 5){
                document.write("Velika je nesreca kad covek ne zna sta hoce, a prava katastrofa kad ne zna sta moze.")
            }
            }
        }
    }

