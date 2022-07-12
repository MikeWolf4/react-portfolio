import  './index.scss';
import HashLoader from "react-spinners/HashLoader";
import React, {useState, useEffect, useRef} from 'react';
import wallpaper from '../../assets/images/wallpapery.png'
import emailjs from '@emailjs/browser'
import { faWindows } from '@fortawesome/free-brands-svg-icons';


 

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const refForm = useRef(null)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        }, 1000)
    }, [])
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_vcquc31', 
                'template_hipdwpl   ', 
                refForm.current, 
                'F09fkOWMktUWsHgMr'
                )
            .then(
                ()=>{
                    alert('Message sent!')
                    window.location.reload(false)
                },
                ()=>{
                    alert('Message failed!')
                }
            )
    }
    return (
        <>
        
            {
                loading?
                <div className='loader-active'>   
                <HashLoader color={"#8c00ff"} loading={loading}  size={150} />
                </div>
                
                :

                <div className='container contact-page'>
                   <img className='wallpaper' src={wallpaper}/>
                    <div className='text-zone'>
                        <h1>
                            Contact Me
                        </h1>
                        <p>
                            I'm interested in any full time or freelance game 
                            development and web development - especially Unreal 
                            Engine and React js. If you have any requests or questions, 
                            don't hesitate to contact me.  
                        </p>
                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type="text" name='name' placeholder='Name' required/>
                                    </li>
                                    <li className='half'>
                                        <input type="email" name='email' placeholder='Email' required/>
                                    </li>
                                    <li>
                                        <input type="text" name='subject' placeholder='Subject' required/>
                                    </li>
                                    <li>
                                        <textarea type="text" name='message' placeholder='Message' required/>
                                    </li>
                                    <div className='button-Cont'>
                                    <li className='half'>
                                        <input type="submit" className='flat-button' value="SEND" />
                                    </li>
                                    </div>
                                </ul>
                            </form>
                        </div>
                    </div>
                    </div>
                
                
            }
        
        </>
    );
}

export default Contact