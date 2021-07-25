import './TopBar.css';
import triangle from '../../images/poly2.min.svg';
import circle from '../../images/circle.min.svg';
import React from 'react';

const ipcRenderer = window.require('electron').ipcRenderer;

export default function TopBar() {
  const [isMaximized, setIsMaximaized] = React.useState(false);

  function handleMinimize() {
    ipcRenderer.invoke('minimize-event');
  }

  function handleMaximize() {
    ipcRenderer.invoke('maximize-event');
    setIsMaximaized(prev => !prev);
  }

  function handleUnmaximize() {
    ipcRenderer.invoke('unmaximize-event');
    setIsMaximaized(prev => !prev);
  }

  function handleClose() {
    ipcRenderer.invoke('close-event');
  }

  return (
    <div className='TopBar'>
      <div className='TopBar__left'>
        <img className='TopBar__triangle' src={triangle} alt='треугольник' />
        <img className='TopBar__circle' src={circle} alt='круг' />
        <button className='TopBar__button-file'>File</button>
      </div>
      <div className='TopBar__right'>
        <button onClick={handleMinimize} className='TopBar__button TopBar__button_min' aria-label='развернуть'></button>
        {isMaximized ? (
          <button onClick={handleUnmaximize} className='TopBar__button TopBar__button_back-expand' aria-label='вернуть'></button>
        ) : (
          <button onClick={handleMaximize} className='TopBar__button TopBar__button_expand' aria-label='развернуть'></button>
        )}
        <button onClick={handleClose} className='TopBar__button TopBar__button_close' aria-label='закрыть'></button>
      </div>
    </div>
  );
}
