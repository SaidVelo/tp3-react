import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Grommet,
  Image,
  Paragraph,
} from 'grommet';

import { FormDown, FormUp, Desktop, ShareOption } from 'grommet-icons';

const theme = {
  global: {
    font: {
      family: `Comic Sans MS, -apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto`,
    },
  },
  card: {
    elevation: 'none',
    background: 'light-2',
    footer: {
      pad: 'medium',
    },
  },
};

const CardItems = () => {
  const [open, setOpen] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const ExpandButton = ({ ...rest }) => {
    const Icon = open ? FormUp : FormDown;
    return (
      <Button
        hoverIndicator="light-4"
        icon={<Icon color="brand" />}
        {...rest}
      />
    );
  };
  return (
    <Grommet theme={theme}>
      <Box pad="medium" align="start">
        <Card elevation="large" width="medium">
          <CardBody height="small">
            <Desktop></Desktop>
          </CardBody>
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              Front-End
            </Heading>
          </Box>
          <CardFooter>
            <ExpandButton onClick={() => setOpen(!open)} />
          </CardFooter>
          <Collapsible open={open}>
            <Paragraph margin="medium" color="dark-3">
              The greatest bridge builders of antiquity were the ancient Romans.
              The Romans built arch bridges and aqueducts that could stand in
              conditions that would damage or destroy earlier designs. Some
              stand today.
            </Paragraph>
          </Collapsible>
        </Card>
      </Box>
    </Grommet>
  );
};

storiesOf('Card', module).add('Rich footer', () => <CardItems />);

export default CardItems;