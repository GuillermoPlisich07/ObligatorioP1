////////////////////////////////////////////////////////////////////////
//                             GENERAL FUNCIONES        
////////////////////////////////////////////////////////////////////////
let sis = new Sistema();
sis.precargarUsuario();
sis.precargarCensos();
sis.precargaDepartamentos();
sis.precargaOcupacion();

function eventos(){

    // BOTONES FORMULARIO    
    document.querySelector('#btnEliminarCenso').addEventListener('click', mostrarConfirmacionDeEliminar);
    document.querySelector('#btnConfirmarEliminar').addEventListener('click', eliminarCenso);
    document.querySelector('#btnCancelarEliminar').addEventListener('click', cancelarEliminacion);
    document.querySelector('#btnVolverABuscarCensista').addEventListener('click', mostrarBuscarCenso);
    document.querySelector('#btnEnviarCenso').addEventListener('click', llamarEnviar);
    document.querySelector('#btnEditarCenso').addEventListener('click', llamarEdiar);
    document.querySelector('#btnValidarCenso').addEventListener('click', llamarValidar);
    



    //Menu Censista
    document.querySelector('#btnIrACenso').addEventListener('click',mostrarBuscarCenso);


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

// VOLVER AL DASHBOARD
function volverAlDashboard(){
    ocultar('.contendorLogin');
    ocultar('#btnDashbord');
    mostrar('.contendorBienvenida');
    if(sis.usuarioLogin===null){
        mostrar('#btnIrALogin');
        ocultar('#btnLogout');
    }else{
        ocultar('#btnIrALogin');
        ocultar('#btnIrAInvitado');
        mostrar('#btnLogout');
        mostrar('#btnIrACenso');
        mostrar('#btnIrAReasignarCenso');
        mostrar('#btnIrValidarCenso');
        mostrar('#btnIrAEstadisticas');
    }
    ocultar('.buscarCenso');
    ocultar('.contendorCrearUsuario');
    ocultar('.divFormulario');
    ocultar('.divVolverABuscar');
    ocultar('#divResultadoBusqueda');
    ocultar('.divResultadoEliminar');
    ocultar('.divMensajeFormulario');
}

// OCULTAR COSAS
function onload(){
    ocultar('.contendorLogin');
    ocultar('#btnLogout');
    ocultar('#btnDashbord');
    ocultar('.contendorCrearUsuario');
    ocultar('.buscarCenso');
    ocultar('.divFormulario');
    ocultar('.divVolverABuscar');
    ocultar('#divResultadoBusqueda');
    ocultar('#btnIrACenso');
    ocultar('#btnIrAReasignarCenso');
    ocultar('#btnIrValidarCenso');
    ocultar('#btnIrAEstadisticas');
    ocultar('.divResultadoEliminar');
    ocultar('.divMensajeFormulario');
}
onload();


// FUNCION PARA LIMPIAR CAMPOS
function limpiarCampo(campo){
    document.querySelector(`#${campo}`).value='';
}

function limpiarMensajes(campo){
    document.querySelector(`#${campo}`).innerHTML='';
}

function limpiarFormulario(){
    limpiarCampo('txtNombreFormulario');
    limpiarCampo('txtApellidoFormulario');
    limpiarCampo('txtCedulaFormulario');
    limpiarCampo('txtEdadFormulario');
    limpiarCampo('selDepartamentoFormulario');
    limpiarCampo('selOcupacionFormulario');
    limpiarCampo('chkValidarFormulario');
}

// CARGAR CAMPOS
function cargarSelectDepartamento(){
    let opciones=`<option value="-1">Seleccione..</option>`;
    for (let i = 0; i < sis.departamentos.length; i++) {
        let objetoDepartamento = sis.departamentos[i];
        opciones+=`<option value="${objetoDepartamento.id}">${objetoDepartamento.nombre}</option>`;
        
    }
    document.querySelector('#selDepartamentoFormulario').innerHTML=opciones;
}

function cargarSelectOcupacion(){
    let opciones=`<option value="-1">Seleccione..</option>`;
    for (let i = 0; i < sis.ocupaciones.length; i++) {
        let objetoOcupacion = sis.ocupaciones[i];
        opciones+=`<option value="${objetoOcupacion.id}">${objetoOcupacion.nombre}</option>`;
        
    }
    document.querySelector('#selOcupacionFormulario').innerHTML=opciones;
}





////////////////////////////////////////////////////////////////////////
//                      GENERAL FUNCIONES END       
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//                              LOGIN        
////////////////////////////////////////////////////////////////////////

function mostrarLogin(){
    limpiarCampo('txtUsuario');
    limpiarCampo('txtPassword');
    limpiarMensajes('divMostrarErrorLogin');

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
        volverAlDashboard();
    }

    document.querySelector("#divMostrarErrorLogin").innerHTML = mensaje;
}

