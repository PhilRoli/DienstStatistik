// React
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/DienstStatistik/" className="site-title">
                RK Statistik
            </Link>
            <ul>
                <CustomLink to="/DienstStatistik/Statistik">Statistik</CustomLink>
                <CustomLink to="/DienstStatistik/Daten">Daten</CustomLink>
                <CustomLink to="/DienstStatistik/Timeline">Timeline</CustomLink>
                <CustomLink to="/DienstStatistik/AddData">Dienst Hinzufügen</CustomLink>
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
