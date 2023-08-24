import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './contexts/theme';
import ToggleBtn from './components/ToggleBtn/toggleBtn';

function App() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div className={`${themeName} app`}>
      <div className="card">
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <ToggleBtn />
        </div>
        <h1>Toggle Theme App</h1>
        <h4>Dark Mode is {themeName === 'dark' ? 'On' : 'Off'}</h4>
      </div>
    </div>
  );
}

export default App;
