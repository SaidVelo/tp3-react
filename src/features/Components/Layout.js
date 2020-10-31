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

import { StickyContainer, Sticky } from 'react-sticky';

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
  <Router>
    <Grommet theme={theme}>
      <StickyContainer>
        <Sticky distanceFromTop={0}>
          {({
            style,

            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
              <Header background="light" pad="medium" height="xsmall" position="fixed">
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
                              href: '/#brief',
                            },
                            {
                              label: <Box pad="small">Skills</Box>,
                              href: '/#skills',
                            },
                            {
                              label: <Box pad="small">Formation</Box>,
                              href: '/#formations',
                            },
                            {
                              label: <Box pad="small">Work experiences</Box>,
                              href: '/#work-eperiences',
                            },
                            {
                              label: <Box pad="small">Portfolio</Box>,
                              href: '/portfolio',
                            },
                          ]}
                        />
                      </Box>
                    ) : (
                        <Box justify="end" direction="row" gap="medium" >
                          <Anchor
                            href="/#brief"
                            label="Brief"
                          />
                          <Anchor
                            href="/#skills"
                            label="Skills"
                          />
                          <Anchor
                            href="/#formations"
                            label="Formations"
                          />
                          <Anchor
                            href="/#work-experiences"
                            label="Work experiences"
                          />
                          <Anchor
                            href="/portfolio"
                            label="Portfolio"
                          />
                        </Box>
                      )
                  }
                </ResponsiveContext.Consumer>
              </Header>
            )}
        </Sticky>
      </StickyContainer>
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Grommet>
  </Router>
);

// storiesOf('Header', module).add('Layout', () => <Layout />);

export default Layout;