import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next/types';
import { ChangeEvent, FC, useState } from 'react';
import { Layout } from '../components/layouts';
import { useTheme } from '../hooks';
import { AppTheme } from '../types';

type Props = {
  theme: AppTheme;
};

const ThemeChangerPage: FC<Props> = ({ theme }) => {
  const { changeTheme, appTheme } = useTheme();

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.value;
    changeTheme(newTheme);
  };

  const handleButtonClicked = async () => {
    const { data } = await axios.get('/api/hello');

    console.log(data);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={appTheme} onChange={onThemeChange}>
              <FormControlLabel value="light" control={<Radio />} label={'Light'} />
              <FormControlLabel value="dark" control={<Radio />} label={'Dark'} />
              <FormControlLabel value="custom" control={<Radio />} label={'Custom'} />
            </RadioGroup>
          </FormControl>
          <Button onClick={handleButtonClicked}>Solicitud</Button>
        </CardContent>
      </Card>
      <h1>ThemeChangerPage</h1>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'dark' } = req.cookies;

  const validThemes = ['light', 'dark', 'custom'];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'dark',
    },
  };
};

export default ThemeChangerPage;
