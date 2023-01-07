import { VscGithub, VscTwitter } from 'react-icons/vsc';
import { TiPlus } from 'react-icons/ti';
import { FaAmbulance } from 'react-icons/fa';

function Footer({commitDate, cached}) {
    const commitDateVar = new Date(commitDate)

    return (
        <footer>
            <div className="copyright">{`Copyright © Philipp Rolinek ${commitDateVar.getFullYear() + '-' + ('0' + (commitDateVar.getMonth()+1)).slice(-2) + '-' + ('0' + commitDateVar.getDate()).slice(-2)}`}</div>
            <div className='cached'>{!cached ? 'Cached Daten' : 'Live Daten'}</div>
            <div className="social">
                <a
                    className="links"
                    style={{}}
                    href="https://github.com/PhilRoli/DienstStatistik"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                >
                    <VscGithub />
                </a>
                <a
                    className="links"
                    style={{}}
                    href="https://twitter.com/PhilRoli"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="twitter.com/philroli"
                >
                    <VscTwitter />
                </a>
                <a
                    className="links"
                    style={{}}
                    href="https://portal.s.roteskreuz.at/home.php"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Rot Kreuz Portal"
                >
                    <TiPlus />
                </a>
                <a
                    className="links"
                    style={{}}
                    href="https://diversys.at/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Dienstverfaltungssystem"
                >
                    <FaAmbulance />
                </a>
            </div>
            {/* <div style={{ clear: 'both' }}></div> */}
        </footer>
    );
}

export default Footer;
