import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './contexts/theme';
import Header from './components/Hearder/Header';
import Container from './components/Container/Container';
import videos from './data/videos.json';
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
                <div className="card">
                  <video controls width="100%" src={`/videos/${video.id}.${video.format}`} />
                  <h3>{video.title}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default App;
