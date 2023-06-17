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
    document.querySelector('#btnEnviarCenso').addEventListener('click', llamarEnviarCenso);
    document.querySelector('#btnEditarCenso').addEventListener('click', llamarEdiar);
    document.querySelector('#btnValidarCenso').addEventListener('click', llamarValidar);
    
    //BOTONES CENSISTAS
    document.querySelector('#btnIrAReasignarCenso').addEventListener('click',mostrarReasignarCenso);
    document.querySelector('#btnReasignar').addEventListener('click',reasignarCenso);
    document.querySelector('#btnIrValidarCenso').addEventListener('click',mostrarTablaParaValidar);
    document.querySelector('#btnIrAEstadisticas').addEventListener('click',mostrarEstadisticas);


    //SELECT ESTADISTICAS CENSISTA 
    document.querySelector('#selDepartamentosEstadisticas').addEventListener('change',depEstadisticasEdades);

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
    ocultar('.divContendorLogin');
    ocultar('#btnDashbord');
    mostrar('.divContendorBienvenida');
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
    ocultar('.divContenedorBuscarCenso');
    ocultar('.divContendorCrearUsuario');
    ocultar('.divContenedorFormulario');
    ocultar('.divContenedorVolverABuscar');
    ocultar('#divResultadoBusqueda');
    ocultar('.divContenedorResultadoEliminar');
    ocultar('.divContenedorMensajeFormulario');
    ocultar('.divContenedorReasignar');
    ocultar('#divContenedorCensosParaValidar');
    ocultar('.divContenedorEstadisticasCensista');
}

// OCULTAR COSAS
function onload(){
    ocultar('.divContendorLogin');
    ocultar('#btnLogout');
    ocultar('#btnDashbord');
    ocultar('.divContendorCrearUsuario');
    ocultar('.divContenedorBuscarCenso');
    ocultar('.divContenedorFormulario');
    ocultar('.divContenedorVolverABuscar');
    ocultar('#divResultadoBusqueda');
    ocultar('#btnIrACenso');
    ocultar('#btnIrAReasignarCenso');
    ocultar('#btnIrValidarCenso');
    ocultar('#btnIrAEstadisticas');
    ocultar('.divContenedorResultadoEliminar');
    ocultar('.divContenedorMensajeFormulario');
    ocultar('.divContenedorReasignar');
    ocultar('#divContenedorCensosParaValidar');
    ocultar('.divContenedorEstadisticasCensista');
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

function cargarSelectDepartamentoEstadisticas(){
    let opciones=`<option value="-1">Seleccione..</option>`;
    for (let i = 0; i < sis.departamentos.length; i++) {
        let objetoDepartamento = sis.departamentos[i];
        opciones+=`<option value="${objetoDepartamento.id}">${objetoDepartamento.nombre}</option>`;
        
    }
    document.querySelector('#selDepartamentosEstadisticas').innerHTML=opciones;
}

function cargarSelectOcupacion(){
    let opciones=`<option value="-1">Seleccione..</option>`;
    for (let i = 0; i < sis.ocupaciones.length; i++) {
        let objetoOcupacion = sis.ocupaciones[i];
        opciones+=`<option value="${objetoOcupacion.id}">${objetoOcupacion.nombre}</option>`;
        
    }
    document.querySelector('#selOcupacionFormulario').innerHTML=opciones;
}

function cargarSelectCensos(){
    let opciones=`<option value="-1">Seleccione..</option>`;

    let arrayCensos = sis.censosUsuarioNoValidados();

    for (let i = 0; i < arrayCensos.length; i++) {
        let objetoCenso = arrayCensos[i];
        opciones+=`<option value="${objetoCenso.cedula}">${objetoCenso.nombre} - ${objetoCenso.cedula}</option>`;
    }

    document.querySelector('#selCensos').innerHTML=opciones;
}


function cargarSelectCensistas(){
    let opciones=`<option value="-1">Seleccione..</option>`;
    for (let i = 0; i < sis.usuarios.length; i++) {
        let objetoUsuario = sis.usuarios[i];
        if(sis.usuarioLogin.nombreUsuario.toLowerCase() !== objetoUsuario.nombreUsuario.toLowerCase()){
            opciones+=`<option value="${objetoUsuario.nombreUsuario}">${objetoUsuario.nombre}</option>`;
        }
    }
    document.querySelector('#selUsuarios').innerHTML=opciones;
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
    ocultar('.divContendorCrearUsuario');    
    // Oculto bienvenida
    ocultar('.divContendorBienvenida');
    // Muestro el login 
    mostrar('.divContendorLogin');
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
    mostrar('.divContendorCrearUsuario');
    ocultar('.divContendorLogin');
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
    ocultar('.divContendorBienvenida');
    // Muestro el buscar censo 
    mostrar('.divContenedorBuscarCenso');
    // Muestro boton para ir al dashboard
    mostrar('#btnDashbord');
    // Ocultar si vengo de eliminar *(Invitado)
    ocultar('.divContenedorMensajeFormulario');
    // Ocultar Fomrulario si vengo del formulario *(Censista)
    ocultar('.divContenedorFormulario');
    ocultar('#divResultadoBusqueda');
    ocultar('.divContenedorVolverABuscar');
    ocultar('.divContenedorReasignar');
    ocultar('#divContenedorCensosParaValidar');
    ocultar('.divContenedorEstadisticasCensista');
    
}

function buscar(){
    ocultar('.divContenedorBuscarCenso');

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
            mensaje = sis.mostrarFormulario(mensajeBusqueda, cedula, 0);
        }else{
            mensaje = "El digito verificador es incorrecto";
        }
    }else{
        mensaje = "La cédula ingresada no cumple con el formato 1.111.111-1";
    }

    if(mensaje==="La cédula ingresada no cumple con el formato 1.111.111-1" || mensaje==="El digito verificador es incorrecto"){
        mostrar('.divContenedorBuscarCenso');
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
    mostrar('.divContenedorMensajeFormulario');
    ocultar('.divContenedorFormulario');
    ocultar('#divResultadoBusqueda');
    ocultar('.divContenedorVolverABuscar');
    let temporizador = setTimeout(mostrarBuscarCenso, 4000);
}

