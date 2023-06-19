////////////////////////////////////////////////////////////////////////
//                             GENERAL FUNCIONES        
////////////////////////////////////////////////////////////////////////
let sis = new Sistema();        //CREO EL EL OBJETO SISTEMA ESTO NOS VA SERVIR PARA TODA LA LOGICA DE NUESTRA APLICACION
sis.precargarUsuario();         //PRECARGO LOS USUARIOS DE LOS CENSISTAS
sis.precargarCensos();          //PRECARGO LOS CENSOS
sis.precargaDepartamentos();    //PRECARGO LOS DEPARTAMENTOS
sis.precargaOcupacion();        //PRECARGO LA OCUPACION

function eventos(){

    // BOTONES FORMULARIO    
    document.querySelector('#btnEliminarCenso').addEventListener('click', mostrarConfirmacionDeEliminar);   //BTN PARA CONFIRMAR LA ELIMINAR DEL CENSO (INVITADO)
    document.querySelector('#btnConfirmarEliminar').addEventListener('click', eliminarCenso);               //BTN PARA ELIMINAR CENSO (INVITADO)
    document.querySelector('#btnCancelarEliminar').addEventListener('click', cancelarEliminacion);          //BTN PARA CENCELAR LA ELIMINACION (INVITADO)
    document.querySelector('#btnVolverABuscarCensista').addEventListener('click', mostrarBuscarCenso);      //MOSTRAR BUSCAR CENSO DESDE EL FORMULARIO (CENSISTA)
    document.querySelector('#btnEnviarCenso').addEventListener('click', llamarEnviarCenso);                 //LLAMAR ENVIAR CENSO (INVITADO / CENSISTA)
    document.querySelector('#btnEditarCenso').addEventListener('click', llamarEdiar);                       //LLAMAR EDITA CENSO  (INVITADO)
    document.querySelector('#btnValidarCenso').addEventListener('click', llamarValidar);                    //LLAMAR VALIDAR CENSO (CENSISTA)
    
    //BOTONES CENSISTAS
    document.querySelector('#btnIrAReasignarCenso').addEventListener('click',mostrarReasignarCenso);    //MOSTRAR EL BLOQUE REASIGNAR CENSO (CENSISTA)
    document.querySelector('#btnReasignar').addEventListener('click',reasignarCenso);                   //REASIGNAR CENSO (CENSISTA)
    document.querySelector('#btnIrValidarCenso').addEventListener('click',mostrarTablaParaValidar);     //MOSTRAR EL BLOQUE CENSOS PARA VALIDAR (CENSISTA)
    document.querySelector('#btnIrAEstadisticas').addEventListener('click',mostrarEstadisticas);        //MOSTRAR EL BLOQUE ESTADISTICAS (CENSISTA)
    document.querySelector('#btnIrACenso').addEventListener('click',mostrarBuscarCenso);                //MOSTRAR BUSCAR DESDE (CENSISTA)

    //SELECT ESTADISTICAS CENSISTA 
    document.querySelector('#selDepartamentosEstadisticas').addEventListener('change',depEstadisticasEdades);       //SELECT PARA CAMBIAR LA TABLA DE ESTADISTICAS (CENSISTA)

    //BOTONES INVITADO
    document.querySelector('#btnIrAReporteInvitado').addEventListener('click',mostrarReporte);      //MOSTRAR REPORTE (INVITADO)
    document.querySelector('#btnIrAInvitado').addEventListener('click', mostrarBuscarCenso);        //MOSTRAR BUSCAR CENSO (INVITADO)

    //BUSCAR CENSO
    document.querySelector('#btnBuscarCedula').addEventListener('click', buscar);           //BUSCAR CENSO (INVITADO / CENSISTA)

    // Volver al dashboard
    document.querySelector('#btnDashbord').addEventListener('click', volverAlDashboard);        //VOLVER AL DASHBOARD (INVITADO / CENSISTA)

    //LOGIN
    document.querySelector('#btnLogin').addEventListener('click', login);                   //LOGUEARSE (CENSISTA)
    document.querySelector('#btnIrALogin').addEventListener('click', mostrarLogin);         //MOSTRAR LOGIN (CENSISTA)

    //Crear Usuario
    document.querySelector('#btnIrACrearUsuario').addEventListener('click', mostrarCrearUsuario);       //MOSTRAR CREAR USUARIO (CENSISTA)
    document.querySelector('#btnRegistrarse').addEventListener('click', registrarse);                   //REGISTRARSE (CENSISTA)
    document.querySelector('#btnVolverALogin').addEventListener('click', mostrarLogin);                 //MOSTRAR LOGIN UNA VEZ REGISTRADO (CENSISTA)


    // Logout
    document.querySelector('#btnLogout').addEventListener('click', deslogueo);          // SE DESLOGUEA (CENSISTA)
}

