export class UsuarioModel {
  id?: number;
  uuid?: string;
  nombre: string;
  email: string;
  perfil: string;
  activo: boolean;
  password?: string;
  clearPassword?: string;
  papas: string;
}

export class ClienteModel {
  id?: number;
  uuid?: string;
  name: string;
  user: string;
  email: string;
  password?: string;
  clearPassword?: string;
}

export class ResponseLoginUser {
  jwt: string;
  usuarios: [UsuarioModel];
}
