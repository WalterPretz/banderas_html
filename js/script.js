function banderaSeleciconada(){
    var ban_seleccionada = document.getElementById("selecBandera").value;
    if (ban_seleccionada == 1){
        document.getElementById("ejercicio1").style.display="block";
        document.getElementById("ejercicio2").style.display="none";
        document.getElementById("ejercicio3").style.display="none";
        document.getElementById("ejercicio4").style.display="none";
        document.getElementById("ejercicio5").style.display="none";
    }else if(ban_seleccionada == 2){
        document.getElementById("ejercicio2").style.display="block";
        document.getElementById("ejercicio1").style.display="none";
        document.getElementById("ejercicio3").style.display="none";
        document.getElementById("ejercicio4").style.display="none";
        document.getElementById("ejercicio5").style.display="none";
    }else if(ban_seleccionada == 3){
        document.getElementById("ejercicio3").style.display="block";
        document.getElementById("ejercicio2").style.display="none";
        document.getElementById("ejercicio1").style.display="none";
        document.getElementById("ejercicio4").style.display="none";
        document.getElementById("ejercicio5").style.display="none";
    }else if(ban_seleccionada == 4){
        document.getElementById("ejercicio4").style.display="block";
        document.getElementById("ejercicio2").style.display="none";
        document.getElementById("ejercicio3").style.display="none";
        document.getElementById("ejercicio1").style.display="none";
        document.getElementById("ejercicio5").style.display="none";
    }else if(ban_seleccionada == 5){
        document.getElementById("ejercicio5").style.display="block";
        document.getElementById("ejercicio2").style.display="none";
        document.getElementById("ejercicio3").style.display="none";
        document.getElementById("ejercicio4").style.display="none";
        document.getElementById("ejercicio1").style.display="none";
    }else{
        alert = "No se seleccionó ninguna bandera";
    }
}