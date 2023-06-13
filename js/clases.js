class Usuario{
    static idUsuario= 0;
    constructor(){
        this.id = Usuario.idUsuario++;
        this.nombre;
        this.nombreUsuario;
        this.password;
    }
}


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

class Ocupacion{
    static idOcupacion = 0;
    constructor(){
        this.id = Ocupacion.idOcupacion++;
        this.nombre;
    }
}

class Departamento{
    static idDepartamento = 0;
    constructor(){
        this.id = Departamento.idDepartamento++;
        this.nombre;
    }
}