eventos(); //LLAMO A EVENTOS PARA CARGAR TODOS LOS BOTONES

// OCULTAR AL CARGAR LA PAGINA
function onload(){
    ocultarID('btnLogout');                                 //
    ocultarID('btnDashbord');                               //
    ocultarID('divResultadoBusqueda');                      //
    ocultarID('btnIrACenso');                               //
    ocultarID('btnIrAReasignarCenso');                      //
    ocultarID('btnIrValidarCenso');                         //
    ocultarID('btnIrAEstadisticas');                        //
    ocultarID('divContenedorCensosParaValidar');            //
    ocultarClases('divContenedorLogin');                    //OCULAR EL BLOQUE LOGIN
    ocultarClases('divContenedorCrearUsuario');             //OCULAR EL BLOQUE CREAR USUARIO
    ocultarClases('divContenedorBuscarCenso');              //OCULAR EL BLOQUE BUSCAE CENSO
    ocultarClases('divContenedorFormulario');               //OCULAR EL BLOQUE FORMULARIO
    ocultarClases('divContenedorVolverABuscar');            //OCULAR EL BLOQUE VOLVER A BUSCAR
    ocultarClases('divContenedorResultadoEliminar');        //OCULAR EL BLOQUE RESULTADO DE ELIMINAR 
    ocultarClases('divContenedorMensajeFormulario');        //OCULAR EL BLOQUE MENSAJE DEL FORMULARIO
    ocultarClases('divContenedorReasignar');                //OCULAR EL BLOQUE REASIGNAR
    ocultarClases('divContenedorEstadisticasCensista');     //OCULAR EL BLOQUE ESTADISTADICAS CENSISTA
    ocultarClases('divContenedorReporteInvitado');          //OCULAR EL BLOQUE REPORTE INVITADO
}
onload(); //LLAMO A LA FUNCION PARA CARGAR TODA LA PAGINA

// FUNCION PARA OCULAR CLASES
function ocultarClases(p) {
    document.querySelector(`.${p}`).style.display = "none";
    
}

// FUNCION PARA OCULTAR ID
function ocultarID(p) {
    document.querySelector(`#${p}`).style.display = "none";
    
}

// FUNCION PARA MOSTRAR CLASES
function mostrarClases(p){
    document.querySelector(`.${p}`).style.display = "";
}

// FUNCION PARA MOSTRAR ID
function mostrarID(p){
    document.querySelector(`#${p}`).style.display = "";
}

