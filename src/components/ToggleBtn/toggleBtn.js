import { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { ThemeContext } from '../../contexts/theme';
import './toggleBtn.css';

const ToggleBtn = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  return (
    <button type="button" onClick={toggleTheme} className="btn btn--icon" aria-label="toggle theme">
      {themeName === 'dark' ? <LightModeIcon /> : <ModeNightIcon />}
    </button>
  );
};

export default ToggleBtn;
