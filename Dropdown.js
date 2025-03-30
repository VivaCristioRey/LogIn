function modalLogin() {
    var modal = document.getElementById('primerModal')
    var btn = document.getElementById('login')
    var span = document.getElementsByClassName('cerrar')[0]

    //Para abrir el modal
    btn.onclick = function () {
        modal.style.display = 'block';
    }

    //Para cerrar el modal
    span.onclick = function () {
        modal.style.display = 'none';
    }

    //Si el usuario clickea en otra parte fuera del modal, se cierra
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

function modalRegister() {
    var modal = document.getElementById("segundoModal")
    var btn = document.getElementById("signup")
    var span = document.getElementsByClassName("cerrar2")[0]

    //Para abrir el modal
    btn.onclick = function () {
        modal.style.display = 'block';
    }
    //Para cerrar el modal
    span.onclick = function () {
        modal.style.display = 'none';
    }
    //Si el usuario clickea en otra parte fuera del modal, se cierra
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// function modalRegister2() {
//     var btn = document.getElementById("signup")
//     var modal = document.getElementById("registerForm")

//     btn.onclick = function() {
//         modal.showModal()
//     }
// }

function sendRegister() {
    let user = document.getElementById("user").value
    let pass = document.getElementById("password").value
    let conffirmPass = document.getElementById("conffirmPass").value

    if (pass !== conffirmPass) {
        alert('Las constraseñas no coinciden')
    } else if (user && pass) {
        localStorage.setItem("username", user)
        localStorage.setItem("password", pass)
        alert('Usuario registrado correctamente')
    }
}

function SendLogIn() {
    let user = document.getElementById("regUser").value
    let pass = document.getElementById("regPassword").value
    // confirmamos la existencia del usuario y contraseña
    let storedUser = localStorage.getItem("username")
    let storedPass = localStorage.getItem("password")

    if (user === storedUser && pass === storedPass) {
        sessionStorage.setItem("loggedIn", true)
        alert("Iniciaste sesión")
        window.open("Logged.html")
    }
}

function btnDropdown() {
    let menu = document.getElementById('dropdownMenu')
    let btnDropdown = document.getElementById('btnDropdown')
    
    btnDropdown.addEventListener("click", function() {
        if(menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = "block"
        }
    })
}