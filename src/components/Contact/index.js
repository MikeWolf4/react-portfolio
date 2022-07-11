import  './index.scss';
import HashLoader from "react-spinners/HashLoader";
import React, {useState, useEffect} from 'react';


const Contact = () => {
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
                <div>
                    hello
                </div>
            }
        </>
    );
}

export default Contact