class Sistema{

    constructor(){
        // usuario una vez lo
        this.usuarioLogin = null;

        // Array para los usuarios censistas
        this.usuarios = new Array();

        //Array de censos 
        this.censos = new Array();

        //Array Departamentos
        this.departamentos = new Array();

        //Array Ocupacion
        this.ocupaciones = new Array();

    }

    ///////////////////////// PRECARGAS

    precargarUsuario(){
        let Usuario1 = new Usuario();
        Usuario1.nombre='Guille Plisich';
        Usuario1.nombreUsuario='guillermo.plisich';
        Usuario1.password='123Guille';
        this.usuarios.push(Usuario1);

        let Usuario2 = new Usuario();
        Usuario2.nombre='Leo Fascendini';
        Usuario2.nombreUsuario='leo.fascendini';
        Usuario2.password='123Leo';
        this.usuarios.push(Usuario2);



    }

    precargarCensos(){
        let Censo1 = new Censo();
        Censo1.nombre = 'Guillermo';
        Censo1.apellido= 'Plisich';
        Censo1.edad = '15';
        Censo1.cedula = '52835922';
        Censo1.departamento = '9';
        Censo1.ocupacion = '2';
        Censo1.idCensista=this.usuarios[0];
        Censo1.checkCensado=true;
        this.censos.push(Censo1);

        let Censo2 = new Censo();
        Censo2.nombre = 'Leo';
        Censo2.apellido= 'Fascendini';
        Censo2.edad = '22';
        Censo2.cedula = '50633843';
        Censo2.departamento = '9';
        Censo2.ocupacion = '2';
        Censo2.idCensista=this.usuarios[0];
        Censo2.checkCensado=true;
        this.censos.push(Censo2);

        
    }

    precargaDepartamentos(){
        let dep1 = new Departamento();
        dep1.nombre = 'Artigas'; 
        this.departamentos.push(dep1);
        let dep2 = new Departamento();
        dep2.nombre = 'Canelones'; 
        this.departamentos.push(dep2);
        let dep3 = new Departamento();
        dep3.nombre = 'Cerro Largo'; 
        this.departamentos.push(dep3);
        let dep4 = new Departamento();
        dep4.nombre = 'Colonia'; 
        this.departamentos.push(dep4);
        let dep5 = new Departamento();
        dep5.nombre = 'Durazno'; 
        this.departamentos.push(dep5);
        let dep6 = new Departamento();
        dep6.nombre = 'Flores'; 
        this.departamentos.push(dep6);
        let dep7 = new Departamento();
        dep7.nombre = 'Florida'; 
        this.departamentos.push(dep7);
        let dep8 = new Departamento();
        dep8.nombre = 'Lavalleja'; 
        this.departamentos.push(dep8);
        let dep9 = new Departamento();
        dep9.nombre = 'Maldonado'; 
        this.departamentos.push(dep9);
        let dep10 = new Departamento();
        dep10.nombre = 'Montevideo'; 
        this.departamentos.push(dep10);
        let dep11 = new Departamento();
        dep11.nombre = 'Paysandú'; 
        this.departamentos.push(dep11);
        let dep12 = new Departamento();
        dep12.nombre = 'Río Negro'; 
        this.departamentos.push(dep12);
        let dep13 = new Departamento();
        dep13.nombre = 'Rivera'; 
        this.departamentos.push(dep13);
        let dep14 = new Departamento();
        dep14.nombre = 'Rocha'; 
        this.departamentos.push(dep14);
        let dep15 = new Departamento();
        dep15.nombre = 'Salto'; 
        this.departamentos.push(dep15);
        let dep16 = new Departamento();
        dep16.nombre = 'San José'; 
        this.departamentos.push(dep16);
        let dep17 = new Departamento();
        dep17.nombre = 'Soriano'; 
        this.departamentos.push(dep17);
        let dep18 = new Departamento();
        dep18.nombre = 'Tacuarembó'; 
        this.departamentos.push(dep18);
        let dep19 = new Departamento();
        dep19.nombre = 'Treinta y Tres'; 
        this.departamentos.push(dep19);
    }

