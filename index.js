const inputMonto = document.getElementById("monto");
const inputCuotas = document.getElementById("cuotas");
const resp = document.getElementById("respuesta");
const boton1 = document.getElementById("boton1");

const cuotasArray = ["1","3","6","12","18","24", "30", "32", "36", "48"]

boton1.addEventListener("click", mostrarResultado);


function mostrarResultado() {
    const numCuotas = inputCuotas.value 
            if (inputMonto.value === '') {
            alert('Por favor, indicar el monto');
            resp.innerText = "debe indicar los valores"
        }
        if (cuotasArray.includes(numCuotas)) {
            calcularCuotas(inputMonto.value, parseInt(numCuotas));
        } else {
            console.log('Número de cuotas no válido.');
                }
    }

    function calcularCuotas(inputMonto, cuotas){
        const result = inputMonto / cuotas;
        resp.innerText = 'cada cuota es de $' + result;
    }

    const inputNombre = document.getElementById("nombre");
const inputMontoPrestamo = document.getElementById("montoPrestamo");
const inputCuotasPrestamo = document.getElementById("cuotasPrestamo");
const inputInteres = document.getElementById("interes");
const resp2 = document.getElementById("respuesta2");
const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", calcularPrestamo);

function calcularPrestamo() {
    const numeroCuotas = inputCuotasPrestamo.value
    const prestamo ={
        nombre: inputNombre.value,
        monto: inputMontoPrestamo.value,
        Cuotaprestamo: numeroCuotas.value,
        interes: inputInteres.value,
    }

    if (cuotasArray.includes(numeroCuotas)) {
        FinalPrestamo(inputMontoPrestamo,inputInteres,parseInt(numeroCuotas));
    } else {
        console.log('Número de cuotas no válido.');
            }
        const respuesta = monto * numeroCuotas
        const respuesta1 =  monto * interes / 12
        const respuestaFinal = respuesta + respuesta1
       
        if (prestamo === '') {
            alert('Por favor, indicar los valores');
            resp.innerText = "debe indicar los valores"
        }
    }
    function FinalPrestamo(inputMontoPrestamo,inputInteres, cuotasPrestamo,inputNombre){
        const respuesta = inputMontoPrestamo * cuotasPrestamo
        const respuesta1 =  inputMontoPrestamo * inputInteres / 12
        const respuestaFinal = respuesta + respuesta1
        resp2.innerText = inputNombre + 'debe pagar' + respuestaFinal
    }
   





