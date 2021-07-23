import './ControllBar.css';

export default function ControllBar() {
  return (
    <div className='ControllBar'>
      <button className='ControllBar__button ControllBar__button_play' aria-label='воспроизвести'></button>
      <button className='ControllBar__button ControllBar__button_stop' aria-label='остановить'></button>
      <button className='ControllBar__button ControllBar__button_prev' aria-label='предыдущий файл'></button>
      <button className='ControllBar__button ControllBar__button_back' aria-label='перемотать назад'></button>
      <button className='ControllBar__button ControllBar__button_forward' aria-label='перемотать вперёд'></button>
      <button className='ControllBar__button ControllBar__button_next' aria-label='следующий файл'></button>
    </div>
  );
}
