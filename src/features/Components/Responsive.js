import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { Bike, Menu as MenuIcon } from 'grommet-icons';
import { grommet } from 'grommet/themes';

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

const Responsive = () => (
  <Grommet theme={theme}>
    <Header background="transparent" pad="medium" height="xsmall">
      <Anchor
        href="#canvas"
        icon={<Bike color="brand" size='large' />}
      />
      <ResponsiveContext.Consumer>
        {size =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: <Box pad="small">Brief</Box>,
                    href: '#presentation',
                  },
                  {
                    label: <Box pad="small">Skills</Box>,
                    href: '#skills',
                  },
                  {
                    label: <Box pad="small">Formation</Box>,
                    href: '#skills',
                  },
                  {
                    label: <Box pad="small">Work experiences</Box>,
                    href: '#skills',
                  },
                  {
                    label: <Box pad="small">Portfolio</Box>,
                    href: '#skills',
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium" >
              <Anchor 
                href="#brief" 
                label="Brief" 
              />
              <Anchor
                href="#skills"
                label="Skills"
              />
              <Anchor
                href="#formations"
                label="Formations"
              />
              <Anchor
                href="#work-experiences"
                label="Work experiences"
              />
              <Anchor
                href="#portfolio"
                label="Portfolio"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
);

storiesOf('Header', module).add('Responsive', () => <Responsive />);

export default Responsive;