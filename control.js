let user = document.getElementById("user");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    limpiarCustomValidity();
    if (user.value == "") { user.setCustomValidity("El usuario no puede estar vacio"); }
    else if (!user.value.includes("@")) { user.setCustomValidity("Este campo debe contener un @"); }
    else if (password.value =="") { password.setCustomValidity("La contraseña no puede estar vacia"); }
    else { limpiarCustomValidity(); }
}
);

function limpiarCustomValidity() {
    user.setCustomValidity("");
    password.setCustomValidity("");
}