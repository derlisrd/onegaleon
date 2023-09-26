export const translateLoginError = (status: number) => {
    switch (status) {
      case 401:
        return "Usuario o contraseña incorrectos";
      case 500:
        return "Error en el servidor";
      default:
        return `Error desconocido (código ${status})`;
    }
  };