class Usuario{
    static idUsuario= 0;
    constructor(){
        this.id = Usuario.idUsuario++;
        this.nombre;
        this.nombreUsuario;
        this.password;
    }
}