import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const SideBar = () =>{
    const list = [{id: 5, name:'Github', link:'https://github.com/Lost1101'}, {id: 6, name:'Facebook', link:'https://web.facebook.com/kamilah.insani/'}, {id: 7, name:'Instagram', link:'https://instagram.com/kamii_2187/'}, {id: 8, name:'LinkedIn', link:'https://www.linkedin.com/in/kamilah-insani-1917a1256/'}];
    const icons = [faGithub, faFacebook, faInstagram, faLinkedin]
    return(
        <>
        <div className="SideBar">
            <ul>
            {list.map((link, i) =>(
                <a href={link.link} key={link.id}>
                    <li>
                                <span><FontAwesomeIcon icon={icons[i]}/></span>
                            <div>
                                <p>{link.name}</p>
                            </div>
                    </li>
                </a>
            ))}
            </ul>
        </div>
        </>
    )
}

export default SideBar;