    precargaOcupacion(){
        let ocup1 = new Ocupacion();
        ocup1.nombre='Dependiente';
        this.ocupaciones.push(ocup1);
        let ocup2 = new Ocupacion();
        ocup2.nombre='Independiente';
        this.ocupaciones.push(ocup2);
        let ocup3 = new Ocupacion();
        ocup3.nombre='Estudiante';
        this.ocupaciones.push(ocup3);
        let ocup4 = new Ocupacion();
        ocup4.nombre='no trabaja';
        this.ocupaciones.push(ocup4);
    }

    ////////////////////////// Censos para el censista
    censosUsuarioNoValidados(){
        let arrayCensos = new Array();

        for (let i = 0; i < this.censos.length; i++) {
            let objetoCenso = this.censos[i];
            if(objetoCenso.idCensista.id === this.usuarioLogin.id && objetoCenso.checkCensado !== true){
                arrayCensos.push(objetoCenso);
            }
        }

        return arrayCensos;
    }


    ///////////////////////// VALIDACIONES GLOBALES

    esVacio(dato){
        // Compruebo que no este vacio
        return (dato.trim().length > 0)
    }
    
    esNumerico(dato){
        return !isNaN(Number(dato));
    }


    ///////////////////////// CEDULA OPERACIONES

    formatearCedula(cedula){
        let cedulaNueva = '';

        for (let i = 0; i < cedula.length; i++) {
            if (cedula[i] !== '.' && cedula[i] !== '-') {
                cedulaNueva += cedula[i];
            }
        }

        return cedulaNueva;
    }

    contarCaracteres(cedula, caracter) {
        let contadorCaracter = 0; //contador
    
        for(let i = 0; i < cedula.length; i++) { // Recorro los caracteres de la cedula
            let caracterRecorrido = cedula.charAt(i); // asingo el carcater a una variable
            if (caracterRecorrido === caracter) { // compruebo si es igual al caracter que pedimos de entrada
                contadorCaracter++; // aumento el contador
            }
        }
    
        return contadorCaracter;
    }

    validarFormatoCedula(cedula){
        let bander = false; // bandera para controlar
        let carCedula = cedula.trim().length; // saco los espacios vacios del inicio y final. y pido el largo del la cedula

        if(carCedula === 11) { //Si tiene un largo de 11
            if(this.contarCaracteres(cedula, ".") === 2 && this.contarCaracteres(cedula, "-") === 1) { // Compruebo si tiene dos guion y un punto
                if(cedula.charAt(1)==="." && cedula.charAt(5)==="." && cedula.charAt(9)==="-"){
                    bander = true;
                }
                
            }
        }

        if(carCedula === 9) { //Si tiene un largo de 9
            if(this.contarCaracteres(cedula, ".") === 1 && this.contarCaracteres(cedula, "-") === 1) { // Compruebo si tiene un guion y un punto
                if(cedula.charAt(3)==="." && cedula.charAt(7)==="-"){
                    bander = true;
                }
            }
        }

        return bander; // retorno bander
    }

