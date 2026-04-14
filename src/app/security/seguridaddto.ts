export interface CredencialesUsuarioDTO{
  Email:string,
  Password:string
}

export interface RespuestaAutenticacionDTO{
  token: string,
  expiracion: Date
}
