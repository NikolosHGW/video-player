import React from 'react';
import { useTypeSelector } from '../../redux/hooks/useTypeSelector';
import './VideoContainer.css';

export default function VideoContainer() {
  const { videoUrl, videoType } = useTypeSelector(state => state.video);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    videoRef?.current?.load();
  });

  return (
    <div className='VideoContainer'>
      {videoUrl !== '' && (
        <video ref={videoRef} className='VideoContainer__video' controls>
          <source src={`custom-protocol://${videoUrl}`} type={`video/${videoType}`} />
        </video>
      )}
    </div>
  );
}
