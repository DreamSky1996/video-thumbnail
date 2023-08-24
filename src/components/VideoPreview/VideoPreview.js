import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, AdvancedVideo, lazyload } from '@cloudinary/react';
import './VideoPreview.css';

const VideoPreview = ({ video }) => {
  const playerRef = useRef();
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'djcmywfzy'
    }
  });
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
          plugins={[lazyload()]}
        />
      </div>
      <h3>{video.title}</h3>
    </div>
  );
};

VideoPreview.propTypes = {
  video: PropTypes.node.isRequired
};
export default VideoPreview;