    validarDigitoVerificador(cedula){
        let resultado = false;

        //Variable que tiene solo los numeros (sin puntos ni guiones)
        let numeros = "";

        //Hago la recorrida para quedarme solo con los numeros
        for (let i = 0; i < cedula.length; i++) {
            let caracter = cedula.charAt(i);
            if(!isNaN(caracter)) {
                numeros += caracter;
            }
        }

        //obtengo el digito verificador que ingresa el usuario
        let ultimoDigitoCedulaIngresada = Number(cedula.charAt(cedula.length -1));

        //patron de multiplicacion para cedulas anteriores a 1 millon
        let multiplicadores = "987634";

        //pregunto si la CI es nueva (mas de 1 millon), en ese caso, le pongo el 2 adelante al patron.
        if (cedula.length === 11){
            multiplicadores = "2" + multiplicadores;
        }
        let sumaMultiplicacionesCedula = 0;
        //multiplico cada termino y los sumo a la variable sumaMultiplicacionesCedula
        for (let i = 0; i < numeros.length -1; i++) {
            let caracterRecorridoCedula = numeros.charAt(i); 
            let caracterRecorridoPatron = multiplicadores.charAt(i);

            let resultadoMultiplicacion = Number(caracterRecorridoCedula) * Number(caracterRecorridoPatron);
            sumaMultiplicacionesCedula += resultadoMultiplicacion;
        }


        let verificadorObtenido = 0;
        let siguienteNumeroMayorEnCero = sumaMultiplicacionesCedula;

        //pregunto si el valor obtenido en sumaMultiplicacionesCedula es 0. si no es cero entonces tengo que buscar
        if(sumaMultiplicacionesCedula % 10 > 0) {
            let encontrado = false;
            while(!encontrado){
                if(siguienteNumeroMayorEnCero % 10 === 0) {
                    encontrado = true;
                }
                else {
                    siguienteNumeroMayorEnCero++;
                }
            }
            verificadorObtenido = siguienteNumeroMayorEnCero - sumaMultiplicacionesCedula;
        }

        //valido que el numero que obtuve  verificadorObtenido = siguienteNumeroMayorEnCero - 
        //sumaMultiplicacionesCedula sea igual al digito verificador que ingreso el usuario.;
        if(verificadorObtenido === ultimoDigitoCedulaIngresada) {
            resultado = true;
        }

        return resultado;
    }

    ////////////////////////// USUARIO LOGIN 

    obtenerUsuario(usuario){
        // variable para capturar el objeto
        let user = null;
        // variable para recorrer el array usario
        let i = 0
        // Recorro el array usuario
        while (i < this.usuarios.length && user === null) {
            // Asigno a objetoUsuario un elemento del Array Usuario
            let objetoUsuario = this.usuarios[i];
            // Compruebo que los nombresUsuarios coincidan
            if (objetoUsuario.nombreUsuario.toLowerCase() === usuario.toLowerCase()) {
                // Asingo a user el usuario que se encontro
                user = objetoUsuario; 
            }
            // aumento el contador
            i++;
        }
        // retorno user
        return user;
    }

    login(usuario, password){
        let bandera = false;
        // Busco al usuario
        let user = this.obtenerUsuario(usuario);
        // Compruebo si viene vacio
        if (user !== null) {
            // si la contraseña coinciden 
            if (user.password === password) {
                // Paso la bander a true
                bandera = true;
                //Asigno a la varible global el usuario que se acabo de ingresar
                this.usuarioLogin = user;
            }
        }
        //retorno bandera
        return bandera;
    }
    
    ////////////////////////// REGISTRAR USUARIO

    usuarioRepetido(usuario){
        let bandera = true; //bander true inical
        let i = 0; // variable para moverme en el array
        // recorro el array usuarios con while por si lo encuentro antes
        while(i < this.usuarios.length && bandera === true){ //compruebo si la bandera es true
            let user = this.usuarios[i];  // asigno a user el objeto usuario del array usuarios
            if(user.nombreUsuario.toLowerCase() === usuario.toLowerCase()){ //compruebo en minuscula si los nombres coinciden 
                bandera = false; // false en el caso de que coincidan los nombres de usuarios
            }
            i++; //aumento contador
        }
        return bandera; // retrno bandera
    }

    validarContrasenia(password){
        // Requerimientos: minimo 5 caracteres, una mayuscula, una minuscula y un numero
        let tieneMinimoCaracteres = password.length >= 5;
        let tieneMayuscula = false;
        let tieneMinuscula = false;
        let tieneNumero = false;

        // Verificar si la contraseña cumple con los requisitos
        for (let i = 0; i < password.length; i++) {
            let caracter = password.charAt(i);

            // Si contiene al menos una mayuscula
            if (caracter >= "A" && caracter <= "Z") {
                tieneMayuscula = true;
                
            } 
            // Si contiene al menos una minuscula
            else if (caracter >= "a" && caracter <= "z") {
                tieneMinuscula = true;
            } 
            // Si contiene al menos una numero
            else if (caracter >= "0" && caracter <= "9") {
                tieneNumero = true;
            }
        }

        if (tieneMinimoCaracteres && tieneMayuscula && tieneMinuscula && tieneNumero) {
            return true; // La contraseña es valida
        } else {
            return false; // La contraseña no cumple con los requisitos
        }
    }