////////////////////////////////////////////////////////////////////////
//                               
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//                             CREAR USUARIO        
////////////////////////////////////////////////////////////////////////

function mostrarCrearUsuario(){
    limpiarCampo('txtCrearUsuarioNombre');
    limpiarCampo('txtCrearUsuarioUser');
    limpiarCampo('txtCrearUsuarioPassword');
    limpiarMensajes('divMostrarRegistrarse');
    limpiarMensajes('divMostrarErrorRegistrarse');


    mostrar('.contendorRegistro');
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
//                                  
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//                             BUSCAR CENSO        
////////////////////////////////////////////////////////////////////////

function mostrarBuscarCenso(){
    limpiarCampo('txtBuscarCedula');
    limpiarMensajes('divResultadoBusquedaError');
    limpiarMensajes('divResultadoBusqueda');

    // Cuando voy a buscar censo oculto boton login
    ocultar('#btnIrALogin');
    // Oculto bienvenida
    ocultar('.contendorBienvenida');
    // Muestro el buscar censo 
    mostrar('.buscarCenso');
    // Muestro boton para ir al dashboard
    mostrar('#btnDashbord');
    // Ocultar si vengo de eliminar *(Invitado)
    ocultar('.divMensajeFormulario');
    // Ocultar Fomrulario si vengo del formulario *(Censista)
    ocultar('.divFormulario');
    ocultar('#divResultadoBusqueda');
    ocultar('.divVolverABuscar');
    
}

function buscar(){
    ocultar('.buscarCenso');
    limpiarFormulario();
   
    let cedula = document.querySelector("#txtBuscarCedula").value;
    let mensaje = "";

    limpiarCampo('txtBuscarCedula');
    limpiarMensajes('divResultadoBusquedaError');
    limpiarMensajes('divResultadoBusqueda');

    if (sis.validarFormatoCedula(cedula)) {
        if(sis.validarDigitoVerificador(cedula)){
            let mensajeBusqueda=sis.buscarCenso(cedula);
            cargarSelectDepartamento();
            cargarSelectOcupacion();
            mensaje = sis.mostrarFormulario(mensajeBusqueda, cedula);
        }else{
            mensaje = "El digito verificador es incorrecto";
        }
    }else{
        mensaje = "La cédula ingresada no cumple con el formato 1.111.111-1";
    }

    if(mensaje==="La cédula ingresada no cumple con el formato 1.111.111-1" || mensaje==="El digito verificador es incorrecto"){
        mostrar('.buscarCenso');
        document.querySelector("#divResultadoBusquedaError").innerHTML = mensaje;
    }else{
        mostrar("#divResultadoBusqueda");
        document.querySelector("#divResultadoBusqueda").innerHTML = mensaje;
    }
    
}

////////////////////////////////////////////////////////////////////////
//                                   
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//                         BOTONES FORMULARIO
////////////////////////////////////////////////////////////////////////

function mostrarMensaje(mensaje){
    limpiarMensajes('divResultadoFormulario');
    document.querySelector('#divResultadoFormulario').innerHTML=mensaje;
    mostrar('.divMensajeFormulario');
    ocultar('.divFormulario');
    ocultar('#divResultadoBusqueda');
    ocultar('.divVolverABuscar');
    let temporizador = setTimeout(mostrarBuscarCenso, 4000);
}

//ELIMINAR
function mostrarConfirmacionDeEliminar(){
    ocultar('.divFormulario');
    ocultar('#divResultadoBusqueda');
    mostrar('.divResultadoEliminar');
    
}

function eliminarCenso(){
    let cedula=document.querySelector('#txtCedulaFormulario').value;
    let mensaje='';
    if(sis.usuarioLogin === null){
        mensaje=sis.eliminar(cedula);
    }else{
        mensaje = 'Usted no esta autorizado para eliminar este censo';
    }

    if(mensaje === 'Usted no esta autorizado para eliminar este censo'){
        limpiarMensajes('divResultadoEliminarError');
        document.querySelector('.divResultadoEliminarError').innerHTML=mensaje;
    }else{
        limpiarMensajes('divResultadoFormulario');
        document.querySelector('#divResultadoFormulario').innerHTML=mensaje;
        ocultar('.divResultadoEliminar');
        mostrar('.divMensajeFormulario');
        
        let temporizador = setTimeout(mostrarBuscarCenso, 4000);
    }

}

function cancelarEliminacion(){
    mostrar('#divResultadoBusqueda')
    mostrar('.divFormulario');
    ocultar('.divResultadoEliminar');
}

//ENVIAR
function enviarCenso(nombre ,apellido ,cedula, edad, departamento, ocupacion, checkValidar){

    let mensaje = '';

    if(sis.esVacio(nombre) && sis.esVacio(apellido) && sis.esVacio(cedula) && sis.esVacio(edad)){
        if(departamento>=0 && ocupacion>=0){
            if (sis.esNumerico(edad)) {
                if(edad>=0 && edad<=130){
                    if(sis.validarFormatoCedula(cedula)) {
                        if(sis.validarDigitoVerificador(cedula)){
                            if(sis.usuarioLogin === null){
                                mensaje = sis.enviar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar);
                            }else{
                                if(checkValidar===true){
                                    mensaje = sis.enviar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar);
                                }else{
                                    mensaje = 'Debe validar el censo.'
                                }
                            }
                        }else{
                            mensaje = 'El digito verificador es incorrecto.';
                        }
                    }else{
                        mensaje = 'La cédula ingresada no cumple con el formato 1.111.111-1.';
                    }
                }else{
                    mensaje = 'La edad debe de estar en el rango de 0 a 130 años.';
                }
            } else {
                mensaje = 'La edad debe de ser de tipo numerico.';
            }
        }else{
            mensaje = 'Debe seleccionar en el apartado ocupacion o departemento una opcion.';
        }
    }else{
        mensaje = 'Debe completar todos los datos.';
    }
    console.log(mensaje);
    console.log(sis.censos);
}

