import './TopBar.css';
import triangle from '../../images/poly2.min.svg';
import circle from '../../images/circle.min.svg';
import React from 'react';

const ipcRenderer = window.require('electron').ipcRenderer;

export default function TopBar() {
  const [isMaximized, setIsMaximaized] = React.useState(false);
  const [menuIsOpened, setMenuIsIpened] = React.useState(false);

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

  function handleMenu() {
    setMenuIsIpened(prev => !prev);
  }

  return (
    <div className='TopBar'>
      <div className='TopBar__left'>
        <img className='TopBar__triangle' src={triangle} alt='треугольник' />
        <img className='TopBar__circle' src={circle} alt='круг' />
        <button onClick={handleMenu} className='TopBar__button-file'>File</button>
        <ul onMouseLeave={handleMenu} className={`TopBar__list ${menuIsOpened && 'TopBar__list_opened'}`}>
          <li className='TopBar__line'>
            <button className='TopBar__list-button'>Open File</button>
          </li>
          <li className='TopBar__line'>
            <button className='TopBar__list-button'>Open Folder</button>
          </li>
          <li className='TopBar__line'>
            <button className='TopBar__list-button'>Exit</button>
          </li>
        </ul>
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
