import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faCode, faUser, faCogs, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({onNavClick}) =>{
    const list = [{id: 0, name:'Home'}, {id: 1, name:'About'}, {id: 2, name:'Skills'}, {id: 3, name:'Project'}, {id: 4, name:'Contact'}];
    const icons = [faHome, faUser, faCode, faCogs, faPhone];
    return(
      <>
      <div className='NavBar'>
          <ul>
          {list.map((link, i) => (
          <a id='link' href={'#' + link.name} key={link.id}>
            <li className='Link'>
              <button onClick={() => onNavClick(link.name)}><FontAwesomeIcon icon={icons[i]} className='FaIcon'/> {link.name}</button>
            </li>
          </a>
          ))}
        </ul>
        </div>
      </>
    )
  }

export default Navbar;