import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    <>
      <div className="menu-container">
        <nav className="menu">
          <Link to='/logout'>Logout</Link>
          <span> | </span>
          {userData && (
            <div className="user-info">
              <p>Nome: {userData.nome} Email: {userData.email}</p>
            </div>
          )}
        </nav>
      </div>
      <div className="welcome-message">
        <h1>Nós somos a HealthSync</h1>

            <div className="container">
              <div className="box">
                  <h4>O que é a Solução?</h4>
                  <a>A HealthSync é uma plataforma tecnológica projetada para revolucionar o acesso à saúde. Nosso objetivo é simplificar e modernizar a gestão de informações de saúde, proporcionando uma experiência totalmente online e acessível. A solução visa oferecer um sistema centralizado para armazenar dados de saúde, incluindo registros de vacinas, eliminando a necessidade de documentos físicos e garantindo um acesso fácil e seguro às informações de saúde.</a>
              </div>
              
              <div className="box">
                  <h4>O que ela fará</h4>
                  <a>A plataforma HealthSync terá a capacidade de digitalizar e armazenar os registros de vacinação, garantindo que as informações estejam sempre disponíveis e atualizadas para os usuários. Além disso, oferecerá recursos de localização e agendamento, permitindo que os usuários encontrem facilmente centros de vacinação próximos e agendem consultas sem precisar enfrentar longas filas, trazendo conveniência e eficiência ao processo de cuidados com a saúde.</a>
              </div>
              
              <div className="box">
                  <h4>Como funcionará</h4>
                  <a>A HealthSync funcionará como uma plataforma online intuitiva, permitindo aos usuários criar e gerenciar seus perfis de saúde de forma simples. A tecnologia facilitará o acesso aos registros de vacinação, permitindo sua visualização a qualquer momento. Além disso, integrará recursos de localização para identificar os centros de vacinação mais próximos e fornecerá um sistema de agendamento que simplificará o processo de reserva de consultas e vacinações, tudo em um ambiente virtual seguro e de fácil acesso.</a>
              </div>
            
            </div>
      
      
      </div>

    </>
  );
};

export default Menu;
