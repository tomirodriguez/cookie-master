import NextLink from 'next/link';
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Box, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {};

export const Navbar: FC<Props> = ({}) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="secondary">
          <MenuOutlined />
        </IconButton>
        <Box display={'flex'} justifyContent={'space-between'} width="100%">
          <NextLink href={'/'} passHref>
            <Link>
              <Typography variant="h6" color={'white'}>
                Cookie Master
              </Typography>
            </Link>
          </NextLink>
          <NextLink href={'/theme-changer'} passHref>
            <Link>
              <Typography variant="h6" color={'white'}>
                Change Theme
              </Typography>
            </Link>
          </NextLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
