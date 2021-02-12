import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link exact to='/' className='logo'>
        Anastasia Kalenik
      </Link>
      <nav>
        <NavLink exact activeClassName='active-nav-link' to='/'>
          Works
        </NavLink>
        <NavLink exact activeClassName='active-nav-link' to='/about'>
          About
        </NavLink>
        <NavLink exact activeClassName='active-nav-link' to='/contact'>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
