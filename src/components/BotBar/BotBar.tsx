import { FC } from 'react';
import ControllBar from '../ControllBar/ControllBar';
import ProgressBar from '../ProgressBar/ProgressBar';
import './BotBar.css';

interface BotBarProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export const BotBar: FC<BotBarProps> = ({ videoRef }) => {
  function playPauseMedia(setIsPaused: (bool: boolean) => void) {
    if(videoRef?.current?.paused) {
      videoRef?.current?.play();
      setIsPaused(true);
    } else {
      videoRef?.current?.pause();
      setIsPaused(false);
    }
  }

  return (
    <div className='BotBar'>
      <ControllBar
        playPauseMedia={playPauseMedia}
      />
      <ProgressBar />
      <div className='BotBar__time'>
        <span className='BotBar__timing'>0:48:17</span>
        <span className='BotBar__timing'>1:13:24</span>
      </div>
    </div>
  );
};
