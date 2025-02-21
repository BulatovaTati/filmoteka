import { useTheme } from './ThemeProvider';
import s from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`material-icons ${s.btn_icons}`}>
      {isDarkMode ? 'light_mode' : 'dark_mode'}
    </button>
  );
};

export default ThemeSwitcher;
