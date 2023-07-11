let ingresarNumero = parseInt(prompt("ingresar un numero"));
let segundoNumero = parseInt(prompt("ingresar las cuotas"));

let resultado = ingresarNumero / segundoNumero

console.log("pagando en " + segundoNumero + " cuotas, las cuotas son de $" + resultado );

if (segundoNumero != 1){
    let respuesta = ingresarNumero / 1
    console.log("pagando en 1 cuotas, las cuotas son de $" + respuesta );
}
else if(segundoNumero != 3){
    let respuesta2 = ingresarNumero / 3
    console.log("pagando en 3 cuotas, las cuotas son de $" + respuesta2 );
}
else if(segundoNumero != 6){
    let respuesta3 = ingresarNumero / 6
    console.log("pagando en 6 cuotas, las cuotas son de $" + respuesta3 );
}
else if(segundoNumero != 12){
    let respuesta4 = ingresarNumero / 12
    console.log("pagando en 12 cuotas, las cuotas son de $" + respuesta4 );
}
else if(segundoNumero != 18){
    let respuesta5 = ingresarNumero / 18
    console.log("pagando en 18 cuotas, las cuotas son de $" + respuesta5 );
}
else if(segundoNumero != 24) {
    let respuesta6 = ingresarNumero / 24
    console.log("pagando en 24 cuotas, las cuotas son de $" + respuesta6 );
}