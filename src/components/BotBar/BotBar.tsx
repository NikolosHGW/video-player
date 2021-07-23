import ControllBar from '../ControllBar/ControllBar';
import ProgressBar from '../ProgressBar/ProgressBar';
import './BotBar.css';

export default function BotBar() {
  return (
    <div className='BotBar'>
      <ControllBar />
      <ProgressBar />
      <div className='BotBar__time'>
        <span className='BotBar__timing'>0:48:17</span>
        <span className='BotBar__timing'>1:13:24</span>
      </div>
    </div>
  );
}
