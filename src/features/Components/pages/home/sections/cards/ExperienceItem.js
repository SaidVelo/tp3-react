import React from 'react';

import {
  Box,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Grommet,
  Image,
  List,
} from 'grommet';

import { FormDown, FormUp } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#fc6f20',
      light: '#f8f8ff',
      dark: '#21242c',
      transparent: '#ffffff00'
    },
    font: {
      family: 'Poppins',
      size: '18px',
      height: '20px',
    },
  },
};

const ExperienceItem = (props) => {
  return (
    <Grommet  theme={theme}>
        <Card height="small" width="medium" margin="medium" background="dark">
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium">Body</CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-2">   
            </CardFooter>
        </Card>
    </Grommet>
  );
};

export default ExperienceItem;