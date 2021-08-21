import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../redux/hooks/useTypeSelector';
import ProgressBar from '../ProgressBar/ProgressBar';
import './BotBar.css';

interface BotBarProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export const BotBar: FC<BotBarProps> = ({ videoRef }) => {
  const [isBlocked, setIsBlocked] = React.useState<boolean>(false);
  const [isPlayed, setIsPlayed] = React.useState<boolean>(false);
  const [isForwardWind, setIsForwardWind] = React.useState<boolean>(false);
  const [isBackwardWind, setIsBackwardWind] = React.useState<boolean>(false);
  const [intervalFwd, setIntervalFwd] = React.useState<NodeJS.Timeout | null>(null);
  const [intervalRwd, setIntervalRwd] = React.useState<NodeJS.Timeout | null>(null);
  const { videos, currentIndex } = useTypeSelector(state => state.video);
  const dispatch = useDispatch();
  const { videoUrl } = videos[currentIndex] ?
   videos[currentIndex] : { videoUrl: undefined };

  function resetBackwardInterval() {
    clearInterval(intervalRwd!);
    setIsBackwardWind(false);
  }

  function resetForkwardInterval() {
    clearInterval(intervalFwd!);
    setIsForwardWind(false);
  }

  function playPauseMedia() {
    resetBackwardInterval();
    resetForkwardInterval();
    if(videoRef?.current?.paused) {
      videoRef?.current?.play();
      setIsPlayed(true);
    } else {
      videoRef?.current?.pause();
      setIsPlayed(false);
    }
  }

  function stopMedia() {
    videoRef?.current?.pause();
    if (videoRef?.current?.currentTime) {
      videoRef!.current!.currentTime = 0;
    };
    setIsPlayed(false);
    clearInterval(intervalFwd!);
    clearInterval(intervalRwd!);
    setIsForwardWind(false);
    setIsBackwardWind(false);
  }

  function mediaBackward() {
    clearInterval(intervalFwd!);
    setIsForwardWind(false);

    if (isBackwardWind) {
      setIsBackwardWind(false);
      clearInterval(intervalRwd!);
      videoRef?.current?.play();
      setIsPlayed(true);
    } else {
      setIsBackwardWind(true);
      videoRef?.current?.pause();
      setIsPlayed(false);
      setIntervalRwd(setInterval(windBackward, 200));
    }
  }

  function windBackward() {
    if(videoRef?.current!.currentTime <= 1) {
      setIsBackwardWind(false);
      clearInterval(intervalRwd!);
      stopMedia();
    } else {
      videoRef!.current!.currentTime -= 1;
    }
  }

  function mediaForward() {
    clearInterval(intervalRwd!);
    setIsBackwardWind(false);

    if (isForwardWind) {
      setIsForwardWind(false);
      clearInterval(intervalFwd!);
      videoRef?.current?.play();
      setIsPlayed(true);
    } else {
      setIsForwardWind(true);
      videoRef?.current?.pause();
      setIsPlayed(false);
      setIntervalFwd(setInterval(windForward, 200));
    }
  }

  function windForward() {
    if(videoRef?.current!.currentTime >= videoRef?.current!.duration - 1) {
      setIsForwardWind(false);
      clearInterval(intervalFwd!);
      stopMedia();
    } else {
      videoRef!.current!.currentTime += 1;
    }
  }

  function prevVideo() {
    stopMedia();
    dispatch({
      type: 'PREV_VIDEO',
    });
  }

  function nextVideo() {
    stopMedia();
    dispatch({
      type: 'NEXT_VIDEO',
    });
  }

  React.useEffect(() => {
    if (!videoUrl) {
      setIsBlocked(true);
    } else {
      setIsBlocked(false);
    }
  }, [videoUrl]);

  return (
    <div className='BotBar'>
      <div className='BotBar__controllBar'>
        <button
          className={`BotBar__controllBar-button
            ${isBlocked && 'BotBar__controllBar-button_disabled'} ${isPlayed ?
            'BotBar__controllBar-button_pause'
            :
            'BotBar__controllBar-button_play'}`}
          aria-label='воспроизвести'
          onClick={playPauseMedia}
          disabled={isBlocked}
        ></button>
        <button
          className={`BotBar__controllBar-button
            ${isBlocked && 'BotBar__controllBar-button_disabled'}
            BotBar__controllBar-button_stop`}
          aria-label='остановить'
          onClick={stopMedia}
          disabled={isBlocked}
        ></button>
        <button
          className={`BotBar__controllBar-button
            ${isBlocked && 'BotBar__controllBar-button_disabled'}
            BotBar__controllBar-button_prev`}
          aria-label='предыдущий файл'
          onClick={prevVideo}
        ></button>
        <button
          className={`BotBar__controllBar-button ${isBlocked && 'BotBar__controllBar-button_disabled'} ${isBackwardWind ?
            'BotBar__controllBar-button_back_active'
            :
            'BotBar__controllBar-button_back'}`}
          aria-label='перемотать назад'
          onClick={mediaBackward}
          disabled={isBlocked}
        ></button>
        <button
          className={`BotBar__controllBar-button ${isBlocked && 'BotBar__controllBar-button_disabled'} ${isForwardWind ?
            'BotBar__controllBar-button_forward_active'
            :
            'BotBar__controllBar-button_forward'}`}
          aria-label='перемотать вперёд'
          onClick={mediaForward}
          disabled={isBlocked}
        ></button>
        <button
          className={`BotBar__controllBar-button
            ${isBlocked && 'BotBar__controllBar-button_disabled'}
            BotBar__controllBar-button_next`}
          aria-label='следующий файл'
          onClick={nextVideo}
        ></button>
      </div>
      <ProgressBar />
      <div className='BotBar__time'>
        <span className='BotBar__timing'>0:48:17</span>
        <span className='BotBar__timing'>1:13:24</span>
      </div>
    </div>
  );
};
