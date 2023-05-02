export class Usuario {    
    // Método estatico para crear una instancia de mi clase a la respuesta en el servicio de Usuarios Service
    static usuarioDesdejson( obj:Usuario ) {
        return new Usuario(
            obj['id'],
            obj['email'],
            obj['first_name'],
            obj['last_name'],
            obj['avatar'],
        )
    }
    constructor(
        public id:         number,
        public email:      string,
        public first_name: string,
        public last_name:  string,
        public avatar:     string,
    ) {}

    get fullName() {
        return `${this.first_name}  ${this.last_name}`;
    }

}