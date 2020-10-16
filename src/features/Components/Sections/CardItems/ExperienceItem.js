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
  color: {
    brand: '#fc6f20',
  },
  card: {
    elevation: 'none',
    background: 'light-2',
    brand: '#fc6f20',
    light: '#f8f8ff',
    dark: '#21242c',
    transparent: '#ffffff00',
    footer: {
      pad: 'medium',
    },
  },
  
};

const ExperienceItem = (props) => {
  return (
    <Grommet  theme={theme}>
        <Card height="small" width="medium" margin="medium" background="light-1">
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium">Body</CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-2">   
            </CardFooter>
        </Card>
    </Grommet>
  );
};

export default ExperienceItem;