import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  './index.scss';
import {faGithub, faReact, faNodeJs} from "@fortawesome/free-brands-svg-icons";
import ueLogo from "../../assets/images/unreal-1.svg";
import MayaLogo from "../../assets/images/maya-2017.svg";
import flStudio from "../../assets/images/fl-studio.svg";
import HashLoader from "react-spinners/HashLoader";
import React, {useState, useEffect} from 'react';




const About = () => {

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
            <div className="container about-page">
            <div className="text-zone">
                <h1>
                    About Me
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.
                </p>
                <p>
                    It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                </p>
                <p> 
                    It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. It has survived not only five 
                    centuries, but also the leap into electronic typesetting, remaining essentially 
                    unchanged.
                </p>

            
            </div>
            <div className='stage-cube-cont'>
                {/* <input className='radio-button test' type="radio" name='cube-gallery' defaultChecked />
                <input className='radio-button' type="radio" name='cube-gallery'/>
                <input className='radio-button' type="radio" name='cube-gallery'/>
                <input className='radio-button' type="radio" name='cube-gallery'/>
                <input className='radio-button' type="radio" name='cube-gallery'/>
                <input className='radio-button' type="radio" name='cube-gallery'/> */}
                
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact}color="#61dafb"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faNodeJs}color="#68a063"/>
                    </div>
                    <div className='face3'>
                        <img src={ueLogo} height={200} width={200} />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGithub}color="#171515"/>
                    </div>
                    <div className='face5'>
                        <img src={MayaLogo} height={200} width={200} />
                    </div>
                    <div className='face6'>
                        <img src={flStudio} height={200} width={200} />
                    </div>
                </div>

            </div>
            </div>
        }
        </>
        );
}

export default About