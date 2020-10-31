import React from 'react';
// import { storiesOf } from '@storybook/react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';

import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { Bike, Menu as MenuIcon } from 'grommet-icons';

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

const Layout = () => (

  
  <Grommet theme={theme}>
    <Header background="transparent" pad="medium" height="xsmall">
      <Anchor
        href="#canvas"
        icon={<Bike color="brand" size='large' />}
        label="Saïd VELO"
        size="xlarge"
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
                    href: '#brief',
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
    <Home></Home>
    <Portfolio></Portfolio>
  </Grommet>
);

// storiesOf('Header', module).add('Layout', () => <Layout />);

export default Layout;