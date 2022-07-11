import  './index.scss';
import { Link } from 'react-router-dom';
import HomeVideos from '../HomeVideos';
import HashLoader from "react-spinners/HashLoader";
import React, {useState, useEffect} from 'react';


const Home = () =>{

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        }, 1000)
    }, [])


    return (
        <>
        
        {
            loading?

            <div className='loader-active'>   
            <HashLoader color={"#8c00ff"} loading={loading}  size={150} />
            </div>

            :

            <div className='container home-page'>
                
                    <div className='text-zone'>
                        <h1>
                        
                        {/*<img src={LogoTitle} alt="developer" />*/}
                        
                        Michael Wolford
                        <br/>
                        Web and Indie Game Developer,<br/> Sound Design and Music Composer
                        </h1>
                        <h2>
                        Full Stack React / node js / Unreal Engine / Maya / Fl Studio
                        </h2>
                        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                    </div>
                    <HomeVideos/>
            </div>
        }       
        </>
    );
}

export default Home