    ingresarRegistro(nombre,nombreUsuario,password){
        // Creo objeto usuario
        let usuario = new Usuario();
        usuario.nombre = nombre; // asigno nombre
        usuario.password = password; // asigno password
        usuario.nombreUsuario = nombreUsuario.toLowerCase(); // asigno nombreUsuario en miniscula

        this.usuarios.push(usuario); // Lo ingreso en el array

    }


    ////////////////////////// BUSCAR CENSO

    buscarCenso(cedula){
        let cedulaFomateada=this.formatearCedula(cedula);
        let i=0;
        let mensaje = '';

        while (i< this.censos.length && mensaje === '') {
            let objetoCenso = this.censos[i];
            if(objetoCenso.cedula===cedulaFomateada){
                if(objetoCenso.checkCensado===true){
                    if(this.usuarioLogin==null){
                        mensaje= 'Se le valido el censo! Ya no podra Modificarlo';
                    }else{
                        mensaje= 'Esta persona tiene el censo validado! No se podra realizar un nuevo censo';
                    }
                    
                }else{
                    if(this.usuarioLogin==null){
                        mensaje = 'Su censo esta pendiente a validar! Puede realizar modificaciones';
                    }else{
                        mensaje = 'Tiene el censo por validar!';
                        if(objetoCenso.idCensista.id !== this.usuarioLogin.id){
                            mensaje += `<br> Advertencia! Este censo esta asignado a la persona: ${objetoCenso.idCensista.nombre}.`
                        }
                    }

                    
                }
            }
            i++;
        }

        if(mensaje === ''){
            mensaje = 'Realice el censo';
        }

        return mensaje;
    }


    ////////////////////////// FORMULARIOS 

    //Rellenar Formulario
    traerObjetoCenso(cedula){
        let cedulaFomateada = this.formatearCedula(cedula);
        let censo = null;
        let i=0;
        while (i< this.censos.length && censo === null) {
            let objetoCenso = this.censos[i];
            if(objetoCenso.cedula === cedulaFomateada){
                censo=objetoCenso;
            }
            i++;
        }
        return censo;
    }

    cedulaConFormato(cedula){
        let cedulaNueva = '';
        if(cedula.length === 8){
            for(let i=0; i<cedula.length; i++){
                if(i === 1 || i === 4){
                    cedulaNueva += '.';
                    cedulaNueva += cedula.charAt(i);
                }else if(i === cedula.length -1){
                    cedulaNueva += '-';
                    cedulaNueva += cedula.charAt(i);
                }else{
                    cedulaNueva +=cedula.charAt(i);
                }
            }
        }else if(cedula.length === 7){
            for(let i=0; i<cedula.length; i++){
                if(i === 1){
                    cedulaNueva += '.';
                    cedulaNueva += cedula.charAt(i);
                }else if(i === cedula.length -1){
                    cedulaNueva += '-';
                    cedulaNueva += cedula.charAt(i);
                }else{
                    cedulaNueva +=cedula.charAt(i);
                }
            }
        }

        return cedulaNueva;
    }

    rellenarFormulario(cedula){
        let censo = this.traerObjetoCenso(cedula);
        document.querySelector('#txtNombreFormulario').value=censo.nombre;
        document.querySelector('#txtApellidoFormulario').value=censo.apellido;
        document.querySelector('#txtEdadFormulario').value=censo.edad;
        let formatoCedula = this.cedulaConFormato(censo.cedula);
        document.querySelector('#txtCedulaFormulario').value=formatoCedula;
        document.querySelector('#selDepartamentoFormulario').value=censo.departamento;
        document.querySelector('#selOcupacionFormulario').value=censo.ocupacion;
        document.querySelector('#chkValidarFormulario').value=censo.checkCensado;
    }

