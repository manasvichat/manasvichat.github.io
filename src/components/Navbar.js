import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='header'>
        <div className='name'>
            <h1>Manasvi Chaturvedi</h1>
            <p className='description'> Ph.D. candidate in Linguistics at Yale University </p>
        </div>
        <nav className='nav'>
            <ul className='tabs'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/CV">CV</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;
