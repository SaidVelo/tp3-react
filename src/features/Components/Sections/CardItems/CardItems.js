import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
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

const CardItems = (props) => {
  const [open, setOpen] = React.useState(false);

  const ExpandButton = ({ ...rest }) => {
    const Icon = open ? FormUp : FormDown;
    return (
      <Button
        // pad="none"
        hoverIndicator="light-4"
        icon={<Icon color="#fc6f20" size="medium" />}
        {...rest}
      />
    );
  };
  return (
    <Grommet  theme={theme}>
      <Box >
        <Card elevation="large" width="medium" background="light-2" alignSelf="center" alignContent="center">
          <CardBody width="large" height="small" background="light">
            <Image
              fill="horizontal"
              src={props.image}
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="2" margin={{"top": "large"}, {"bottom": "none"}} color="dark" alignSelf="center" >
              {props.title}
            </Heading>
          </Box>
          <CardFooter justify="center" pad={{"top": "none"}, {"bottom": "small"}} fill="horizontal">
            <ExpandButton onClick={() => setOpen(!open)} />
          </CardFooter>
          <Collapsible fill="horizontal" width="100%" open={open}>
          <List margin={{"bottom": "large"}}
            // primaryKey="name"
            // secondaryKey="percent"
            // width="100%"
            // fill="horizontal"
            data={props.list}
            itemProps={{"width": "100%"}}
          />
          </Collapsible>
        </Card>
      </Box>
    </Grommet>
  );
};

storiesOf('Card', module).add('Rich footer', () => <CardItems />);

export default CardItems;