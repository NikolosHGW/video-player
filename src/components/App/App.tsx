import BotBar from '../BotBar/BotBar';
import TopBar from '../TopBar/TopBar';
import VideoContainer from '../VideoContainer/VideoContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <VideoContainer />
      <BotBar />
    </div>
  );
}

export default App;
