import { VscGithub, VscTwitter } from 'react-icons/vsc';

function Footer() {
    return (
        <footer>
            <div className="copyright">Copyright © Philipp Rolinek 2022</div>
            <div className="social">
                <a className="links" style={{}} href="https://github.com/PhilRoli/DienstStatistik">
                    <VscGithub />
                </a>
                <a className="links" style={{}} href="https://twitter.com/PhilRoli">
                    <VscTwitter />
                </a>
            </div>
            <div style={{ clear: 'both' }}></div>
        </footer>
    );
}

export default Footer;
