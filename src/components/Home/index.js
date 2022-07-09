import  './index.scss';
import { Link } from 'react-router-dom';
import LogoTitle from "../../assets/images/logo-s.png"

const Home = () =>{
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                
                {/*<img src={LogoTitle} alt="developer" />*/}
                
                Michael Wolford
                <br/>
                Web and Indie Game Developer,<br/> Sound Design and Music Composer
                </h1>
                <h2>
                Full Stack react / node js / Unreal Engine / Maya / Fl Studio
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home