//ELIMINAR
function mostrarConfirmacionDeEliminar(){
    ocultar('.divContenedorFormulario');
    ocultar('#divResultadoBusqueda');
    mostrar('.divContenedorResultadoEliminar');
    
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
        ocultar('.divContenedorResultadoEliminar');
        mostrar('.divContenedorMensajeFormulario');
        
        let temporizador = setTimeout(mostrarBuscarCenso, 4000);
    }

}

function cancelarEliminacion(){
    mostrar('#divResultadoBusqueda')
    mostrar('.divContenedorFormulario');
    ocultar('.divContenedorResultadoEliminar');
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

function llamarEnviarCenso(){
    let nombre = document.querySelector('#txtNombreFormulario').value;
    let apellido = document.querySelector('#txtApellidoFormulario').value;
    let cedula = document.querySelector('#txtCedulaFormulario').value;
    let edad = document.querySelector('#txtEdadFormulario').value;
    let departamento = document.querySelector('#selDepartamentoFormulario').value;
    let ocupacion = document.querySelector('#selOcupacionFormulario').value;
    let checkValidar = document.querySelector('#chkValidarFormulario').checked;
    
    enviarCenso(nombre ,apellido ,cedula, edad, departamento, ocupacion, checkValidar);
}

//EDITAR Y VALIDAR
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
        mostrar('.divContenedorMensajeFormulario');
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


////////////////////////////////////////////////////////////////////////
//                         REASIGNAR CENSOS
////////////////////////////////////////////////////////////////////////


function mostrarReasignarCenso(){
    ocultar('.divContendorBienvenida');
    ocultar('.divContenedorFormulario');
    ocultar('#divResultadoBusqueda');
    ocultar('.divContenedorVolverABuscar');
    mostrar('#btnDashbord');
    mostrar('.divContenedorReasignar');
    ocultar('.divContenedorBuscarCenso');
    ocultar('#divContenedorCensosParaValidar');
    ocultar('.divContenedorEstadisticasCensista');
    cargarSelectCensos();
    cargarSelectCensistas();
}


function reasignarCenso(){
    let censoCedula = document.querySelector('#selCensos').value;
    let censistaId = document.querySelector('#selUsuarios').value;
    let mensaje = '';

    if(sis.esVacio(censoCedula) && sis.esVacio(censistaId)){
        if(sis.esNumerico(censoCedula)){
            if(sis.reasignar(censoCedula,censistaId)){
                mensaje = 'Se reasignó el censo correctamente';
            }else{
                mensaje = 'Hubo un error de sistemas';
            }
            
        }else{
            mensaje = 'Hubo un error de sistemas';
        }
    }else{
        mensaje = 'Debe completar todos los datos.';
    }

    limpiarCampo('selCensos');
    limpiarCampo('selUsuarios');
    cargarSelectCensos();
    cargarSelectCensistas();

    document.querySelector('#divResultadoReasignar').innerHTML = mensaje;
    mostrar('#divResultadoReasignar');
    let temporizador = setTimeout( function (){
                                        ocultar('#divResultadoReasignar');
                                    }, 4000);
}

////////////////////////////////////////////////////////////////////////
//                                   
////////////////////////////////////////////////////////////////////////    



////////////////////////////////////////////////////////////////////////
//                         CENSOS PARA VALIDAR
////////////////////////////////////////////////////////////////////////


function eventoBtn(){
    let mensaje = ""
    let censoCedula = this.getAttribute("selectCenso");

    let cedula = sis.cedulaConFormato(censoCedula);

    let mensajeBusqueda=sis.buscarCenso(cedula);
    cargarSelectDepartamento();
    cargarSelectOcupacion();
    mensaje = sis.mostrarFormulario(mensajeBusqueda, cedula, 1);

    ocultar('#divContenedorCensosParaValidar');
    mostrar("#divResultadoBusqueda");
    document.querySelector("#divResultadoBusqueda").innerHTML = mensaje;
}


function mostrarTablaParaValidar() {
    ocultar('.divContendorBienvenida');
    ocultar('.divContenedorBuscarCenso');
    ocultar('.divContenedorReasignar');
    ocultar('.divContenedorFormulario');
    ocultar('#divResultadoBusqueda');
    ocultar('.divContenedorVolverABuscar');
    ocultar('.divContenedorEstadisticasCensista');
    mostrar('#btnDashbord');
    mostrar('#divContenedorCensosParaValidar');  // MUESTRO EL BLOQUE TABLA CENSOS PARA VALIDAR

    let table = sis.tablaParaValidar(); // ARMO LA TABLA LLAMANDO A LA FUNCION QUE ESTA EN SISTEMAS

    document.querySelector("#divContenedorCensosParaValidar").innerHTML = table; // ASIGNO LA TABLA QUE TRAIGO AL BLOQUE DEL CENSOS PARA VALIDAR

   
    let botones = document.querySelectorAll(".btnTableEvent"); // LLAMO A TODAS LAS FILAS QUE CONTENGAN LA CLASE .filaTablaVentas


    for (btn of botones) {
        btn.addEventListener("click", eventoBtn); // A TODAS LAS FILAS DE LA TABLA QUE ACABE DE CREAR QUE CONTENGAN LA CLASE .filaTablaVentas EL EVENTO 
    }
}

////////////////////////////////////////////////////////////////////////
//                                   
////////////////////////////////////////////////////////////////////////  


function recalcularEstadisticas(){
    document.querySelector('#divTotalPersonasCensadas').innerHTML = `<h4>El total de personas censadas es: ${sis.contadorCensosValidados().length} </h4>`;
    document.querySelector('#divTotalPersonasCensadasPorDep').innerHTML = sis.totalPersonasCensadasPorDep();
    document.querySelector('#divPorcentajePendienteAValidar').innerHTML = `<h4>Porcentaje de personas pendiente a validar respecto al total: ${sis.porcentajePendienteAValidar()}%</h4>`;
}

function depEstadisticasEdades(){
    let departamento = document.querySelector('#selDepartamentosEstadisticas').value;
    document.querySelector('#divTotalPersonasPorDepEdades').innerHTML = sis.porcentajePersonasEdadDepartamento(departamento);
}

function mostrarEstadisticas(){
    cargarSelectDepartamentoEstadisticas();
    recalcularEstadisticas();
    ocultar('.divContendorBienvenida');
    ocultar('.divContenedorBuscarCenso');
    ocultar('.divContenedorReasignar');
    ocultar('.divContenedorFormulario');
    ocultar('#divResultadoBusqueda');
    ocultar('.divContenedorVolverABuscar');
    ocultar('#divContenedorCensosParaValidar');  
    mostrar('#btnDashbord');
    mostrar('.divContenedorEstadisticasCensista');
    
}

