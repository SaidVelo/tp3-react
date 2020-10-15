import React from 'react';
import { Grommet, Box, Text } from 'grommet';

import Home from './features/Components/Home';
import { Counter } from './features/counter/Counter';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Home></Home>
    </Grommet>
  );
}

export default App;
