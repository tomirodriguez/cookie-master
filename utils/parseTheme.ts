import { Theme } from '@mui/material';
import { customTheme, darkTheme, lightTheme } from '../themes';
import { AppTheme } from '../types/index';

export const parseTheme = (stringTheme: string = 'dark'): { theme: Theme; appTheme: AppTheme } => {
  switch (stringTheme) {
    case 'light':
      return { theme: lightTheme, appTheme: 'light' };
    case 'custom':
      return { theme: customTheme, appTheme: 'custom' };
    default:
      return { theme: darkTheme, appTheme: 'dark' };
  }
};
