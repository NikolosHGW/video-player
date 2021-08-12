import React from 'react';
import './ControllBar.css';

interface ControllBarProps {
  playPauseMedia: (callback: (bool: boolean) => void) => void;
}

export default function ControllBar(props: ControllBarProps) {
  const { playPauseMedia } = props;
  const [isPlayed, setIsPlayed] = React.useState(false);

  return (
    <div className='ControllBar'>
      <button
        className={`ControllBar__button ${isPlayed ? 'ControllBar__button_pause' : 'ControllBar__button_play'}`}
        aria-label='воспроизвести'
        onClick={() => playPauseMedia(setIsPlayed)}
      ></button>
      <button className='ControllBar__button ControllBar__button_stop' aria-label='остановить'></button>
      <button className='ControllBar__button ControllBar__button_prev' aria-label='предыдущий файл'></button>
      <button className='ControllBar__button ControllBar__button_back' aria-label='перемотать назад'></button>
      <button className='ControllBar__button ControllBar__button_forward' aria-label='перемотать вперёд'></button>
      <button className='ControllBar__button ControllBar__button_next' aria-label='следующий файл'></button>
    </div>
  );
}
