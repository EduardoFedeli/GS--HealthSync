import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles/style.scss'


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
    <div>
      <nav className="menu">
        <span> | </span>
        <Link to='/home'>Home</Link>
        <span> | </span>
        <Link to='/logout'>Logout</Link>
        <span> | </span>
        {userData && (
          <div>
            <p>Nome: {userData.nome} Email: {userData.email}</p>
          </div>
        )}
      </nav>
      <div className="welcome-message">
        <h1>Bem-vindo ao site!</h1>
        <p>Confira nossas soluções incríveis!</p>
      </div>
    </div>
  );
};

export default Menu;
