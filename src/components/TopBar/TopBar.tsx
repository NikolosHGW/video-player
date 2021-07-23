import './TopBar.css';
import triangle from '../../images/poly2.min.svg';
import circle from '../../images/circle.min.svg';

export default function TopBar() {
  return (
    <div className='TopBar'>
      <div className='TopBar__left'>
        <img className='TopBar__triangle' src={triangle} alt='треугольник' />
        <img className='TopBar__circle' src={circle} alt='круг' />
        <button className='TopBar__button'>File</button>
      </div>
      <div className='TopBar__right'>
        <button className='TopBar__min-button' aria-label='развернуть'></button>
        <button className='TopBar__expand-button' aria-label='развернуть'></button>
        <button className='TopBar__close-button' aria-label='закрыть'></button>
      </div>
    </div>
  );
}
