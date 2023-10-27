import Cookies from 'js-cookie';
import decode from 'jwt-decode';

interface User {
  sub: string;
  name: string;
}

export function getUser(): User {
  const token = Cookies.get('token');

  if (!token) {
    window.location.href = "/entrar";
    throw new Error("Você precisa estar logado para acessar essa página");
  }

  const user: User = decode(token);
  return user;
}