// VOLVER AL DASHBOARD
function volverAlDashboard(){
    ocultarClases('divContenedorLogin');        //OCULTAR BLOQUE LOGIN
    ocultarID('btnDashbord');                   //OCULTAR BOTON DASHBOARD
    mostrarClases('divContendorBienvenida');    //MOSTRAR BLOQUE BIENVENDIA
    if(sis.usuarioLogin===null){ //CONTROLO SI SOY INVITADO
        mostrarID('btnIrALogin');               //MOSTRAR EL BOTON DE LOGIN
        mostrarID('btnIrAInvitado');            //MOSTRAR BOTON COMENZAR CENSO
        mostrarID('btnIrAReporteInvitado');     //MOSTRAR BOTON REPORTE
        ocultarID('btnLogout');                 //OCULTAR BOTON LOGOUT
        ocultarID('btnIrACenso');               //OCULTAR BOTON BUSCAR CENSO - NUEVO CENSO
        ocultarID('btnIrAReasignarCenso');      //OCULTAR BOTON REASIGNAR CENSO
        ocultarID('btnIrValidarCenso');         //OCULTAR BOTON CENSOS PARA VALIDAR
        ocultarID('btnIrAEstadisticas');        //OCULTAR BOTON ESTADISTICAS
    }else{ //CASO DE QUE SEA USUARIO CENSISTA                                      
        ocultarID('btnIrALogin');               //OCULTAR BOTON LOGIN
        ocultarID('btnIrAInvitado');            //OCULTAR BOTON COMENZAR CENSO
        ocultarID('btnIrAReporteInvitado');     //OCULTAR BOTON REPORTE
        mostrarID('btnLogout');                 //MOSTRAR BOTON LOGOUT
        mostrarID('btnIrACenso');               //MOSTRAR BOTON BUSCAR CENSO - NUEVO CENSO
        mostrarID('btnIrAReasignarCenso');      //MOSTRAR BOTON REASIGNAR CENSO
        mostrarID('btnIrValidarCenso');         //MOSTRAR BOTON CENSOS PARA VALIDAR
        mostrarID('btnIrAEstadisticas');        //MOSTRAR BOTON ESTADISTICAS

    }
    ocultarClases('divContenedorBuscarCenso');              //OCULAR EL BLOQUE BUSCAR CENSO
    ocultarClases('divContenedorCrearUsuario');             //OCULAR EL BLOQUE CREAR USUARIO
    ocultarClases('divContenedorFormulario');               //OCULAR EL BLOQUE FORMULARIO
    ocultarClases('divContenedorVolverABuscar');            //OCULAR EL BLOQUE VOLVER A BUSCAR
    ocultarID('divResultadoBusqueda');                      //OCULAR EL BLOQUE RESULTADO DE BUSQUEDA CENSO
    ocultarClases('divContenedorResultadoEliminar');        //OCULAR EL BLOQUE RESULTADO ELIMAR CENSO
    ocultarClases('divContenedorMensajeFormulario');        //OCULAR EL BLOQUE MENSAJE DEL FORMULARIO
    ocultarClases('divContenedorReasignar');                //OCULAR EL BLOQUE REASIGNAR CENSO
    ocultarID('divContenedorCensosParaValidar');            //OCULAR EL BLOQUE CENSOS PARA VALIDAR
    ocultarClases('divContenedorEstadisticasCensista');     //OCULAR EL BLOQUE ESTADISTICAS CENSISTA
    ocultarClases('divContenedorReporteInvitado');          //OCULAR EL BLOQUE REPORTE INVITADO
}

// FUNCION PARA CAMPOS
function limpiarCampo(campo){
    document.querySelector(`#${campo}`).value='';
}

// FUNCION PARA LIMPIAR MENSAJES
function limpiarMensajes(campo){
    document.querySelector(`#${campo}`).innerHTML='';
}

// LIMPIAR FORMULARIO
function limpiarFormulario(){
    limpiarCampo('txtNombreFormulario');                                //LIMPIAR NOMBRE
    limpiarCampo('txtApellidoFormulario');                              //LIMPIAR APELLIDO
    limpiarCampo('txtCedulaFormulario');                                //LIMPIAR CEDULA
    limpiarCampo('txtEdadFormulario');                                  //LIMPIAR EDAD
    limpiarCampo('selDepartamentoFormulario');                          //LIMPIAR DEPARTAMENTO
    limpiarCampo('selOcupacionFormulario');                             //LIMPIAR OCUPACION
    document.querySelector(`#chkValidarFormulario`).checked=false;      //RESETEAR CHECK A FALSE
}



// CARGAR DEPARTAMENTO FORMULARIO
function cargarSelectDepartamento(){
    let opciones=`<option value="-1">Seleccione..</option>`;    //MUESRTRO LA PRIMERA OPCION
    for (let i = 0; i < sis.departamentos.length; i++) {        //RECORRO EL ARREGLO DE DEPARTAMENTO
        let objetoDepartamento = sis.departamentos[i];          //TOMO EL OBJETO DEPARTAMENTO
        opciones+=`<option value="${objetoDepartamento.id}">${objetoDepartamento.nombre}</option>`; //LE ASIGNO EL VALOR DEL ID DEL DEPARTAMENTO Y MUESTRO EL NOMBRE AL OPTION
        
    }
    document.querySelector('#selDepartamentoFormulario').innerHTML=opciones;    //LAS OPCIONES AL SELECT
}

