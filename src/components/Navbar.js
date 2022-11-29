// React
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                RK Statistik
            </Link>
            <ul>
                <CustomLink to="/Statistik">Statistik</CustomLink>
                <CustomLink to="/Daten">Daten</CustomLink>
                <CustomLink to="/Timeline">Timeline</CustomLink>
                <CustomLink to="/AddData">Dienst Hinzufügen</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive && 'active'}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Navbar;