function llamarEnviar(){
    let nombre = document.querySelector('#txtNombreFormulario').value;
    let apellido = document.querySelector('#txtApellidoFormulario').value;
    let cedula = document.querySelector('#txtCedulaFormulario').value;
    let edad = document.querySelector('#txtEdadFormulario').value;
    let departamento = document.querySelector('#selDepartamentoFormulario').value;
    let ocupacion = document.querySelector('#selOcupacionFormulario').value;
    let checkValidar = document.querySelector('#chkValidarFormulario').checked;
    
    enviarCenso(nombre ,apellido ,cedula, edad, departamento, ocupacion, checkValidar);
}

//EDITAR
function modificarCenso(nombre ,apellido ,cedula, edad, departamento, ocupacion, checkValidar){

    let mensaje = '';
    let error = true;

    if(sis.esVacio(nombre) && sis.esVacio(apellido) && sis.esVacio(cedula) && sis.esVacio(edad)){
        if(departamento>=0 && ocupacion>=0){
            if (sis.esNumerico(edad)) {
                if(edad>=0 && edad<=130){
                    if(sis.validarFormatoCedula(cedula)) {
                        if(sis.validarDigitoVerificador(cedula)){
                            if(sis.usuarioLogin === null){
                                mensaje = sis.modificar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar);
                                mensaje += '<br> Se le retornara a buscar censo';
                                error = false;
                            }else{
                                if(checkValidar===true){
                                    mensaje = sis.modificar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar);
                                    mensaje += '<br> Se le retornara a buscar censo';
                                    error = false;
                                }else{
                                    mensaje = 'Debe validar el censo.'
                                }
                            }
                        }else{
                            mensaje = 'El digito verificador es incorrecto.';
                        }
                    }else{
                        mensaje = 'La cédula ingresada no cumple con el formato 1.111.111-1.';
                    }
                }else{
                    mensaje = 'La edad debe de estar en el rango de 0 a 130 años.';
                }
            } else {
                mensaje = 'La edad debe de ser de tipo numerico.';
            }
        }else{
            mensaje = 'Debe seleccionar en el apartado ocupacion o departemento una opcion.';
        }
    }else{
        mensaje = 'Debe completar todos los datos.';
    }
    
    if(error){
        document.querySelector('#divResultadoFormulario').innerHTML=mensaje;
        mostrar('.divMensajeFormulario');
    }else{
        mostrarMensaje(mensaje);
    }
   
}

function llamarEdiar(){
    let nombre = document.querySelector('#txtNombreFormulario').value;
    let apellido = document.querySelector('#txtApellidoFormulario').value;
    let cedula = document.querySelector('#txtCedulaFormulario').value;
    let edad = document.querySelector('#txtEdadFormulario').value;
    let departamento = document.querySelector('#selDepartamentoFormulario').value;
    let ocupacion = document.querySelector('#selOcupacionFormulario').value;
    let checkValidar = document.querySelector('#chkValidarFormulario').checked;

    modificarCenso(nombre ,apellido ,cedula, edad, departamento, ocupacion, checkValidar);
}

function llamarValidar(){
    let nombre = document.querySelector('#txtNombreFormulario').value;
    let apellido = document.querySelector('#txtApellidoFormulario').value;
    let cedula = document.querySelector('#txtCedulaFormulario').value;
    let edad = document.querySelector('#txtEdadFormulario').value;
    let departamento = document.querySelector('#selDepartamentoFormulario').value;
    let ocupacion = document.querySelector('#selOcupacionFormulario').value;
    let checkValidar = document.querySelector('#chkValidarFormulario').checked;

    modificarCenso(nombre ,apellido ,cedula, edad, departamento, ocupacion, checkValidar);
}


////////////////////////////////////////////////////////////////////////
//                                   
////////////////////////////////////////////////////////////////////////    