// CARGAR DEPARTAMENTO ESTADISTICAS 
function cargarSelectDepartamentoEstadisticas(){
    let opciones=`<option value="-1">Seleccione..</option>`;    //MUESRTRO LA PRIMERA OPCION
    for (let i = 0; i < sis.departamentos.length; i++) {        //RECORRO EL ARREGLO DE DEPARTAMENTO
        let objetoDepartamento = sis.departamentos[i];          //TOMO EL OBJETO DEPARTAMENTO
        opciones+=`<option value="${objetoDepartamento.id}">${objetoDepartamento.nombre}</option>`;  //LE ASIGNO EL VALOR DEL ID DEL DEPARTAMENTO Y MUESTRO EL NOMBRE AL OPTION
        
    }
    document.querySelector('#selDepartamentosEstadisticas').innerHTML=opciones;     //LAS OPCIONES AL SELECT
}

// CARGAR OCUPACION FORMULARIO
function cargarSelectOcupacion(){
    let opciones=`<option value="-1">Seleccione..</option>`;    //MUESRTRO LA PRIMERA OPCION
    for (let i = 0; i < sis.ocupaciones.length; i++) {          //RECORRO EL ARREGLO DE OCUPACION
        let objetoOcupacion = sis.ocupaciones[i];               //TOMO EL OBJETO OCUPACION
        opciones+=`<option value="${objetoOcupacion.id}">${objetoOcupacion.nombre}</option>`;  //LE ASIGNO EL VALOR DEL ID DEL OCUPACION Y MUESTRO EL NOMBRE AL OPTION
        
    }
    document.querySelector('#selOcupacionFormulario').innerHTML=opciones;   //LAS OPCIONES AL SELECT
}

// CARGAR CENSOS DEL USUARIO PARA REASIGNAR
function cargarSelectCensos(){
    let opciones=`<option value="-1">Seleccione..</option>`;    //MUESRTRO LA PRIMERA OPCION
    let arrayCensos = sis.censosUsuarioNoValidados();           //TRAIGO LOS CENSOS NO VALIDADOS
    for (let i = 0; i < arrayCensos.length; i++) {              //RECORRO EL ARRAY DE LOS CENSOS NO VALIDADOS
        let objetoCenso = arrayCensos[i];                       //TOMO EL OBJETO CENSO
        opciones+=`<option value="${objetoCenso.cedula}">${objetoCenso.nombre} - ${objetoCenso.cedula}</option>`; //CARGO EL ID DEL CENSO Y MUESTRO EL NOMBRE DE LA PERSONA Y LA CEDULA
    }

    document.querySelector('#selCensos').innerHTML=opciones;    //LAS OPCIONES AL SELECT
}

// CARGAR USUARIOS PARA REASIGNAR
function cargarSelectCensistas(){
    let opciones=`<option value="-1">Seleccione..</option>`;    //MUESRTRO LA PRIMERA OPCION
    for (let i = 0; i < sis.usuarios.length; i++) {             //RECORRO EL USUARIOS
        let objetoUsuario = sis.usuarios[i];                    //TOMO EL OBJETO USUARIO
        if(sis.usuarioLogin.nombreUsuario.toLowerCase() !== objetoUsuario.nombreUsuario.toLowerCase()){     //COMPARO SI EL USUARIO ES DISTINTO CON EL USUARIO LOGUEADO
            opciones+=`<option value="${objetoUsuario.nombreUsuario}">${objetoUsuario.nombre}</option>`;    //AGREGO EL USUARIO A LAS OPCION CON SU NOMBRE USUARIO Y MUESTRO EL NOMBRE
        }
    }
    document.querySelector('#selUsuarios').innerHTML=opciones;  //LAS OPCIONES AL SELECT
}  





////////////////////////////////////////////////////////////////////////
//                        
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//                              LOGIN        
////////////////////////////////////////////////////////////////////////

function mostrarLogin(){
    limpiarCampo('txtUsuario');                 //Limpio el campo de usuario cada vez que entro al login
    limpiarCampo('txtPassword');                //Limpio el campo de password cada vez que entro al login
    limpiarMensajes('divMostrarErrorLogin');    //Limpio el mensaje de error por si quedo puesto del anterior login
    ocultarID('btnIrALogin');                   // Cuando voy a loguearme oculto boton login
    ocultarClases('divContenedorCrearUsuario'); // Ocular Registro de usuario si vengo desde ese apartado     
    ocultarClases('divContendorBienvenida');    // Oculto bienvenida
    mostrarClases('divContenedorLogin');        // Muestro el login
    mostrarID('btnDashbord');                   // Muestro boton para ir al dashboard
}

