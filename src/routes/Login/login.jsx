import { useState } from 'react';
import './login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/usuarios');
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
      }

      const data = await response.json();
      console.log('Dados recebidos:', data);

      if (!data || !Array.isArray(data)) {
        throw new Error('Dados de usuários inválidos');
      }

      const user = data.find(
        (user) => user.nome === username && user.email === email && user.senha === password
      );

      if (user) {
        console.log('Login bem-sucedido!');
        // Armazenar dados do usuário na sessionStorage
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/menu';
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

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
      {loginError && <p className="error-message">Credenciais inválidas. Verifique seus dados e tente novamente.</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
