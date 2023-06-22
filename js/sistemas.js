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
        let nombre='Guille Plisich';
        let nombreUsuario='guillermo.plisich';
        let password='123Guille';
        crearUsuario(nombre,nombreUsuario,password);
        
        nombre='Leo Fascendini';
        nombreUsuario='leo.fascendini';
        password='123Leo';
        crearUsuario(nombre,nombreUsuario,password);
        
        nombre='Gonzalo Gentile';
        nombreUsuario='gonza.gentile';
        password='123Gonza';
        crearUsuario(nombre,nombreUsuario,password);
    }

    precargarCensos(){
        let nombre = 'Juan';
        let apellido= 'Fernandez';
        let edad = '25';
        let cedula = '1.234.567-2';
        let departamento = '7';
        let ocupacion = '3';
        let checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);
        
        nombre = 'Maria';
        apellido= 'Ramirez';
        edad = '22';
        cedula = '2.345.678-3';
        departamento = '13';
        ocupacion = '1';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Carlos';
        apellido= 'Rodriguez';
        edad = '15';
        cedula = '3.456.789-4';
        departamento = '6';
        ocupacion = '0';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Laura';
        apellido= 'Martinez';
        edad = '17';
        cedula = '4.567.890-5';
        departamento = '0';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Alejandro';
        apellido= 'Vargas';
        edad = '18';
        cedula = '5.678.901-6';
        departamento = '2';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Ana';
        apellido= 'Navarro';
        edad = '15';
        cedula = '6.789.012-7';
        departamento = '11';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Andrés';
        apellido= 'Mendoza';
        edad = '16';
        cedula = '7.890.123-8';
        departamento = '2';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Carolina';
        apellido= 'Silva';
        edad = '13';
        cedula = '8.901.234-9';
        departamento = '6';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'David';
        apellido= 'Paredes';
        edad = '12';
        cedula = '9.012.345-0';
        departamento = '9';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Gabriela';
        apellido= 'Cordero';
        edad = '16';
        cedula = '1.23456-1';
        departamento = '8';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Javier';
        apellido= 'Reyes';
        edad = '17';
        cedula = '1.122.334-6';
        departamento = '14';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Paula';
        apellido= 'Acosta';
        edad = '16';
        cedula = '2.233.445-7';
        departamento = '3';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Diego';
        apellido= 'Rojas';
        edad = '24';
        cedula = '3.344.556-8';
        departamento = '5';
        ocupacion = '3';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Valentina';
        apellido= 'Castro';
        edad = '22';
        cedula = '4.455.667-9';
        departamento = '18';
        ocupacion = '2';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Luisa';
        apellido= 'Duarte';
        edad = '31';
        cedula = '5.566.778-0';
        departamento = '4';
        ocupacion = '1';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Sebastián';
        apellido= 'García';
        edad = '35';
        cedula = '6.677.889-1';
        departamento = '9';
        ocupacion = '0';
        checkCensado=false;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Natalia';
        apellido= 'Ortega';
        edad = '51';
        cedula = '7.788.990-2';
        departamento = '12';
        ocupacion = '1';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Felipe';
        apellido= 'Torres';
        edad = '55';
        cedula = '8.899.001-3';
        departamento = '1';
        ocupacion = '2';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Sofía';
        apellido= 'Miranda';
        edad = '88';
        cedula = '9.900.112-4';
        departamento = '7';
        ocupacion = '3';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Martín';
        apellido= 'Pérez';
        edad = '63';
        cedula = '0.11223-5';
        departamento = '15';
        ocupacion = '1';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Lucía';
        apellido= 'Fuentes';
        edad = '34';
        cedula = '3.216.549-8';
        departamento = '6';
        ocupacion = '0';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Ernesto';
        apellido= 'Hernández';
        edad = '25';
        cedula = '9.876.543-8';
        departamento = '17';
        ocupacion = '2';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Isabella';
        apellido= 'González';
        edad = '33';
        cedula = '2.764.510-4';
        departamento = '5';
        ocupacion = '1';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Ricardo';
        apellido= 'Herrera';
        edad = '13';
        cedula = '1.357.924-6';
        departamento = '10';
        ocupacion = '3';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Camila';
        apellido= 'Sotto';
        edad = '66';
        cedula = '2.468.135-1';
        departamento = '13';
        ocupacion = '1';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Guillermo';
        apellido= 'Plisich';
        edad = '54';
        cedula = '5.283.592-2';
        departamento = '7';
        ocupacion = '3';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Andres';
        apellido= 'Acosta';
        edad = '62';
        cedula = '8.642.093-5';
        departamento = '4';
        ocupacion = '2';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Valeria';
        apellido= 'Navarro';
        edad = '71';
        cedula = '7.531.982-4';
        departamento = '2';
        ocupacion = '3';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Eduardo';
        apellido= 'Palacios';
        edad = '38';
        cedula = '5.792.468-7';
        departamento = '16';
        ocupacion = '1';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);

        nombre = 'Manuel';
        apellido= 'Plisich';
        edad = '46';
        cedula = '1.324.596-6';
        departamento = '7';
        ocupacion = '0';
        checkCensado=true;
        enviarCenso(nombre,apellido,cedula,edad,departamento,ocupacion,checkCensado);
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
        let arrayCensos = new Array();      //Creo un nuevo array

        for (let i = 0; i < this.censos.length; i++) {  //recorro el array de Censos
            let objetoCenso = this.censos[i];           //tomo el objeto censo
            if(objetoCenso.idCensista.id === this.usuarioLogin.id && objetoCenso.checkCensado !== true){ //me pregunto si ese censo esta asignado al censista logueado
                arrayCensos.push(objetoCenso);                                                           //lo pusheo al arrayCensos en caso de que el usuario este asignado
            }
        }

        return arrayCensos;     //retorno el array
    }


    ///////////////////////// VALIDACIONES GLOBALES

    esVacio(dato){
        // Compruebo que no este vacio
        return (dato.trim().length > 0)
    }
    
    esNumerico(dato){
        //compruebo si el valor es numero 
        return !isNaN(Number(dato));
    }


    ///////////////////////// CEDULA OPERACIONES
    formatearCedula(cedula){
        let cedulaNueva = '';   //creo euna variable para guardar la cedula sin formato    

        for (let i = 0; i < cedula.length; i++) {           //recorro el string de la cedula
            if (cedula[i] !== '.' && cedula[i] !== '-') {   //pregunto si el caracter es distino a '.' o y '-'
                cedulaNueva += cedula[i];                   //
            }
        }

        return cedulaNueva; //devuelvo la nueva cedula
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
                if(cedula.charAt(1)==="." && cedula.charAt(5)==="." && cedula.charAt(9)==="-"){ //Si los caracteres 1 y 5 son '.' y si el caracter 9 es '-'
                    bander = true;
                }
                
            }
        }

        if(carCedula === 9) { //Si tiene un largo de 9  //1.11111-1
            if(this.contarCaracteres(cedula, ".") === 1 && this.contarCaracteres(cedula, "-") === 1) { // Compruebo si tiene un guion y un punto
                if(cedula.charAt(1)==="." && cedula.charAt(7)==="-"){   //Si los caracteres 3 es '.' y si el caracter 7 es '-'
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
            let caracter = cedula.charAt(i);        //tomo el caracter de la cedula
            if(!isNaN(caracter)) {                  //pregunto si es caracter
                numeros += caracter;                //asigno el caracter
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

        //recorro cada termino de los numeros obtenidos con anteracion
        for (let i = 0; i < numeros.length -1; i++) {
            let caracterRecorridoCedula = numeros.charAt(i);            //tomo el caracter
            let caracterRecorridoPatron = multiplicadores.charAt(i);    //tomo el caracter del multiplicador 

            let resultadoMultiplicacion = Number(caracterRecorridoCedula) * Number(caracterRecorridoPatron);    //multiplico el caracter por el caracter de multiplicador
            sumaMultiplicacionesCedula += resultadoMultiplicacion;                                              //lo sumo al total
        }   


        let verificadorObtenido = 0;                                    //creo el verificador obtenido
        let siguienteNumeroMayorEnCero = sumaMultiplicacionesCedula;    //asigno la suma anterior a una nueva variable

        //pregunto si el valor obtenido en sumaMultiplicacionesCedula es 0. si no es cero entonces tengo que buscar
        if(sumaMultiplicacionesCedula % 10 > 0) {
            let encontrado = false;
            while(!encontrado){
                if(siguienteNumeroMayorEnCero % 10 === 0) {     //Pregunto si es multiplo de 10
                    encontrado = true;
                }
                else {
                    siguienteNumeroMayorEnCero++;               //Sino aumento
                }
            }
            verificadorObtenido = siguienteNumeroMayorEnCero - sumaMultiplicacionesCedula; //RESTO EL VALOR ORIGINAL AL AUMENTADO
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
        let cedulaFomateada=this.formatearCedula(cedula);      //FORMATEO LA CEDULA QUE TRAIGO
        let i=0;                                               //INICIALISO EL I PARA EL WHILE
        let mensaje = '';                                      //INICIALISO EL MENSAJE                           

        while (i< this.censos.length && mensaje === '') {      //recorrro el censo hasta encontrarlo o no
            let objetoCenso = this.censos[i];                  //tomo el objeto del arreglo de censos
            if(objetoCenso.cedula===cedulaFomateada){          //Me pregunto si las cedulas coinciden
                if(objetoCenso.checkCensado===true){           //Me pregunto esta censado, en caso de que no voy al else
                    if(this.usuarioLogin==null){               //Me pregunto si es el censista es el que esta buscando el censo, en el caso que no entro en el if
                        mensaje= 'Se le valido el censo! Ya no podra Modificarlo';
                    }else{                                     //Caso en el que el cenista busca el censo
                        mensaje= 'Esta persona tiene el censo validado! No se podra realizar un nuevo censo';
                    }
                    
                }else{  // CASO QUE NO ESTA CENSADO
                    if(this.usuarioLogin==null){                                                                                    //Me pregunto si es el censista es el que esta buscando el censo, en el caso que no entro en el if
                        mensaje = 'Su censo esta pendiente a validar! Puede realizar modificaciones';                               
                    }else{                                                                                                          //Caso en el que el cenista busca el censo
                        mensaje = 'Tiene el censo por validar!';                                                                      
                        if(objetoCenso.idCensista.id !== this.usuarioLogin.id){                                                     //Me pregunto si el cenista no es el asignado al censo
                            mensaje += `<br> Advertencia! Este censo esta asignado a la persona: ${objetoCenso.idCensista.nombre}.`
                        }
                    }

                    
                }
            }
            i++; //Aumentoel valor para avanzar en el arreglo
        }

        if(mensaje === ''){                 //Me pregunto si el mensaje es nulo, caso en el que no se encuentra el censo. Censo nuevo
            mensaje = 'Realice el censo';   
        }

        return mensaje;
    }


    ////////////////////////// FORMULARIOS 

    //Rellenar Formulario
    traerObjetoCenso(cedula){
        let cedulaFomateada = this.formatearCedula(cedula); //formateo el cedula
        let censo = null;                                   //creo una variable nula
        let i=0;                                            //creo un contador
        while (i< this.censos.length && censo === null) {   //recorro el arreglo de censos
            let objetoCenso = this.censos[i];               //tomo el objeto censo
            if(objetoCenso.cedula === cedulaFomateada){     //me pregunto si la cedula coincide 
                censo=objetoCenso;                          //tomo el censo
            }
            i++; //aumento la variable
        }
        return censo; //retorno el censo
    }

    cedulaConFormato(cedula){
        let cedulaNueva = ''; // creo una variable para la cedula nueva
        if(cedula.length === 8){    //pregunto si la cedula tiene largo 8
            for(let i=0; i<cedula.length; i++){ //recorro la cedula
                if(i === 1 || i === 4){                 //en la posicion 1 y 4 de la cedula
                    cedulaNueva += '.';                 //le concateno el '.'
                    cedulaNueva += cedula.charAt(i);    //luego concateno el caracter de la cedula
                }else if(i === cedula.length -1){       //a la penultima posicion
                    cedulaNueva += '-';                 //le concateno el '-'
                    cedulaNueva += cedula.charAt(i);    //luego concateno el caracter de la cedula
                }else{                                  //en caso de que no sea ninguno de los dos casos
                    cedulaNueva +=cedula.charAt(i);     //concateno el caracter
                }
            }
        }else if(cedula.length === 7){  //pregunto si la cedula tiene largo 7
            for(let i=0; i<cedula.length; i++){ //recorro la cedula
                if(i === 1){                            //en la posicion 1 y 4 de la cedula
                    cedulaNueva += '.';                 //le concateno el '.'
                    cedulaNueva += cedula.charAt(i);    //luego concateno el caracter de la cedula
                }else if(i === cedula.length -1){       //a la penultima posicion
                    cedulaNueva += '-';                 //le concateno el '-'
                    cedulaNueva += cedula.charAt(i);    //luego concateno el caracter de la cedula
                }else{                                  //en caso de que no sea ninguno de los dos casos
                    cedulaNueva +=cedula.charAt(i);     //concateno el caracter
                }
            }
        }

        return cedulaNueva; //retorno cedula
    }

    rellenarFormulario(cedula){
        let censo = this.traerObjetoCenso(cedula);                                      //Traigo el objeto censo con la cedula
        document.querySelector('#txtNombreFormulario').value=censo.nombre;              //asigno el valor del nombre
        document.querySelector('#txtApellidoFormulario').value=censo.apellido;          //asigno el valor del apellido
        document.querySelector('#txtEdadFormulario').value=censo.edad;                  //asigno el valor de la edad
        let formatoCedula = this.cedulaConFormato(censo.cedula);                        //a la cedula le pongo el formato
        document.querySelector('#txtCedulaFormulario').value=formatoCedula;             //asigno el valor de la cedula con formato
        document.querySelector('#selDepartamentoFormulario').value=censo.departamento;  //asigno el valor del departamento
        document.querySelector('#selOcupacionFormulario').value=censo.ocupacion;        //asigno el valor de la ocupacion
        document.querySelector('#chkValidarFormulario').value=censo.checkCensado;       //asigno el valor del check
    }

    //Mostrar Formulario
    mostrarFormulario(mensajeBusqueda, cedula, lugar){
        let mensaje = '';
        if(this.usuarioLogin === null){ //PREGUNTO SI ES EL INVITADO EL QUE ESTA QUERIENDO ACCEDER AL FORMULARIO
                
            if(mensajeBusqueda === 'Se le valido el censo! Ya no podra Modificarlo'){ //CASO QUE EL CENSO ESTA VALIDADO
                mensaje = mensajeBusqueda;  //ASINO EL MENSAJE QUE TRAIGO YA QUE ESTA VALIDADO
                mostrarClases('divContenedorBuscarCenso'); //MUESTRO EL MENSAJE
            }else if(mensajeBusqueda === 'Su censo esta pendiente a validar! Puede realizar modificaciones'){ //CASO QUE EL CENSO ESTA PRECOMPLETADO
                mensaje = mensajeBusqueda;                  //ASINO EL MENSAJE QUE ESTA PRECOMPLETADO
                this.rellenarFormulario(cedula);            //LLAMO A RELLENAR EL FORMULARIO
                ocultarClases('divContenedorVolverABuscar');//OCULTO EL CONTENEDOR DE VOLVER A BUSCAR YA QUE ES EL INVITADO
                ocultarClases('chck');                      //OCULTO LA OPCION DE CHECK
                mostrarClases('EliminarCenso');             //MUESTRO EL BOTON ELIMINAR CENSO
                mostrarClases('EditarCenso');               //MUESTRO EL BOTON EDITAR CENSO
                ocultarClases('ValidarCenso');              //OCULTO EL BOTON DE VALIDAR
                ocultarClases('EnviarCenso');               //OCULTO EL BOTON DE ENVIAR
                mostrarClases('divContenedorFormulario');   //MUESTRO EL FORMULARIO
            }else if(mensajeBusqueda === 'Realice el censo'){ //CASO QUE EL CENSO NO EXISTA TIENE QUE HACER EL CENSO NUEVO
                mensaje = mensajeBusqueda;
                ocultarClases('divContenedorVolverABuscar');//OCULTO EL CONTENEDOR DE VOLVER A BUSCAR YA QUE ES EL INVITADO
                ocultarClases('chck');                      //OCULTO LA OPCION DE CHECK
                ocultarClases('EliminarCenso');             //OCULTO EL BOTON ELIMINAR CENSO
                ocultarClases('EditarCenso');               //OCULTO EL BOTON EDITAR CENSO
                ocultarClases('ValidarCenso');              //OCULTO EL BOTON DE VALIDAR
                mostrarClases('EnviarCenso');               //MUESTRO EL BOTON DE ENVIAR
                document.querySelector('#txtCedulaFormulario').value=cedula; //CARGO LA CEDULA
                mostrarClases('divContenedorFormulario');   //MUESTRO EL FORMULARIO
            }else{//CASO DE ERROR
                mensaje = 'Hubo un error en el sistema';
            }

        }else{ //CASO EN QUE EL CENSISTA ESTA ACCEDIENDO AL FORMULARIO

            if(mensajeBusqueda === 'Esta persona tiene el censo validado! No se podra realizar un nuevo censo' && this.usuarioLogin !== null){ //CASO QUE EL CENSO ESTA VALIDADO
                mensaje = mensajeBusqueda;
                mostrarClases('divContenedorBuscarCenso');
            }else if(mensajeBusqueda === 'Realice el censo' && this.usuarioLogin !== null){ //CASO QUE EL CENSO NO EXISTA TIENE QUE HACER EL CENSO NUEVO
                mensaje = mensajeBusqueda;          
                mostrarClases('EnviarCenso');       //MUESTRO EL BOTON DE ENVIAR
                ocultarClases('EliminarCenso');     //OCULTO EL BOTON ELIMINAR CENSO
                ocultarClases('EditarCenso');       //OCULTO EL BOTON EDITAR CENSO
                ocultarClases('ValidarCenso');      //OCULTO EL BOTON VALIDAR CENSO
                mostrarClases('chck');              //MUESTRO LA OPCION DE CHECK
                if(lugar === 0){  //Pregunto si vengo de buscar         
                    mostrarClases('divContenedorVolverABuscar');    //MUESTRO EL CONTENEDOR DE VOLVER A BUSCAR YA QUE ES EL CENSISTA
                }
                document.querySelector('#txtCedulaFormulario').value=cedula; //CARGO LA CEDULA
                mostrarClases('divContenedorFormulario');   //MUESTRO EL FORMULARIO
            }else if(this.usuarioLogin !== null){ //CASO QUE EL CENSO ESTA PRECOMPLETADO
                mensaje = mensajeBusqueda;              
                this.rellenarFormulario(cedula);        //LLAMO A RELLENAR EL FORMULARIO
                ocultarClases('EnviarCenso');           //OCULTO EL BOTON DE ENVIAR
                ocultarClases('EliminarCenso');         //OCULTO EL BOTON ELIMINAR CENSO
                ocultarClases('EditarCenso');           //OCULTO EL BOTON EDITAR CENSO
                mostrarClases('ValidarCenso');          //MUESTRO EL BOTON VALIDAR CENSO
                mostrarClases('chck');                  //MUESTRO LA OPCION DE CHECK
                if(lugar === 0){ //Pregunto si vengo de buscar
                    mostrarClases('divContenedorVolverABuscar');    //MUESTRO EL CONTENEDOR DE VOLVER A BUSCAR YA QUE ES EL CENSISTA
                }
                mostrarClases('divContenedorFormulario');   //MUESTRO EL FORMULARIO
            }

        }
        return mensaje;
    }    

    //Eliminar

    buscarPosicionCenso(cedula){
        let i=0;                                            //creo un variable
        let bandera=false;                                  //creo una bandera
        let cedulaFomateada = this.formatearCedula(cedula);  //Formateo la cedula
        while(i<this.censos.length && bandera === false){   //Recorren el array de censos
            let objetoCenso = this.censos[i];               //Tomo el objeto del censo
            if(objetoCenso.cedula === cedulaFomateada){     //Pregunto si la cedulas son iguales
                bandera=true;                                 //cambio el valor de la bandera
            }       
            i++; //aumento el valor
        }
        i--;    //desminuye el valor
        return i;   //retorno la posicion
    }

    eliminar(cedula){
        let posicion = this.buscarPosicionCenso(cedula);                        //busco la posicion del la cedula
        let mensaje = '';                                                       //creo la variable mensaje
        if(posicion>=0){                                                        //si la posicion es mayo o igual a 0 
            this.censos.splice(posicion, 1);                                    //elimino la posicion encontrada
            mensaje='Se elimino correctamente! Se le retornara a buscar censo'; //asigno el mensaje
        }else{
            mensaje = 'Por alguna extraña razon el censo no fue encontrado,'    //caso que de que llegue a dar error del buscar
        }
        
        return mensaje; //retorno mensaje
    }

    //Enviar Formulario
    enviar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar){
        let cedulaNueva = this.formatearCedula(cedula);     //formateo la cedula
        let mensaje = '';                                   

        let censosNuevo = new Censo();              //creo un censo nuevo
        censosNuevo.nombre = nombre;                //asigno el nombre
        censosNuevo.apellido= apellido;             //asigno el apellido
        censosNuevo.edad = edad;                    //asigno la edad
        censosNuevo.cedula = cedulaNueva;           //asigno la cedula
        censosNuevo.departamento = departamento;    //asigno el departemento
        censosNuevo.ocupacion = ocupacion;          //asigno la ocupacion
        censosNuevo.checkCensado=checkValidar;      //asigno el check


        if(this.usuarioLogin === null){            //Me pregunto si el usuario no esta logueado
            let objetoUsuario = this.usuarios[[Math.floor(Math.random() * this.usuarios.length)]]; // tomo todos los usuarios y eligo uno random dentro del arreglo y lo asigno a una variable
            censosNuevo.idCensista=objetoUsuario;   // asigno el censista al censo
            mensaje=`El censo se proceso correctamente! El cenisista asingnado es: ${objetoUsuario.nombre}`;
        }else{  // caso en que el censista esta logueado
            censosNuevo.idCensista=this.usuarioLogin; // asigno el censista
            mensaje='EL censo se proceso correctamente!'; 
        }

        this.censos.push(censosNuevo); // agrego el censo

        limpiarFormulario(); // limpio el formulario
        return mensaje;

    }

    // Modiciar Censo 
    modificar(nombre,apellido,cedula,edad,departamento,ocupacion,checkValidar){
        let cedulaNueva = this.formatearCedula(cedula);     //formateo la cedula
        let mensaje = '';                                   
        
        let objetoCenso = this.traerObjetoCenso(cedula);    //traigo el objeto censo

        objetoCenso.nombre = nombre;                //Sobreescribo el nombre
        objetoCenso.apellido= apellido;             //Sobreescribo el apellido
        objetoCenso.edad = edad;                    //Sobreescribo la edad
        objetoCenso.cedula = cedulaNueva;           //Sobreescribo la cedula
        objetoCenso.departamento = departamento;    //Sobreescribo el departemento
        objetoCenso.ocupacion = ocupacion;          //Sobreescribo la ocupacion
        objetoCenso.checkCensado=checkValidar;      //Sobreescribo el check

        if(this.usuarioLogin === null){                 //caso en el que el invitado modifica algo

            mensaje=`El censo se edito correctamente!`; 
        }else{                                          //caso en que el usuario esta logueado
            objetoCenso.idCensista = this.usuarioLogin; //sobreescribo el usuario que cambio el validar
            mensaje='EL censo se valido correctamente!';
        }

        return mensaje;                                 //retorno mensaje
    }

    // Reasignar Censo 

    reasignar(censoCedula, censistaId) {
        let cedulaConFormato = this.cedulaConFormato(censoCedula);  // a la cedula le pongo el formato
        let objetoCenso = this.traerObjetoCenso(cedulaConFormato);  // traigo el obejeto censo con la cedula con formato
        let objetoUsuario = this.obtenerUsuario(censistaId);    	// obtengo el usuario censista

        
        objetoCenso.idCensista=objetoUsuario;                       //asigno al objeto el nuevo censista
        return true;                                                
    }

    // Tabla para Validar Censos
    tablaParaValidar(){
        let arrayCensos = this.censosUsuarioNoValidados(); //LLAMO A LOS CENSOS NO VALIDADOS

        let table = `<h2>Censos para validar</h2>`;
        table += `<table border="1">`; //Contenedor tabla
        table += `<thead><tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Accion</th></tr></thead>`; // Titulos Tablas

        for (let i = 0; i < arrayCensos.length; i++) { // recorro el array previamente validado que sea del usuario.

            let objetoCenso = arrayCensos[i]; // Tomo el objeto del array

            table += `<tr><td>${objetoCenso.cedula}</td><td>${objetoCenso.nombre}</td><td>${objetoCenso.apellido}</td>`;                     //CREO LA FILA DE LA TABLA 
            table += `<td><input type="button" value="Ver Censo" class="btn btnTableEvent" selectCenso="${objetoCenso.cedula}"/></td></tr>`; //concateno el boton
            

        }


        if (arrayCensos.length === 0){  //Preguntos si el 
            table = `<h2>No tiene censos asignados!</h2>`; // Mensaje en el caso de que no hay elementos 
            
        }else{
            table += `</table>`; //Contenedor tabla
        }

        
       
        return table;
    }

    // ESTADISTICAS CENSISTAS

    contadorCensosValidados(){
        let newArray = new Array();                     //creo el array 
        for (let i = 0; i < this.censos.length; i++) {  //recorro el array censo
            let objetoCenso = this.censos[i];           //tomo el objeto censo
            if(objetoCenso.checkCensado){               //Me pregunto si esta validado
                newArray.push(objetoCenso);             //agrego al array
            }
            
        }

        return newArray;    //retono el array
    }

    contadorCensosNoValidados(){
        let newArray = new Array();                     //creo un array
        for (let i = 0; i < this.censos.length; i++) {  //recorrro el array censos
            let objetoCenso = this.censos[i];           //tomo el censo
            if(!objetoCenso.checkCensado){              //pregunto si no esta validado (lo niego para agregarlo al array)
                newArray.push(objetoCenso);             //agrego al array
            }       
            
        }

        return newArray;    //retorno el array nuevo
    }    

    totalPersonasCensadasPorDep(){
        let censosValidados = this.contadorCensosValidados();   //Todos los censos validados

        let table = `<table border="1">`; //Contenedor tabla

        table += `<thead><tr><th>Departamento</th><th>Cantidad Censados</th></tr></thead>`; // Titulos Tablas

        if(censosValidados.length !== 0){                                               //Pregunto si no hay ningun censo validado
            for (let i = 0; i < this.departamentos.length; i++) {                       //recorro el array de departamentos
                let n = 0;
                let objetoDepartamento = this.departamentos[i];                         //tomo el objeto departamento
                for (let j = 0; j < censosValidados.length; j++) {                      //recorro el array de censos validados
                    let objetoCenso = censosValidados[j];                               //tomo el objeto censo validado
                    if(objetoDepartamento.id === Number(objetoCenso.departamento)) {    //Pregunto si el id del censo del departamento coincide con el departamento en el que estoy actual
                        n++;
                    }
                }
    
                table += `<tr><td>${objetoDepartamento.nombre}</td><td>${n}</td></tr>`; //  Pongo la cantidad de censados 
    
                
            }
            
            table += `</table>`; //Contenedor tabla
        }else{
            table = `<h5>No hay censos aún</h5>`; // Mensaje en el caso de que no hay elementos 
        }
        
        return table;
    }

    porcentajePendienteAValidar(){
        let pendientes = this.contadorCensosNoValidados().length;   //traigo todos los censos que estan para validadar y saco el largo de ese resultado ya que es un arreglo
        let validadas = this.contadorCensosValidados().length;      //traigo todos los censos que estan validados y saco el largo de ese resultado ya que es un arreglo

        let total = pendientes + validadas;                         //sumo el total

        let porcentaje = 0;                                      
        if(total !== 0){                                            //pregunto si el total es disitino de cero
            porcentaje = (pendientes * 100)/total;                  //calculo el porcentaje
        }

        return Number(porcentaje.toFixed(2));
    }

    traerObjetoDepartamento(id){
        let objetoDepartamento = null;                          //creo una variable para tomar el departamento
        for (let i = 0; i < this.departamentos.length; i++) {   //recorro el array de departamento
            if(Number(id) === this.departamentos[i].id){        //me pregunto si el id es igual al id del departamento
                objetoDepartamento = this.departamentos[i];     //capturo el objeto del departamento
            }
        }

        return objetoDepartamento; 
    }

    porcentajePersonasEdadDepartamento(departamento){
        let censosValidados = this.contadorCensosValidados(); //traigo censos validados
        let mayores=0;  //creo variable para calcular los mayores
        let menores=0;  //creo variable para calcular los menores

        let table = `<table border="1">`; //Contenedor tabla
        table += `<thead><tr><th>Departamento</th><th>Mayores de Edad</th><th>Menores de edad</th></tr></thead>`; // Titulos Tablas

        if(censosValidados.length !== 0){                                       //pregunto si hay censos validados
            for (let i = 0; i < censosValidados.length; i++) {                  //recorro los censos validados
                let objetoCenso = censosValidados[i];                           //traigo el objeto censo
                if(Number(objetoCenso.departamento) === Number(departamento)){  //Pregunto si el departamento coincide
                    if(Number(objetoCenso.edad)>=18){                           //pregunto si la edad es mayor a 18
                        mayores++;                                              //aumento la variable mayores
                    }else if(Number(objetoCenso.edad)<18){                      //pregunto si la edad menor a 18
                        menores++;                                              //aumento la variable menores
                    }
                }
                
            }
    
            let total = mayores + menores; //Hago el total
            let porcentajeMenores= 0;   //creo la variable para luego ponerle el porcentaje calculado
            let porcentajeMayores= 0;   //creo la variable para luego ponerle el porcentaje calculado
            if(mayores>0){ //En el caso de que los 'mayores' sean menores a 0 sigue de largo y no modifica la variable 
                porcentajeMayores=Number(((mayores * 100)/total).toFixed(2)); 
            }
            if(menores>0){//En el caso de que los 'menores' sean menores a 0 sigue de largo y no modifica la variable 
                porcentajeMenores=Number(((menores * 100)/total).toFixed(2));
            }

            let objetoDepartamento = this.traerObjetoDepartamento(departamento); //ontengo el objeto del departamento
    
            table += `<tr><td>${objetoDepartamento.nombre}</td><td>${porcentajeMayores}%</td><td>${porcentajeMenores}%</td></tr>`; //Armo la fila con los valores


            table += `</table>`; //Contenedor tabla
        }else{
            table = `<h5>No hay censos aún</h5>`; // Mensaje en el caso de que no hay elementos 
        }

        
        return table;
    }

    // REPORTE CENSO
    reporteCenso(){

        let total = this.censos.length; //SACO EL LARGO DEL ARRAY CENSOS
        let totalSumaPorcentaje=0;  //Creo el total del porcentaje
        let table = `<table border="1">`; //Contenedor tabla
        table += `<thead><tr><th>Departamento</th><th>Estudian</th><th>No Trabajan</th><th>Dependientes o independientes</th><th>Porcentaje del total de censados</th></tr></thead>`; // Titulos Tablas

        if(total>0){ //PREGUNTO SI EL TOTAL ES MAYOR A CERO
            for (let i = 0; i < this.departamentos.length; i++) { //RECORRO TODOS LOS DEPARTAMENTOS
                let estudian = 0;   //CREO LA VARIABLE ESTUDIAN
                let trabajan = 0;   //CREO LA VARIABLE TRABAJAN
                let noTrabajan = 0; //CREO LA VARIABLE  NO TRABAJAN
                let personasConCenso= 0;    //CREO LA VARIABLE CENSOS DEL DEPARTAMENTO
                let objetoDepartamento = this.departamentos[i]; //TOMO EL OBJETO CENSO
                
                for (let j = 0; j < this.censos.length; j++) { //RECORRO LOS CENSOS QUE ESTAN REGISTRADOS
                    let objetoCenso = this.censos[j];   //TOMO EL OBJETO CENSO
                    if(Number(objetoCenso.departamento) === Number(objetoDepartamento.id)){ //PREGUNTO SI CENSO PERTENCE AL DEPARTAMENTO ANTERIORMENTE SELECCIONADO
    
                        if(Number(objetoCenso.ocupacion) === 2){    //PREGUNTO SI LA OCUPACION DEL CENSO ES ESTUDIANTE
                            estudian++;
                        }else if(Number(objetoCenso.ocupacion) === 3){ //PREGUNTO SI LA OCUPACION DEL CENSO ES NO TRABAJA
                            noTrabajan++;
                        }else{  //CASO EN QUE TRABAJA
                            trabajan++;
                        }
                        personasConCenso++; //AUMENTO
    
    
                    }
                }
                let porcentajeDep = 0; //INICIALIZO EL PORCENTAJE DEL DEPARTAMENTO
                if(personasConCenso!==0){//ME PREGUNTO SI HAY CENSOS EN EL DEPARTAMENTO
                    porcentajeDep = Number(((personasConCenso * 100)/total).toFixed(2)); //CALCULO EL PORCENTAJE DE LOS CENSOS EN EL DEPARTAMENTO RESPECTO AL TOTAL
                }
                totalSumaPorcentaje += porcentajeDep; //sumo el porcentaje al total
    
                table += `<tr><td>${objetoDepartamento.nombre}</td><td>${estudian}</td><td>${noTrabajan}</td><td>${trabajan}</td><td>${porcentajeDep}%</td></tr>`; //AGREGO LOS DATOS OBTENIDOS
                
            }
            table += `<tr><td>${totalSumaPorcentaje}%</td></tr>`;  //fila total
            table += `</table>`; //Contenedor tabla
        }else{ //caso en el que el total sea cero, no hay casis
            table = `<h5>No hay censos aún</h5>`; // Mensaje en el caso de que no hay elementos
        }

        return table;

    }

    // LOGOUT

    logout(){
        this.usuarioLogin = null; //Le saco el login al usuario
    }


}