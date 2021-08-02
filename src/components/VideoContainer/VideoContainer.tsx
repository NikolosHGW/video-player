import { useTypeSelector } from '../../redux/hooks/useTypeSelector';
import './VideoContainer.css';

export default function VideoContainer() {
  const { videoUrl, videoType } = useTypeSelector(state => state.video);

  return (
    <div className='VideoContainer'>
      {videoUrl !== '' && (
        <video className='VideoContainer__video' controls>
          <source src={`custom-protocol://${videoUrl}`} type={`video/${videoType}`} />
        </video>
      )}
    </div>
  );
}
