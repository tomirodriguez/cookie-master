import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { useTheme } from '../hooks';
import '../styles/globals.css';
import { AppTheme } from '../types';

type Props = AppProps & {
  theme: AppTheme;
};

function MyApp({ Component, pageProps }: Props) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
