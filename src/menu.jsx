import { Link } from "react-router-dom";


export default function Menu() {
  return (
    <nav className="menu">
      <Link to='/'>Home</Link>
      <span> | </span>
      <Link to='/logout'>Logout</Link>
      <span> | </span>
      <Link to='/sobre'>Sobre</Link>
    </nav>
  );
}