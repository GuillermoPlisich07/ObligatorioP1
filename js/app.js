let sis = new Sistema();
sis.precargarUsuario();
sis.precargarCensos();

function eventos(){

    // Buscar Censo
    document.querySelector('#btnIrAInvitado').addEventListener('click', mostrarBuscarCenso);
    document.querySelector('#btnBuscarCedula').addEventListener('click', buscar);

    // Volver al dashboard
    document.querySelector('#btnDashbord').addEventListener('click', volverAlDashboard);

    //Login
    document.querySelector('#btnLogin').addEventListener('click', login);
    document.querySelector('#btnIrALogin').addEventListener('click', mostrarLogin);

    //Crear Usuario
    document.querySelector('#btnIrACrearUsuario').addEventListener('click', mostrarCrearUsuario);
    document.querySelector('#btnRegistrarse').addEventListener('click', registrarse);
    document.querySelector('#btnVolverALogin').addEventListener('click', mostrarLogin);
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
ocultar('.contendorCrearUsuario');
// ocultar('.buscarCenso');


function volverAlDashboard(){
    ocultar('.contendorLogin');
    ocultar('#btnLogout');
    ocultar('#btnDashbord');
    mostrar('.contendorBienvenida');
    mostrar('#btnIrALogin');
    // ocultar('.buscarCenso');
    ocultar('.contendorCrearUsuario');
}



////////////////////////////////////////////////////////////////////////
//                              LOGIN        
////////////////////////////////////////////////////////////////////////

function mostrarLogin(){
    // Cuando voy a loguearme oculto boton login
    ocultar('#btnIrALogin');
    // Ocular Registro de usuario si vengo desde ese apartado 
    ocultar('.contendorCrearUsuario');    
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
//                              END-LOGIN        
////////////////////////////////////////////////////////////////////////








////////////////////////////////////////////////////////////////////////
//                             CREAR USUARIO        
////////////////////////////////////////////////////////////////////////

function mostrarCrearUsuario(){
    ocultar('.contendorRegistroExistoso');
    mostrar('.contendorCrearUsuario');
    ocultar('.contendorLogin');
}

function registrarse(){
    let mensaje = '';
    let nombre = document.querySelector('#txtCrearUsuarioNombre').value;
    let nombreUsuario = document.querySelector('#txtCrearUsuarioUser').value;
    let password = document.querySelector('#txtCrearUsuarioPassword').value;

    if(sis.esVacio(nombre) && sis.esVacio(nombreUsuario) && sis.esVacio(password)){
        if(sis.usuarioRepetido(nombreUsuario)){
            if(sis.validarContrasenia(password)){
                sis.ingresarRegistro(nombre,nombreUsuario,password);
                mensaje = 'Bien'; 
            }else{
                mensaje = 'La contraseña deberá tener un mínimo de 5 caracteres, contando con al menos una mayúscula, una minúscula y un número.';
            }
        }else{
            mensaje = `Ya existe un usuario un usuario con el nombre ${nombreUsuario}.`;
        }
    }else{
        mensaje = `Debe ingresar nombre, nombre usuario y contrasena.`;
    }

    if(mensaje === 'Bien'){
        ocultar('.contendorRegistro');
        mostrar('.contendorRegistroExistoso');
        document.querySelector("#divMostrarRegistrarse").innerHTML = 'El registro se realizo exitosamente!';
    }else{
        document.querySelector("#divMostrarErrorRegistrarse").innerHTML = mensaje;
    }

}

////////////////////////////////////////////////////////////////////////
//                           END-CREAR USUARIO         
////////////////////////////////////////////////////////////////////////








////////////////////////////////////////////////////////////////////////
//                             BUSCAR CENSO        
////////////////////////////////////////////////////////////////////////

function mostrarBuscarCenso(){
    // Cuando voy a buscar censo oculto boton login
    ocultar('#btnIrALogin');
    // Oculto bienvenida
    ocultar('.contendorBienvenida');
    // Muestro el buscar censo 
    mostrar('.buscarCenso');
    // Muestro boton para ir al dashboard
    mostrar('#btnDashbord');
}

function buscar(){
    let cedula = document.querySelector("#txtBuscarCedula").value;

    let mensaje = "";

    if (sis.validarFormatoCedula(cedula) && sis.validarDigitoVerificador(cedula)) {
        let mensajeBusqueda=sis.buscarCenso(cedula);
        if(sis.usuarioLogin === null){
            
            if(mensajeBusqueda === 'Se le valido el censo! Ya no podra Modificarlo'){
                mensaje = mensajeBusqueda;
            }else if(mensajeBusqueda === 'Su censo esta pendiente a validar! Puede realizar modificaciones'){
                mensaje = mensajeBusqueda;
                

            }else if(mensajeBusqueda === 'Realice el censo'){
                mensaje = mensajeBusqueda;
                

            }else{
                mensaje = 'Hubo un error en el sistema';
            }

        }else{

            if(mensajeBusqueda === 'Esta persona tiene el censo validado! No se podra realizar un nuevo censo'){
                mensaje = mensajeBusqueda;
            }else if(mensajeBusqueda === 'Tiene el censo por validar!'){
                mensaje = mensajeBusqueda;


            }else if(mensajeBusqueda === 'Realice el censo'){
                mensaje = mensajeBusqueda;


            }else{
                mensaje = 'Hubo un error en el sistema';
            }

        }
    }else{
        mensaje = "La cédula ingresada no cumple con el formato 1.111.111-1"
    }

    document.querySelector("#divResultadoBusqueda").innerHTML = mensaje;
}

////////////////////////////////////////////////////////////////////////
//                           END CREAR USUARIO         
////////////////////////////////////////////////////////////////////////