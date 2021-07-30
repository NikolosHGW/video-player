import './VideoContainer.css';

export default function VideoContainer() {
  return (
    <div className='VideoContainer'>
      <video className='VideoContainer__video' controls>
        <source src={'custom-protocol://D:\\dev\\video.mp4'} type="video/mp4" />
      </video>
    </div>
  );
}
