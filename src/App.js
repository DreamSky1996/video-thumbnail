import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './contexts/theme';
import Header from './components/Hearder/Header';
import Container from './components/Container/Container';
import videos from './data/videos.json';
import VideoPreview from './components/VideoPreview/VideoPreview';

function App() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div className={`${themeName} app`}>
      <Header />
      <Container>
        <ul className="videos">
          {videos.map((video) => {
            return (
              <li key={video.id}>
                <VideoPreview video={video} />
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default App;
