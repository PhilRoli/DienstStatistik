import { VscGithub, VscTwitter } from 'react-icons/vsc';
import { TiPlus } from 'react-icons/ti';
import { FaAmbulance } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="copyright">Copyright © Philipp Rolinek 2022</div>
            <div className="social">
                <a
                    className="links"
                    style={{}}
                    href="https://github.com/PhilRoli/DienstStatistik"
                    target="_blank"
                    rel="noreferrer"
                >
                    <VscGithub />
                </a>
                <a className="links" style={{}} href="https://twitter.com/PhilRoli" target="_blank" rel="noreferrer">
                    <VscTwitter />
                </a>
                <a
                    className="links"
                    style={{}}
                    href="https://portal.s.roteskreuz.at/home.php"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TiPlus />
                </a>
                <a className="links" style={{}} href="https://diversys.at/" target="_blank" rel="noreferrer">
                    <FaAmbulance />
                </a>
            </div>
            <div style={{ clear: 'both' }}></div>
        </footer>
    );
}

export default Footer;
