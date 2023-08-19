const inputMonto = document.getElementById("monto")
const inputCuotas = document.getElementById("cuotas")

const resp = document.getElementById("respuesta")

const boton = document.getElementById("Boton")
boton.addEventListener("click", mostrarResultado)

function mostrarResultado(){
    const mostrar = inputMonto / inputCuotas
    resp.innertext = mostrar
}

const miArray = [1,3,6,12,18,24]

if (segundoNumero != miArray[0]){
    let respuesta = ingresarNumero / miArray[0]
    console.log("pagando en 1 cuotas, las cuotas son de $" + respuesta );
}
else if(segundoNumero != miArray[1]){
    let respuesta2 = ingresarNumero / miArray[1]
    console.log("pagando en 3 cuotas, las cuotas son de $" + respuesta2 );
}
else if(segundoNumero != miArray[2]){
    let respuesta3 = ingresarNumero / miArray[2]
    console.log("pagando en 6 cuotas, las cuotas son de $" + respuesta3 );
}
else if(segundoNumero != miArray[3]){
    let respuesta4 = ingresarNumero / miArray[3]
    console.log("pagando en 12 cuotas, las cuotas son de $" + respuesta4 );
}
else if(segundoNumero != miArray[4]){
    let respuesta5 = ingresarNumero / miArray[4]
    console.log("pagando en 18 cuotas, las cuotas son de $" + respuesta5 );
}
else if(segundoNumero != miArray[5]) {
    let respuesta6 = ingresarNumero / miArray[5]
    console.log("pagando en 24 cuotas, las cuotas son de $" + respuesta6 );
}