    //Mostrar Formulario
    mostrarFormulario(mensajeBusqueda, cedula, lugar){
        let mensaje = '';
        if(this.usuarioLogin === null){
                
            if(mensajeBusqueda === 'Se le valido el censo! Ya no podra Modificarlo'){
                mensaje = mensajeBusqueda;
                mostrarClases('divContenedorBuscarCenso');
            }else if(mensajeBusqueda === 'Su censo esta pendiente a validar! Puede realizar modificaciones'){
                mensaje = mensajeBusqueda;
                this.rellenarFormulario(cedula);
                ocultarClases('divContenedorVolverABuscar');
                ocultarClases('chck');
                mostrarClases('EliminarCenso');
                mostrarClases('EditarCenso');
                ocultarClases('ValidarCenso');
                ocultarClases('EnviarCenso');
                mostrarClases('divContenedorFormulario');
            }else if(mensajeBusqueda === 'Realice el censo'){
                mensaje = mensajeBusqueda;
                ocultarClases('divContenedorVolverABuscar');
                ocultarClases('chck');
                ocultarClases('EliminarCenso');
                ocultarClases('EditarCenso');
                ocultarClases('ValidarCenso');
                mostrarClases('EnviarCenso');
                mostrarClases('divContenedorFormulario');
            }else{
                mensaje = 'Hubo un error en el sistema';
            }

        }else{

            if(mensajeBusqueda === 'Esta persona tiene el censo validado! No se podra realizar un nuevo censo' && this.usuarioLogin !== null){
                mensaje = mensajeBusqueda;
                mostrarClases('divContenedorBuscarCenso');
            }else if(mensajeBusqueda === 'Realice el censo' && this.usuarioLogin !== null){
                mensaje = mensajeBusqueda;
                mostrarClases('EnviarCenso');
                ocultarClases('EliminarCenso');
                ocultarClases('EditarCenso');
                ocultarClases('ValidarCenso');
                mostrarClases('chck');
                if(lugar === 0){
                    mostrarClases('divContenedorVolverABuscar');
                }
                mostrarClases('divContenedorFormulario');
            }else if(this.usuarioLogin !== null){
                mensaje = mensajeBusqueda;
                this.rellenarFormulario(cedula);
                ocultarClases('EnviarCenso');
                ocultarClases('EliminarCenso');
                ocultarClases('EditarCenso');
                mostrarClases('ValidarCenso');
                mostrarClases('chck');
                if(lugar === 0){
                    mostrarClases('divContenedorVolverABuscar');
                }
                mostrarClases('divContenedorFormulario');
            }

        }
        return mensaje;
    }    

    //Eliminar

    buscarPosicionCenso(cedula){
        let i=0;
        let bandera=false;
        while(i<this.censos.length && bandera === false){
            let objetoCenso = this.censos[i];
            if(objetoCenso.cedula === cedula){
                bandera=true;
            }
            i++;
        }
        i--;
        return i;
    }

    eliminar(cedula){
        let posicion = this.buscarPosicionCenso(cedula);
        let censosNuevos= new Array();
        let mensaje = '';
        if(posicion>=0){
            censosNuevos=this.censos.splice(posicion, 1);
            mensaje='Se elimino correctamente! Se le retornara a buscar censo';
        }else{
            mensaje = 'Por alguna extraña razon el censo no fue encontrado,'
        }
        
        return mensaje;
    }

