import { Link } from 'react-router';
import Apple from '../../content/Apple.png';
import './nav.scss';

const Nav = () => {
  return (
    <nav>
      <Link className="link logo" to="/">
        <img src={Apple} alt="Home"></img>
      </Link>
      <ul>
        <li>
          <Link className="link text" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link text" to="/facts">
            Facts
          </Link>
        </li>
        <li>
          <Link className="link text" to="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link className="link text" to="/hall-of-fame">
            Hall of Fame
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
