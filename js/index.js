var d = document;
var contador=0;
var intervalo;
var sonido = d.getElementById("dadosFx");
function dados() {
    
    var numero1 = Math.floor(Math.random() * 6) + 1;
    var numero2 = Math.floor(Math.random() * 6) + 1;
    var dado = d.getElementById('primer-dado');
    switch (numero1) {
        case 1:
            dado.innerHTML = "<div class='primera-cara'><span class='pip'></span></div>"
            break;
        case 2:
            dado.innerHTML = "<div class='segunda-cara'><span class='pip'></span><span class='pip'></span></div>"
            break;
        case 3:
            dado.innerHTML = "<div class='tercera-cara'><div class='columna'><span class='pip'></span></div><div class='columna'><span class='pip'></span></div><div class='columna'><span class='pip'></span></div></div>"
            break;
        case 4:
            dado.innerHTML = "<div class='cuarta-cara'><div class='columna'><span class='pip'></span><span class='pip'></span></div><div class='columna'><span class='pip'></span><span class='pip'></span></div></div>"
            break;
        case 5:
            dado.innerHTML = "<div class='quinta-cara'><div class='columna'><span class='pip'></span><span class='pip'></span></div><div class='columna'><span class='pip'></span></div><div class='columna'><span class='pip'></span><span class='pip'></span></div></div>"
            break;
        case 6:
            dado.innerHTML = "<div class='sexta-cara'><div class='columna'><span class='pip'></span><span class='pip'></span><span class='pip'></span></div><div class='columna'><span class='pip'></span><span class='pip'></span><span class='pip'></span></div></div>"
            break;
    }
    var dado = d.getElementById('segundo-dado');
    switch (numero2) {
        case 1:
            dado.innerHTML = "<div class='primera-cara'><span class='pip'></span></div>"
            break;
        case 2:
            dado.innerHTML = "<div class='segunda-cara'><span class='pip'></span><span class='pip'></span></div>"
            break;
        case 3:
            dado.innerHTML = "<div class='tercera-cara'><div class='columna'><span class='pip'></span></div><div class='columna'><span class='pip'></span></div><div class='columna'><span class='pip'></span></div></div>"
            break;
        case 4:
            dado.innerHTML = "<div class='cuarta-cara'><div class='columna'><span class='pip'></span><span class='pip'></span></div><div class='columna'><span class='pip'></span><span class='pip'></span></div></div>"
            break;
        case 5:
            dado.innerHTML = "<div class='quinta-cara'><div class='columna'><span class='pip'></span><span class='pip'></span></div><div class='columna'><span class='pip'></span></div><div class='columna'><span class='pip'></span><span class='pip'></span></div></div>"
            break;
        case 6:
            dado.innerHTML = "<div class='sexta-cara'><div class='columna'><span class='pip'></span><span class='pip'></span><span class='pip'></span></div><div class='columna'><span class='pip'></span><span class='pip'></span><span class='pip'></span></div></div>"
            break;
    }
}

function final(){
    clearInterval(intervalo);
}
function comienzoYFinal(){
    var cuerpo = d.getElementById('cuerpo');
    cuerpo.innerHTML="<div class='primer-dado' id='primer-dado'></div><div class='segundo-dado' id='segundo-dado'></div>"
    tiempo();
    setTimeout(final,2000);
}
function tiempo(){
    intervalo=setInterval(dados,200);
}
