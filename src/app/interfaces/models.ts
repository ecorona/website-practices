export class UsuarioModel {
    id?: number;
    uuid?: string;
    nombre: string;
    email: string;
    perfil: string;
    activo: boolean;
    password?: string;
    clearPassword?:string;
}
