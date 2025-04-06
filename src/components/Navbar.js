import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/publications">Publications</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