function login(){
    let mensaje = '';
    let usuario = document.querySelector("#txtUsuario").value;// Capturo el usario     
    let password = document.querySelector("#txtPassword").value;// Capturo la password
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

    //Si el mensaje en 'Bien' vuelvo a dashboard pero contodas las opciones de censista
    if(mensaje === 'Bien'){
        volverAlDashboard();
    }

    document.querySelector("#divMostrarErrorLogin").innerHTML = mensaje; //Retorno el campo de mensaje
}

////////////////////////////////////////////////////////////////////////
//                               
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//                             CREAR USUARIO        
////////////////////////////////////////////////////////////////////////

function mostrarCrearUsuario(){
    limpiarCampo('txtCrearUsuarioNombre');          //Limpio el campo de nombre
    limpiarCampo('txtCrearUsuarioUser');            //Limpio el campo de user
    limpiarCampo('txtCrearUsuarioPassword');        //Limpio el campo de password
    limpiarMensajes('divMostrarRegistrarse');       //Limpio el mensaje por si quedo de la anterior creacion
    limpiarMensajes('divMostrarErrorRegistrarse');  //Limpio el mensaje por si quedo del anterior error


    mostrarClases('contendorRegistro');             //Muestro el contenedor registro
    ocultarClases('contendorRegistroExistoso');     //Oculto el contenedor de mensajes ya que en este punto no puedo saber si se logueo correctamente
    mostrarClases('divContenedorCrearUsuario');     //Muestro el bloque entero de crear usuario
    ocultarClases('divContenedorLogin');            //Oculto el contenedor de login ya que vengo desde ahi 
}

