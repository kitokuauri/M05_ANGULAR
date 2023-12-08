export class Cliente {
    constructor(
        public id: number,
        public id_gestor: number,
        public nombre: string,
        public apellido: string,
        public edad: number,
        public email: string,
        public presupuesto: number
    ) {
    }
}