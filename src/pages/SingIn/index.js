import React from 'react';
import logo from '../../assets/logo.png';

export default function SingIn() {
  return (
    <>
      <img src={logo} alt="Fastfeet" />
      <form>
        <h1>SEU E-MAIL</h1>
        <input type="email" placeholder="exemplo@email.com" />
        <h1>SUA SENHA</h1>
        <input type="password" placeholder="******" />
        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
