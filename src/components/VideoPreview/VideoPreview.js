import { useRef } from 'react';
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';
import cld from '../../utils/cld';
import './VideoPreview.css';

const VideoPreview = ({ video }) => {
  const playerRef = useRef();
  const onMouseOver = () => {
    playerRef.current.videoRef.current.play();
  };
  const onMouseOut = () => {
    playerRef.current.videoRef.current.pause();
  };
  return (
    <div className="card">
      <div className="card-video" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <AdvancedImage
          cldImg={cld
            .image(video.cld_id)
            .setAssetType('video')
            .delivery('q_auto')
            .format('auto:image')}
        />
        <AdvancedVideo
          ref={playerRef}
          loop
          muted
          width="100%"
          //   cldVid={cld.video(video.cld_id).delivery('q_auto').format('auto')}
          cldVid={cld
            .video(video.cld_id)
            .effect('e_preview:duration_4')
            .delivery('q_auto')
            .format('auto')}
        />
      </div>
      <h3>{video.title}</h3>
    </div>
  );
};

export default VideoPreview;
