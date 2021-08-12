import React, { FC } from 'react';
import { useTypeSelector } from '../../redux/hooks/useTypeSelector';
import './VideoContainer.css';

interface VideoContainerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export const VideoContainer: FC<VideoContainerProps> = ({ videoRef }) => {
  const { videoUrl, videoType } = useTypeSelector(state => state.video);

  React.useEffect(() => {
    videoRef?.current?.load();
  }, [videoRef, videoUrl]);

  return (
    <div className='VideoContainer'>
      {videoUrl !== '' && (
        <video ref={videoRef} className='VideoContainer__video'>
          <source src={`custom-protocol://${videoUrl}`} type={`video/${videoType}`} />
        </video>
      )}
    </div>
  );
};
