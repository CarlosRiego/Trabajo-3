
function adivinanzaUno(){

    var intentos = document.getElementById("intentos").textContent;
    var pista1 = document.getElementById("pista1");
    var pista2 = document.getElementById("pista2");
    var alert1 = document.getElementById("alert-success");
    var alert2 = document.getElementById("alert-danger");
    var input = document.getElementById("input1");
    var min = input.value;
    var res = min.toLowerCase();
  

    if(res == "sarten" && intentos != 0){
        console.log("Correcto")
        alert1.style.display = "block"
    }
    else{
        intentos = intentos - 1;
        document.getElementById("intentos").innerHTML = intentos
    }

    if(intentos == 3){
        pista1.style.display = "block"
    }

    if(intentos == 2){
        pista2.style.display = "block"
    }


    if(intentos <= 0){
        alert2.style.display = "block"
    }

    if(intentos < 0){
        adivinanzaRestore()
    }

  
}

function adivinanzaRestore(){
    var pista1 = document.getElementById("pista1");
    var pista2 = document.getElementById("pista2");
    var intentos = document.getElementById("intentos").textContent;
    var alert1 = document.getElementById("alert-success");
    var alert2 = document.getElementById("alert-danger");
    document.getElementById("input1").value = "";

    intentos = 4

    document.getElementById("intentos").innerHTML = intentos

    pista1.style.display = "none"
    pista2.style.display = "none"
    alert1.style.display = "none"
    alert2.style.display = "none"
}