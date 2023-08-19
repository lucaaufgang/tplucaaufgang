const inputMonto = document.getElementById("monto")
const inputCuotas = document.getElementById("cuotas")

const resp = document.getElementById("respuesta")

const boton = document.getElementById("Boton")
boton.addEventListener("click", mostrarResultado)

function mostrarResultado(){
    const mostrar = inputMonto.value / inputCuotas.value
    resp.innerText = mostrar
}
const miArray = [1,3,6,12,18,24]

if (resp != miArray[0]){
    let result1 = inputCuotas / miArray[0]
    console.log("pagando en 1 cuotas, las cuotas son de $" + result1 );
}
else if(resp != miArray[1]){
    let result2 = inputCuotas / miArray[1]
    console.log("pagando en 3 cuotas, las cuotas son de $" + result2 );
}
else if(resp != miArray[2]){
    let rresult3 = inputCuotas / miArray[2]
    console.log("pagando en 6 cuotas, las cuotas son de $" + result3 );
}
else if(resp != miArray[3]){
    let result4 = inputCuotas / miArray[3]
    console.log("pagando en 12 cuotas, las cuotas son de $" + result4 );
}
else if(resp != miArray[4]){
    let result5 = inputCuotas / miArray[4]
    console.log("pagando en 18 cuotas, las cuotas son de $" + result5 );
}
else if(resp != miArray[5]) {
    let result6 = inputCuotas / miArray[5]
    console.log("pagando en 24 cuotas, las cuotas son de $" + result6 );
}
