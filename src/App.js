import { useContext, useState, useEffect } from 'react';
import { Ripple } from 'react-preloaders2';
import './App.css';
import { ThemeContext } from './contexts/theme';
import Header from './components/Hearder/Header';
import Container from './components/Container/Container';
import videos from './data/videos.json';
import VideoPreview from './components/VideoPreview/VideoPreview';

function App() {
  const [{ themeName }] = useContext(ThemeContext);
  const [preloaderColor, setPreloaderColor] = useState({ 'clr-bg': '#fcfcfc', 'clr-fg': '#555' });
  useEffect(() => {
    setPreloaderColor(
      themeName === 'dark'
        ? { 'clr-bg': '#23283e', 'clr-fg': '#bdbddd' }
        : { 'clr-bg': '#fcfcfc', 'clr-fg': '#555' }
    );
  }, [themeName]);
  return (
    <>
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
      <Ripple
        background={preloaderColor['clr-bg']}
        color={preloaderColor['clr-fg']}
        animation="slide-down"
      />
    </>
  );
}

export default App;
