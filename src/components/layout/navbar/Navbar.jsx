import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>Comision: 43290</h4>

      <ul className="containerCategories">
        <li><a href="">Inicio</a></li>
        <li><a href="">Registrarse</a></li>
        <li><a href="">Contacto</a></li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
