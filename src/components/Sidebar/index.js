import { Link, NavLink } from 'react-router-dom'
import  './index.scss';
import Logo from '../../assets/images/android-chrome-192x192.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faEnvelope, faM, faW  } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
//<img src={LogoS} alt='logo'/>
//<img className='sub-logo' src={LogoSubtitle} alt='slobodan'/>

const Sidebar = () => (

    <div className="nav-bar">
        <Link className='logo' to='/'>
        <img src={Logo}/>
        </Link>
        <div className="name-Title">Wolford</div>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#ffffff" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className={"about-link"} to="/about">
                <FontAwesomeIcon icon={faUser} color="#ffffff" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className={"contact-link"} to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mikewolf04/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>       
            </li>
            <li>  
                <a target="_blank" rel="noreferrer" href="https://github.com/MikeWolf4">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>    
            </li>
            <li>  
                <a target="_blank" rel="noreferrer" href="https://soundcloud.com/michael-wolford-2">
                    <FontAwesomeIcon icon={faSoundcloud}/>
                </a>    
            </li>
        </ul>
    </div>

)

export default Sidebar