    //Enviar Formulario
    enviar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar){
        let cedulaNueva = this.formatearCedula(cedula);
        let mensaje = '';

        let censosNuevo = new Censo();
        censosNuevo.nombre = nombre;
        censosNuevo.apellido= apellido;
        censosNuevo.edad = edad;
        censosNuevo.cedula = cedulaNueva;
        censosNuevo.departamento = departamento;
        censosNuevo.ocupacion = ocupacion;
        censosNuevo.checkCensado=checkValidar;


        if(this.usuarioLogin === null){
            let objetoUsuario = this.usuarios[[Math.floor(Math.random() * this.usuarios.length)]];
            censosNuevo.idCensista=objetoUsuario;
            mensaje=`El censo se proceso correctamente! El cenisista asingnado es: ${objetoUsuario.nombre}`;
        }else{
            censosNuevo.idCensista=this.usuarioLogin;
            mensaje='EL censo se proceso correctamente!';
        }

        this.censos.push(censosNuevo);

        limpiarFormulario();
        return mensaje;

    }

    // Modiciar Censo 
    modificar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar){
        let cedulaNueva = this.formatearCedula(cedula);
        let mensaje = '';
        
        let objetoCenso = this.traerObjetoCenso(cedula);

        objetoCenso.nombre = nombre;
        objetoCenso.apellido= apellido;
        objetoCenso.edad = edad;
        objetoCenso.cedula = cedulaNueva;
        objetoCenso.departamento = departamento;
        objetoCenso.ocupacion = ocupacion;
        objetoCenso.checkCensado=checkValidar;


        if(this.usuarioLogin === null){
            objetoCenso.idCensista = this.usuarioLogin;
            mensaje=`El censo se edito correctamente!`;
        }else{
            mensaje='EL censo se valido correctamente!';
        }

        return mensaje;
    }

    // Reasignar Censo 

    reasignar(censoCedula, censistaId) {
        let cedulaConFormato = this.cedulaConFormato(censoCedula);
        let objetoCenso = this.traerObjetoCenso(cedulaConFormato);
        let objetoUsuario = this.obtenerUsuario(censistaId);

        console.log(objetoCenso.idCensista);
        objetoCenso.idCensista=objetoUsuario;
        console.log(objetoCenso.idCensista);
        return true;
    }

    // Tabla para Validar Censos
    tablaParaValidar(){
        let arrayCensos = this.censosUsuarioNoValidados();

        let table = `<table border="1">`; //Contenedor tabla

        table += `<thead><tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Accion</th></tr></thead>`; // Titulos Tablas

        for (let i = 0; i < arrayCensos.length; i++) { // recorro el array previamente validado que sea del usuario.

            let objetoCenso = arrayCensos[i]; // Tomo el objeto del array

            table += `<tr><td>${objetoCenso.cedula}</td><td>${objetoCenso.nombre}</td><td>${objetoCenso.apellido}</td>`;                    
            table += `<td><input type="button" value="Ver Censo" class="btn btnTableEvent" selectCenso="${objetoCenso.cedula}"/></td></tr>`;
            

        }


        if (arrayCensos.length === 0){
            table = `<h2>No tiene censos asignados!</h2>`; // Mensaje en el caso de que no hay elementos 
            
        }else{
            table += `</table>`; //Contenedor tabla
        }

        
       
        return table;
    }

    // ESTADISTICAS CENSISTAS

    contadorCensosValidados(){
        let newArray = new Array();
        for (let i = 0; i < this.censos.length; i++) {
            let objetoCenso = this.censos[i];
            if(objetoCenso.checkCensado){
                newArray.push(objetoCenso);
            }
            
        }

        return newArray;
    }

    contadorCensosNoValidados(){
        let newArray = new Array();
        for (let i = 0; i < this.censos.length; i++) {
            let objetoCenso = this.censos[i];
            if(!objetoCenso.checkCensado){
                newArray.push(objetoCenso);
            }
            
        }

        return newArray;
    }    

    totalPersonasCensadasPorDep(){
        let censosValidados = this.contadorCensosValidados();

        let table = `<table border="1">`; //Contenedor tabla

        table += `<thead><tr><th>Departamento</th><th>Cantidad Censados</th></tr></thead>`; // Titulos Tablas

        if(censosValidados.length !== 0){
            for (let i = 0; i < this.departamentos.length; i++) {
                let n = 0;
                let objetoDepartamento = this.departamentos[i];
                for (let j = 0; j < censosValidados.length; j++) {
                    let objetoCenso = censosValidados[j];
                    if(objetoDepartamento.id === Number(objetoCenso.departamento)) {
                        n++;
                    }
                }
    
                table += `<tr><td>${objetoDepartamento.nombre}</td><td>${n}</td></tr>`;     
    
                
            }
        }else{
            table += `<tr><td>No hay censos aún</td></tr>`; // Mensaje en el caso de que no hay elementos 
        }

        table += `</table>`; //Contenedor tabla

        
        return table;
    }

    porcentajePendienteAValidar(){
        let pendientes = this.contadorCensosNoValidados().length;
        let validadas = this.contadorCensosValidados().length;

        let total = pendientes + validadas;

        let porcentaje = (pendientes * 100)/total;

        return porcentaje;
    }

    traerObjetoDepartamento(id){
        let objetoDepartamento = null;
        for (let i = 0; i < this.departamentos.length; i++) {
            if(Number(id) === this.departamentos[i].id){
                objetoDepartamento = this.departamentos[i];
            }
        }

        return objetoDepartamento;
    }

    porcentajePersonasEdadDepartamento(departamento){
        let censosValidados = this.contadorCensosValidados();
        let mayores=0;
        let menores=0;

        let table = `<table border="1">`; //Contenedor tabla
        table += `<thead><tr><th>Departamento</th><th>Mayores de Edad</th><th>Menores de edad</th></tr></thead>`; // Titulos Tablas

        if(censosValidados.length !== 0){
            for (let i = 0; i < censosValidados.length; i++) {
                let objetoCenso = censosValidados[i];
                if(Number(objetoCenso.departamento) === Number(departamento)){
                    if(Number(objetoCenso.edad)>=18){
                        mayores++;
                    }else if(Number(objetoCenso.edad)<18){
                        menores++;
                    }
                }
                
            }
    
            let total = mayores + menores;
            let porcentajeMenores= 0;
            let porcentajeMayores= 0;
            if(mayores>0){
                porcentajeMayores=(mayores * 100)/total;
            }
         
            if(menores>0){
                porcentajeMenores=(menores * 100)/total;
            }

            let objetoDepartamento = this.traerObjetoDepartamento(departamento);
    
            table += `<tr><td>${objetoDepartamento.nombre}</td><td>${porcentajeMayores}%</td><td>${porcentajeMenores}%</td></tr>`;

        }else{
            table += `<tr><td>No hay censos aún</td></tr>`; // Mensaje en el caso de que no hay elementos 
        }

        table += `</table>`; //Contenedor tabla

        
        return table;
    }

    // REPORTE CENSO
    reporteCenso(){

        let total = this.censos.length;

        let table = `<table border="1">`; //Contenedor tabla
        table += `<thead><tr><th>Departamento</th><th>Estudian</th><th>No Trabajan</th><th>Dependientes o independientes</th><th>Porcentaje del total de censados</th></tr></thead>`; // Titulos Tablas

        for (let i = 0; i < this.departamentos.length; i++) {
            let estudian = 0;
            let trabajan = 0;
            let noTrabajan = 0;
            let personasConCenso= 0;
            let objetoDepartamento = this.departamentos[i];
            
            for (let j = 0; j < this.censos.length; j++) {
                let objetoCenso = this.censos[j];
                if(Number(objetoCenso.departamento) === Number(objetoDepartamento.id)){

                    if(Number(objetoCenso.ocupacion) === 2){
                        estudian++;
                    }else if(Number(objetoCenso.ocupacion) === 3){
                        noTrabajan++;
                    }else{
                        trabajan++;
                    }
                    personasConCenso++;


                }
            }

            let porcentajeDep = (personasConCenso * 100)/total;

            table += `<tr><td>${objetoDepartamento.nombre}</td><td>${estudian}</td><td>${noTrabajan}</td><td>${trabajan}</td><td>${porcentajeDep}%</td></tr>`;
            
        }

        table += `</table>`; //Contenedor tabla

        return table;

    }

    // LOGOUT

    logout(){
        this.usuarioLogin = null;
        console.log(this.usuarioLogin);
    }


}