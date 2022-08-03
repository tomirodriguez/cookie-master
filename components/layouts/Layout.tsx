import { Container } from '@mui/system';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cookie Master</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};
