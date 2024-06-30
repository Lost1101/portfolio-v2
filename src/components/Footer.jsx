import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
    const list = [{id: 5, name:'Github', link:'https://github.com/Lost1101'}, {id: 6, name:'Facebook', link:'https://web.facebook.com/kamilah.insani/'}, {id: 7, name:'Instagram', link:'https://instagram.com/kamii_2187/'}, {id: 8, name:'LinkedIn', link:'https://www.linkedin.com/in/kamilah-insani-1917a1256/'}];
    const icons = [faGithub, faFacebook, faInstagram, faLinkedin]
    return(
        <div className="Footer">
            <div className="Footer-socmed">
            <ul>
            {list.map((link, i) =>(
                <a href={link.link} key={link.id}>
                    <li>
                        <span><FontAwesomeIcon icon={icons[i]}/></span>
                    </li>
                </a>
            ))}
            </ul>
        </div>
            <p>Made with ❤ | &#169; Lost/Kamii_2187</p>
        </div>
    )
}

export default Footer;