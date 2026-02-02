import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Navegacion from '../component/Navegacion';
import FormLogin from '../component/FormLogin';
import useGet from '../hook/useGet';

export default function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { data: users, cargando } = useGet('https://fakestoreapi.com/users');

  const handleLogin = (username, password) => {
    setError('');

    if (!username || !password) {
      setError('Completa todos los campos');
      return;
    }

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <Navegacion />
      <h1>Login</h1>

      <FormLogin
        onSubmit={handleLogin}
        error={error}
      />
    </div>
  )
}


