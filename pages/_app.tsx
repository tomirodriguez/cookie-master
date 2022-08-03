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

  // To change the theme without refresh, there should be a context wrapping the app to control it.
  // Out of scope for this app

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
