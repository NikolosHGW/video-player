import React, { FC } from 'react';
import { useTypeSelector } from '../../redux/hooks/useTypeSelector';
import './VideoContainer.css';

interface VideoContainerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export const VideoContainer: FC<VideoContainerProps> = ({ videoRef }) => {
  const { videos, currentIndex } = useTypeSelector(state => state.video);
  const { videoUrl, videoType } = videos[currentIndex] ?
   videos[currentIndex] : { videoUrl: undefined, videoType: undefined };

  React.useEffect(() => {
    videoRef?.current?.load();
  }, [videoRef, videos, currentIndex]);

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
