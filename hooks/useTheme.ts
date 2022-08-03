import { Theme } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { darkTheme } from '../themes/darkTheme';
import { parseTheme } from '../utils/parseTheme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const [appTheme, setAppTheme] = useState('dark');

  const applyTheme = (stringTheme?: string) => {
    const { theme: parsedTheme, appTheme: parsedAppTheme } = parseTheme(stringTheme);

    setTheme(parsedTheme);
    setAppTheme(parsedAppTheme);
  };

  useEffect(() => {
    const cookieTheme = Cookies.get('theme');
    applyTheme(cookieTheme);
  }, []);

  const changeTheme = (newTheme: string) => {
    Cookies.set('theme', newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return {
    theme,
    appTheme,
    changeTheme,
  };
};