function crearUsuario(nombre,nombreUsuario,password){
    let mensaje = '';
    //Me pregunto si todos los campos son vacios, en el caso de no: entra en el if, en el caso de que si: mensaje de error
    if(sis.esVacio(nombre) && sis.esVacio(nombreUsuario) && sis.esVacio(password)){ 
        // Verifico que el usuario no intente repetir un user ya registrado, en el caso de que esto se cumpla la funcion retorna false
        if(sis.usuarioRepetido(nombreUsuario)){
            // Valido que la contraseña se correcta y cumpla todas las condiciones, en el caso de que no muestra mensaje de error
            if(sis.validarContrasenia(password)){ 
                sis.ingresarRegistro(nombre,nombreUsuario,password); //ingreso al usuario como un usuario nuevo
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
    return mensaje; // retorno mensaje
}
    

function registrarse(){
    let mensaje = '';                                               
    let nombre = document.querySelector('#txtCrearUsuarioNombre').value;        //Tomo el valor nombre
    let nombreUsuario = document.querySelector('#txtCrearUsuarioUser').value;   //Tomo el valor nombre usuario
    let password = document.querySelector('#txtCrearUsuarioPassword').value;    //Tomo el password

    mensaje=crearUsuario(nombre, nombreUsuario, password);      //Llamo a la funcion crearUsuario anteriormente creada, esta retorna un mensaje
    if(mensaje === 'Bien'){     //Me pregunto si el mensaje es igual a 'Bien'
        ocultarClases('contendorRegistro');         //Oculto el contenedor Registro
        mostrarClases('contendorRegistroExistoso'); //Muestro el contenedor del Registro exitoso
        document.querySelector("#divMostrarRegistrarse").innerHTML = 'El registro se realizo exitosamente!';   //Le asigno el mensaje exitoso
    }else{
        document.querySelector("#divMostrarErrorRegistrarse").innerHTML = mensaje; //En este mensaje doy el error
    }

}

////////////////////////////////////////////////////////////////////////
//                                  
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//                             BUSCAR CENSO        
////////////////////////////////////////////////////////////////////////

function mostrarBuscarCenso(){
    //Limpio el campo de la cedula
    limpiarCampo('txtBuscarCedula');
    // limpio el mensaje de error de la busqueda
    limpiarMensajes('divResultadoBusquedaError');
    // limpio el mensaje de la busqueda
    limpiarMensajes('divResultadoBusqueda');

    // Cuando voy a buscar censo oculto boton login
    ocultarID('btnIrALogin');
    // Oculto bienvenida
    ocultarClases('divContendorBienvenida');
    // Muestro el buscar censo 
    mostrarClases('divContenedorBuscarCenso');
    // Muestro boton para ir al dashboard
    mostrarID('btnDashbord');
    // Ocultar si vengo de eliminar *(Invitado)
    ocultarClases('divContenedorMensajeFormulario');
    // Ocultar Fomrulario si vengo del formulario *(Censista)
    ocultarClases('divContenedorFormulario');
    // Oculto el resultado de la busqueda por si quedo anteriormente cargado
    ocultarID('divResultadoBusqueda');
    // Oculto el volver a buscar que puede ser que venga de formulario
    ocultarClases('divContenedorVolverABuscar');
    // Oculto el bloque reasignar censo
    ocultarClases('divContenedorReasignar');
    // Oculto el bloque censos para validar
    ocultarID('divContenedorCensosParaValidar');
    //  Oculto el bloque estadisticas
    ocultarClases('divContenedorEstadisticasCensista');
    
}

function buscar(){
    ocultarClases('divContenedorBuscarCenso'); //Oculto el bloque de buscar censo 

    limpiarFormulario();   //Limpio el formulario entero
   
    let cedula = document.querySelector("#txtBuscarCedula").value;  //Tomo el valor de la cedula
    let mensaje = "";

    limpiarCampo('txtBuscarCedula');                //limpio el campo cedula
    limpiarMensajes('divResultadoBusquedaError');   //limpio el mensaje de error de la busqueda
    limpiarMensajes('divResultadoBusqueda');        //limpio el mensaje de la busqueda

    if (sis.validarFormatoCedula(cedula)) {                                     //Me pregunto si el formato de la cedula es correcto en caso de que no retorno mensaje de error
        if(sis.validarDigitoVerificador(cedula)){                               //Valido que el numero verificador es correcto en caso de que no retorno mensaje de error
            let mensajeBusqueda=sis.buscarCenso(cedula);                        //Busco el censo en los censos que estan cargados
            cargarSelectDepartamento();                                         //Cargo los departamentos
            cargarSelectOcupacion();                                            //Cargo las ocupaciones
            mensaje = sis.mostrarFormulario(mensajeBusqueda, cedula, 0);        //paso la variable cedula, mensaje de la busqueda, y el valor 0 para avisarle a funcion que no muestre el volvera buscar
        }else{
            mensaje = "El digito verificador es incorrecto";
        }
    }else{
        mensaje = "La cédula ingresada no cumple con el formato 1.111.111-1";
    }

    if(mensaje==="La cédula ingresada no cumple con el formato 1.111.111-1" || mensaje==="El digito verificador es incorrecto"){ // si el mensaje retornado es algunas de las dos opciones
        mostrarClases('divContenedorBuscarCenso');                                  //Muestro nuevamente el bloque de busqueda
        document.querySelector("#divResultadoBusquedaError").innerHTML = mensaje;   //Muestro el mensaje de error
    }else{
        document.querySelector("#divResultadoBusqueda").innerHTML = mensaje;        //Muestro el resultado de la busqueda
        mostrarID("divResultadoBusqueda");  //                                      //Muestro el contenedor de la busqueda
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
    mostrarClases('divContenedorMensajeFormulario');
    ocultarClases('divContenedorFormulario');
    ocultarID('divResultadoBusqueda');
    ocultarClases('divContenedorVolverABuscar');
    let temporizador = setTimeout(mostrarBuscarCenso, 4000);
}

//ELIMINAR
function mostrarConfirmacionDeEliminar(){
    ocultarClases('divContenedorFormulario');
    ocultarID('divResultadoBusqueda');
    mostrarClases('divContenedorResultadoEliminar');
    
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
        ocultarClases('divContenedorResultadoEliminar');
        mostrarClases('divContenedorMensajeFormulario');
        
        let temporizador = setTimeout(mostrarBuscarCenso, 4000);
    }

}

function cancelarEliminacion(){
    mostrarID('divResultadoBusqueda')
    mostrarClases('divContenedorFormulario');
    ocultarClases('divContenedorResultadoEliminar');
}

//ENVIAR
function enviarCenso(nombre ,apellido ,cedula, edad, departamento, ocupacion, checkValidar){

    let mensaje = '';
    let error = true;

    if(sis.esVacio(nombre) && sis.esVacio(apellido) && sis.esVacio(cedula) && sis.esVacio(edad)){
        if(departamento>=0 && ocupacion>=0){
            if (sis.esNumerico(edad)) {
                if(edad>=0 && edad<=130){
                    if(sis.validarFormatoCedula(cedula)) {
                        if(sis.validarDigitoVerificador(cedula)){
                            if(sis.usuarioLogin === null){
                                mensaje = sis.enviar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar);
                                mensaje += '<br> Se le retornara a buscar censo';
                                error = false;
                            }else{
                                if(checkValidar===true){
                                    mensaje = sis.enviar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar);
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
        mostrarClases('divContenedorMensajeFormulario');
    }else{
        mostrarMensaje(mensaje);
    }
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
        mostrarClases('divContenedorMensajeFormulario');
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
    ocultarClases('divContendorBienvenida');                    //OCULTO EL BLOQUE BIENVENIDA
    ocultarClases('divContenedorFormulario');                   //OCULTO EL BLOQUE FORMULARIO
    ocultarClases('divContenedorVolverABuscar');                //OCULTO EL BLOQUE VOLVER A BUSCAR
    ocultarClases('divContenedorBuscarCenso');                  //OCULTO EL BLOQUE BUSCAR CENSO
    ocultarClases('divContenedorEstadisticasCensista');         //OCULTO EL BLOQUE ESTADISTICAS
    mostrarClases('divContenedorReasignar');                    //MOSTRAR EL BLOQUE REASIGINAR
    ocultarID('divResultadoBusqueda');                          //OCULTAR EL RESULTADO DE BUSQUEDA
    ocultarID('divTotalPersonasPorDepEdades');                  //OCULTAR RESULTADO DE PERSONAS POR DEPARTAMENTO EDAD
    ocultarID('divContenedorCensosParaValidar');                //OCULTAR EL BLOQUE CENSO PARA VALIDAR
    mostrarID('btnDashbord');                                   //MOSTRAR BOTON DASHBORD
    cargarSelectCensos();                                       //CARGAR LOS SELECT DE CENSOS QUE TENGA EL USUARIO
    cargarSelectCensistas();                                    //CARGAR LOS CENSISTAS PARA ASIGNARLES LOS CENSOS
}


function reasignarCenso(){
    let censoCedula = document.querySelector('#selCensos').value;   //Tomo el valor censoCedula
    let usuarioNombre = document.querySelector('#selUsuarios').value;  //Tomo el usuarioNombre del usuario
    let mensaje = '';

    if(sis.esVacio(censoCedula) && sis.esVacio(usuarioNombre)){     //Valido que ningun campo es vacio en el caso de que sae algun caso vacio retorno mensaje de error
        if(sis.esNumerico(censoCedula)){                            //Valido que el censo cedula es de tipo numerico en el caso de que esto no se cumpla retorno mensaje de error
            if(sis.reasignar(censoCedula,usuarioNombre)){           //Llamo a la funcion reasignar censo la cual en caso del que el censo se haya asignado correctamente me retorna true, en caso contrario falso y muestro el mensaje de error
                mensaje = 'Se reasignó el censo correctamente';     //Mensaje que se asigni correctamente
            }else{              
                mensaje = 'Hubo un error de sistemas';              
            }
            
        }else{
            mensaje = 'Hubo un error de sistemas';
        }
    }else{
        mensaje = 'Debe completar todos los datos.';
    }

    limpiarCampo('selCensos');                                      //
    limpiarCampo('selUsuarios');                                    //
    cargarSelectCensos();                                           //
    cargarSelectCensistas();                                        //

    document.querySelector('#divResultadoReasignar').innerHTML = mensaje;   //
    mostrarID('divResultadoReasignar');                                     //
    let temporizador = setTimeout( function (){                             
                                        ocultarID('divResultadoReasignar'); // 
                                    }, 4000);                               // a los 4 segundos
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

    ocultarID('divContenedorCensosParaValidar');
    mostrarID("divResultadoBusqueda");
    document.querySelector("#divResultadoBusqueda").innerHTML = mensaje;
}


function mostrarTablaParaValidar() {
    ocultarClases('divContendorBienvenida');
    ocultarClases('divContenedorBuscarCenso');
    ocultarClases('divContenedorReasignar');
    ocultarID('divTotalPersonasPorDepEdades');  
    ocultarClases('divContenedorFormulario');
    ocultarID('divResultadoBusqueda');
    ocultarClases('divContenedorVolverABuscar');
    ocultarClases('divContenedorEstadisticasCensista');
    mostrarID('btnDashbord');
    mostrarID('divContenedorCensosParaValidar');  // MUESTRO EL BLOQUE TABLA CENSOS PARA VALIDAR

    let table = sis.tablaParaValidar(); // ARMO LA TABLA LLAMANDO A LA FUNCION QUE ESTA EN SISTEMAS

    if(table !== '<h2>No tiene censos asignados!</h2>'){
        document.querySelector("#divContenedorCensosParaValidar").innerHTML = table; // ASIGNO LA TABLA QUE TRAIGO AL BLOQUE DEL CENSOS PARA VALIDAR

   
        let botones = document.querySelectorAll(".btnTableEvent"); // LLAMO A TODAS LAS FILAS QUE CONTENGAN LA CLASE .filaTablaVentas


        for (btn of botones) {
            btn.addEventListener("click", eventoBtn); // A TODAS LAS FILAS DE LA TABLA QUE ACABE DE CREAR QUE CONTENGAN LA CLASE .filaTablaVentas EL EVENTO 
        }
    }else{
        document.querySelector("#divContenedorCensosParaValidar").innerHTML = table;
    }
}

////////////////////////////////////////////////////////////////////////
//                                   
////////////////////////////////////////////////////////////////////////  


////////////////////////////////////////////////////////////////////////
//                           ESTADISTICA CENSISTA        
//////////////////////////////////////////////////////////////////////// 

function recalcularEstadisticas(){
    document.querySelector('#divTotalPersonasCensadas').innerHTML = `<h4>El total de personas censadas es: ${sis.contadorCensosValidados().length} </h4>`;
    document.querySelector('#divTotalPersonasCensadasPorDep').innerHTML = sis.totalPersonasCensadasPorDep();
    document.querySelector('#divPorcentajePendienteAValidar').innerHTML = `<h4>Porcentaje de personas pendiente a validar respecto al total: ${sis.porcentajePendienteAValidar()}%</h4>`;
}

function depEstadisticasEdades(){
    let departamento = document.querySelector('#selDepartamentosEstadisticas').value;
    mostrarID('divTotalPersonasPorDepEdades');
    document.querySelector('#divTotalPersonasPorDepEdades').innerHTML = sis.porcentajePersonasEdadDepartamento(departamento);
}

function mostrarEstadisticas(){
    cargarSelectDepartamentoEstadisticas();
    recalcularEstadisticas();
    ocultarClases('divContendorBienvenida');
    ocultarClases('divContenedorBuscarCenso');
    ocultarClases('divContenedorReasignar');
    ocultarClases('divContenedorFormulario');
    ocultarID('divResultadoBusqueda');
    ocultarClases('divContenedorVolverABuscar');
    ocultarID('divContenedorCensosParaValidar');  
    ocultarID('divTotalPersonasPorDepEdades');  
    mostrarID('btnDashbord');
    mostrarClases('divContenedorEstadisticasCensista');
    
}

////////////////////////////////////////////////////////////////////////
//                                   
//////////////////////////////////////////////////////////////////////// 


////////////////////////////////////////////////////////////////////////
//                          REPORTE INVITADO
//////////////////////////////////////////////////////////////////////// 

function recalcularReporte(){
    document.querySelector('#divReporteInvitado').innerHTML = sis.reporteCenso();
}

function mostrarReporte(){
    ocultarClases('divContendorBienvenida');
    ocultarID('divTotalPersonasPorDepEdades');  
    ocultarID('btnIrALogin');
    mostrarID('btnDashbord');
    mostrarClases('divContenedorReporteInvitado');

    recalcularReporte();
}

////////////////////////////////////////////////////////////////////////
//                                   
//////////////////////////////////////////////////////////////////////// 


////////////////////////////////////////////////////////////////////////
//                                  LOGOUT
//////////////////////////////////////////////////////////////////////// 

function deslogueo(){
    sis.logout();
    volverAlDashboard();
}

////////////////////////////////////////////////////////////////////////
//                                   
//////////////////////////////////////////////////////////////////////// 