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
  Paragraph
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
    card: {
      elevation: 'none',
      footer: {
        pad: 'medium',
      },
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
        icon={<Icon color="brand" size="medium" />}
        {...rest}
      />
    );
  };
  return (
    <Grommet  theme={theme}>
      <Box>
        <Card elevation="large" width="medium" background={props.background} alignSelf="center" alignContent="center">
          <CardBody width="large" height="small" >
            <Image
              fill="horizontal"
              src={props.image}
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{"top": "large"}, {"bottom": "none"}} alignSelf="center" >
              {props.title}
            </Heading>
          </Box>
          <CardFooter justify="center" pad={{"top": "none"}, {"bottom": "small"}} fill="horizontal">
            <ExpandButton onClick={() => setOpen(!open)} />
          </CardFooter>
          <Collapsible fill="horizontal" width="100%" open={open}>
            {props.template === "skill" ? (
            <List margin={{"bottom": "large"}}
              data={props.list}
              itemProps={{"width": "100%"}}
              color="light"
            />) : (
              <Box>
                <Paragraph>
                  {props.localisation + ' - ' + props.date}
                </Paragraph>
                <List margin={{"bottom": "large"}}
                  data={props.list}
                  itemProps={{"width": "100%"}}
                  color="light"
                />
              </Box>
              
            )}
            
          </Collapsible>
        </Card>
      </Box>
    </Grommet>
  );
};

storiesOf('Card', module).add('Rich footer', () => <CardItems />);

export default CardItems;