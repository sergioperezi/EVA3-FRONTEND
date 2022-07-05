// INTEGRANTES:
// JAIME MUÑOZ CARRASCO
// SERGIO PEREZ INOSTROZA

function validar(){
    var nombre,rut, direccion, telefono, email, expresionRut, expresionTelefono;
    nombre = document.getElementById("nombre").value;
    rut = document.getElementById("rut").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;

    expresionRut = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
    expresionTelefono = /^9[0-9]{8}$/gm;

    if(nombre === "" || rut ==="" || direccion === "" || telefono ==="" || email === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length<=3) {
        alert("Ingrese un Nombre valido");
        return false;
    }
    else if (rut.length<9 || rut.length>10) {
        alert("Ingresa el Rut completo, sin puntos y con guion");
        return false;
    }
    else if(!expresionRut.test(rut)){
        alert ("Ingresa el Rut completo, sin puntos y con guion");
        return false;
    }
    else if (direccion.length<=3) {
        alert("Ingresa una direccion valida");
        return false;
    }
    else if(!expresionTelefono.test(telefono)){
        alert ("Ingresa Número sin '+' ni guion, debe comenzar con 9");
        return false;
    }
    else if (email.length<=3) {
        alert("Ingresa un Correo Electronico valido");
        return false;
    }
}

function mostrarDatos(){
    var nombre,rut, direccion, telefono, email;
    nombre = document.getElementById("nombre").value;
    rut = document.getElementById("rut").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;

    alert("El Nombre ingresado es: \n"+nombre + 
    "\n El Rut ingresado es: \n"+rut + 
    "\n La Direccion ingresada es: \n"+direccion + 
    "\n El Telefono ingresado es: \n"+telefono +
    "\n El Email ingresado es: \n"+email)
}

