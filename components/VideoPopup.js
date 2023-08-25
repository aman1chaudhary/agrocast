import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';

const VideoPopup = ({videoID}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
		<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoID} onClose={() => setOpen(false)} />
		<button className="play_btn popup-youtube" onClick={()=> setOpen(true)} style={{backgroundColor:'transparent'}} ><i className="flaticon-play-button text-white" ></i></button>
    </>
  )
}
export default VideoPopup;