import  './index.scss';
import HomeVideo from "../../assets/video/webBroll_1.webm"
import sample from '../../assets/video/webBroll_1.webm';



const HomeVideos = () => {
    return (<div className='video-container'>
        <div className='video-container-2'>
        <video className='solid-video' width="auto" height="900" autoPlay loop muted>
            <source className='video-container' src={sample} type='video/mp4' />
        </video>
        </div>
    </div>);
}

export default HomeVideos