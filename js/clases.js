//Clase para el censista
class Usuario{
    static idUsuario= 0;
    constructor(){
        this.id = Usuario.idUsuario++;
        this.nombre;
        this.nombreUsuario;
        this.password;
    }
}

//Clase para los censos
class Censo{
    static idCenso= 0;
    constructor(){
        this.id = Censo.idCenso++;	
        this.nombre;
        this.apellido;
        this.edad;
        this.cedula;
        this.departamento;
        this.ocupacion;
        this.idCensista=null;
        this.checkCensado=false;
    }
}

//Clase para la ocupacion
class Ocupacion{
    static idOcupacion = 0;
    constructor(){
        this.id = Ocupacion.idOcupacion++;
        this.nombre;
    }
}

//Clase para el departamento
class Departamento{
    static idDepartamento = 0;
    constructor(){
        this.id = Departamento.idDepartamento++;
        this.nombre;
    }
}