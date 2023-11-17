import { useState, useEffect } from 'react';
import './home.scss'

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Faz a requisição ao arquivo JSON usando fetch
    fetch('/dados.json') // Certifique-se de ajustar o caminho correto
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Erro ao carregar dados:', error));
  }, []); // Executa somente uma vez, quando o componente é montado

  const handleLogin = (e) => {
    e.preventDefault();

    // Lógica para verificar se as credenciais são válidas
    const user = userData.find(
      (user) => user.nome === username && user.email === email && user.senha === password
    );

    if (user) {
      setLoggedIn(true);
      console.log('Login bem-sucedido!');
      window.location.href = '/logout'; // Redireciona para a outra página
    } else {
      alert('Credenciais inválidas');
    }
  };

  if (loggedIn) {
    return (
      <div>
        <h2>Você está logado!</h2>
        <button onClick={() => window.location.href = '/outra_pagina'}>Ir para outra página</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <label>
        Nome:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
