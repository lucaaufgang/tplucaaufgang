const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
button.addEventListener('click', (e) => {
    e.preventDefault()
    const datos = {
        username: username.value,
        password: password.value
        }
        location.href = "index.html"
        localStorage.setItem("user" , JSON.stringify(datos))
    }
)