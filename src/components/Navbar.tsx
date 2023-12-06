import Logo from '../assets/logo-bookmark.svg';
import HamburgerMenu from '../assets/icon-hamburger.svg';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <div>
        <img src={Logo} alt='Company logo' />
      </div>

      <button>
        <img src={HamburgerMenu} alt='Hamburger menu' />
      </button>

      <ul>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>CONTACT</li>
        <li>
          <button>LOGIN</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
