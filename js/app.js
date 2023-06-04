let sis = new Sistema();
sis.precargarUsuario();

function eventos(){
    // Volver al dashboard
    document.querySelector('#btnDashbord').addEventListener('click', volverAlDashboard);

    //Login
    document.querySelector('#btnLogin').addEventListener('click', login);
    document.querySelector('#btnIrALogin').addEventListener('click', mostrarLogin);

    //Crear Usuario
    document.querySelector('#btnIrACrearUsuario').addEventListener('click', mostrarCrearUsuario);
    document.querySelector('#btnRegistrarse').addEventListener('click', registrarse);
}

eventos();


// FUNCIONES OCULTAR Y MOSTRAR
function ocultar(p) {
    document.querySelector(`${p}`).style.display = "none";
    
}
function mostrar(p){
    document.querySelector(`${p}`).style.display = "";
}

// OCULTAR COSAS
ocultar('.contendorLogin');
ocultar('#btnLogout');
ocultar('#btnDashbord');



function volverAlDashboard(){
    ocultar('.contendorLogin');
    ocultar('#btnLogout');
    ocultar('#btnDashbord');
    mostrar('.contendorBienvenida');
    mostrar('#btnIrALogin');
}



////////////////////////////////////////////////////////////////////////
//                              LOGIN        
////////////////////////////////////////////////////////////////////////

function mostrarLogin(){
    // Cuando voy a loguearme oculto boton login
    ocultar('#btnIrALogin');    
    // Oculto bienvenida
    ocultar('.contendorBienvenida');
    // Muestro el login 
    mostrar('.contendorLogin');
    // Muestro boton para ir al dashboard
    mostrar('#btnDashbord');
}

function login(){
    let mensaje = '';
    // Capturo el usario 
    let usuario = document.querySelector("#txtUsuario").value;
    // Capturo la password
    let password = document.querySelector("#txtPassword").value;
    // Compruebo que ningun campo este vacio, en el caso de que no
    // se le retornara el mensaje `Debe ingresar usuario y contrasena`
    if (sis.esVacio(usuario) && sis.esVacio(password)) {
        // Realizo un llamado a la funcion login la cual se encarga de verificar
        // si el usario existe, en caso de que si me retorna 'true', en el caso 
        // contrario me retorna 'false'
        if(sis.login(usuario, password)) {
            mensaje = `Bien`;
        }else{
            mensaje = `Verifique usuario y/o contrasena.`;
        }
    } else {
        mensaje = `Debe ingresar usuario y contrasena.`;
    }

    if(mensaje === 'Bien'){
        ocultar('#btnDashbord');
        ocultar('.contendorLogin');
        mostrar('#btnLogout');
        // VAN MAS COSAS
    }

    document.querySelector("#divMostrarErrorLogin").innerHTML = mensaje;
}

////////////////////////////////////////////////////////////////////////
//                              END LOGIN        
////////////////////////////////////////////////////////////////////////








////////////////////////////////////////////////////////////////////////
//                             CREAR USUARIO        
////////////////////////////////////////////////////////////////////////

function mostrarCrearUsuario(){
    
}

function registrarse(){
    let mensaje = '';
    let nombre = document.querySelector('#txtCrearUsuarioNombre').value;
    let nombreUsuario = document.querySelector('#txtCrearUsuarioUser').value;
    let password = document.querySelector('#txtCrearUsuarioPassword').value;

    if(sis.esVacio(nombre) && sis.esVacio(nombreUsuario) && sis.esVacio(password)){
        if(sis.usuarioRepetido(nombreUsuario)){
            if(sis.validarContrasenia(password)){

            }else{
                mensaje = '';
            }
        }else{
            mensaje = `Ya existe un usuario un usuario con el nombre ${nombreUsuario}.`;
        }
    }else{
        mensaje = `Debe ingresar nombre, nombre usuario y contrasena.`;
    }

}

////////////////////////////////////////////////////////////////////////
//                           END CREAR USUARIO         
////////////////////////////////////////////////////////////////////////