let puntaje = 5;
let intento = 1;
let img = document.getElementById("imgPokemon");




const jugarPokemon=(val)=> {

    if(intento>=4){
        img.src = "../img/pnegro.jpg";

        resetGame();
    }


    if (val && intento <= 3) {
    
        document.querySelector('.display2').innerText = "Puntaje: " + puntaje + 
        "\nIntentos: " + intento;
        let mensaje1= document.querySelector(".displayMensaje")
        mensaje1.innerText= "Felicidades, has seleccionado la opcion correcta";
        mensaje1.style.background.font="black";
        mensaje1.style.border = "solid";
        mensaje1.style.background= "orange";
        img.src = "../img/pcolor.jpg";
    
    } else {
        
        document.querySelector('.display2').innerText = "Puntaje: " + 0 + 
        "\nIntentos: " + intento + 
        "\nPokemon incorrecto, intentalo nuevamente";
        let mensaje= document.querySelector(".displayMensaje")
        mensaje.innerText= "Pokemon incorrecto, intentalo de nuevo";
        mensaje.style.border = "solid";
        mensaje.style.background= "red"
        mensaje.style.font="serif";
        intento = intento + 1;
        
        
        
    }
    
    puntaje = puntaje - 2;

}

function resetGame(){

    document.querySelector('.display2').innerText = "Puntaje: " + 0 + 
    "\nIntentos: " + 0 +"\nSelecciona el nombre del pokemon correcto";

    puntaje = 5;
    intento = 1;  
    document.querySelector(".displayMensaje").innerText= "";
    img.src = "../img/pnegro.jpg"  
    

    

}