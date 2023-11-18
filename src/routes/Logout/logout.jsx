import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './logout.scss';

const Menu = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userFromSession = sessionStorage.getItem('user');
    if (userFromSession) {
      const user = JSON.parse(userFromSession);
      setUserData(user);
    }
  }, []);

  return (
    <nav className="menu">
      <Link to='/home'>Home</Link>
      <span> | </span>
      {userData && (
        <div className="user-info">
          <p>Nome: {userData.nome} Email: {userData.email}</p>
        </div>
      )}
    </nav>
  );
};

const Logout = () => {
  const voltarHome = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <Menu />
      
      <div className="welcome-message">
        <h1>Página de Logout</h1>
        <button onClick={voltarHome}>Ir para a página de login</button>
      </div>
    </div>
  );
};

export default Logout;
