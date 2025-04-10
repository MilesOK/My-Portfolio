import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Toggle from "../Components/Toggle";
import Portfolio from "./Portfolio";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear(); // Dynamically gets the current year

  return (
    <>
      <div className="header">
        <h1 onClick={() => navigate('/')} id="portfolio">Portfolio</h1>
        <nav>
          <ul>
            <li><Link to={'/About'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
          </ul>
          <Toggle />
        </nav>
      </div>
      {location.pathname === '/' && <Portfolio />}
      <Outlet />
      <footer style={{
        backgroundColor: '#f8f8f8',
        padding: '1rem',
        textAlign: 'center',
        borderTop: '1px solid #e7e7e7',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        left: 0
      }}>
        <p style={{
          margin: 0,
          color: '#666',
          fontSize: '0.9rem'
        }}>© {currentYear} Developed by Wisdom Miles</p>
      </footer>
    </>
  )
}

export default Header;