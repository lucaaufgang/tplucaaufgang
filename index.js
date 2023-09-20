const inputMonto = document.getElementById("monto");
const inputCuotas = document.getElementById("cuotas");
const resp = document.getElementById("respuesta");
const boton1 = document.getElementById("boton1");

const cuotasArray = ["1","3","6","12","18","24"]

boton1.addEventListener("click", mostrarResultado);


function mostrarResultado() {
    const numCuotas = inputCuotas.value 

        
        if (inputMonto.value === '') {
            alert('Por favor, indicar el monto');
            resp.innerText = "debe indicar los valores"
            return;
        }
       
        if (cuotasArray.includes(numCuotas)) {
            calcularCuotas(inputMonto.value, parseInt(numCuotas));
        } else {
            console.log('Número de cuotas no válido.');
                }
    }


    const inputNombre = document.getElementById("nombre");
const inputMontoPrestamo = document.getElementById("montoPrestamo");
const inputCuotasPrestamo = document.getElementById("cuotasPrestamo");
const inputInteres = document.getElementById("interes");
const resp2 = document.getElementById("respuesta2");
const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", calcularPrestamo);

function calcularPrestamo() {
    const prestamo ={
        nombre: inputNombre,
        monto: inputMontoPrestamo,
        Cuotaprestamo: inputCuotasPrestamo,
        interes: inputInteres,
    }
        const respuesta = monto * Cuotaprestamo
        const respuesta1 =  monto * interes / 12
        const respuestaFinal = respuesta + respuesta1
        if (prestamo === '') {
            alert('Por favor, indicar los valores');
            resp.innerText = "debe indicar los valores"
        }
    }

   





