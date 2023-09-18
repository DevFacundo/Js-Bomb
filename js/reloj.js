"use strict"

let inputTiempo = document.querySelector("#tiempo");
let divCuentaRegresiva = document.querySelector("#cuenta-regresiva");
let btnActivar = document.querySelector("#btn-activar");

btnActivar.addEventListener("click", iniciar);

function iniciar(){
    alert("CORRAAAA!!! SE INICIARA LA CUENTA REGRESIVA EN 3 SEGUNDOS!");
    let timer = setTimeout(iniciarCuentaRegresiva, 3000);
    btnActivar.innerHTML = "BOMBA ACTIVADA";
   
}
function iniciarCuentaRegresiva(){
    let valorActual= inputTiempo.value;
    let intervalo = setInterval(function(){
        divCuentaRegresiva.innerHTML = valorActual;
            if (valorActual !==0){
            valorActual --;
        } else{
            clearInterval(intervalo);

            cambiaback2();
        }
    }, 1000);
    setTimeout(cambiaback1,5000);
}
function cambiaback1(){
    console.log("entrando al segundo 2");
    document.querySelector("#contenedor").style.filter= "drop-shadow( 0 0 200px gold)";
    
}
function cambiaback2(){
    console.log("hola");
    document.body.style.backgroundImage ="url('images/bombaexplotada.webp')";
    document.querySelector("#contenedor").style.visibility= "hidden";
    document.body.style.backgroundSize= "100%";

}