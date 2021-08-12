import React from 'react';
import { BotBar } from '../BotBar/BotBar';
import TopBar from '../TopBar/TopBar';
import { VideoContainer } from '../VideoContainer/VideoContainer';
import './App.css';

function App() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div className="App">
      <TopBar />
      <VideoContainer videoRef={videoRef} />
      <BotBar videoRef={videoRef} />
    </div>
  );
}

export default App;
