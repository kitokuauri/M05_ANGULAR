export class Mensaje {
    constructor(
        public id: number,
        public id_remitente: number,
        public id_destinatario: number,
        public fecha: Date,
        public remitente: string,
        public destinatario: string,
        public mensaje: string,
    ) {
    }
}