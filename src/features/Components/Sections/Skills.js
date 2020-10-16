import React from 'react';
import { Box } from 'grommet';

import CardItems from './CardItems/CardItems';

const Skills = () => (
  <Box fill="horizontal" direction="column" background="dark" gap="large" id="skills">
    <CardItems title="Frontend" image='http://localhost:3000/assets/woman.jpg' list={['Javascript', 'HTML', 'CSS']}></CardItems>
    {/* <CardItems title="Backend"></CardItems> */}
  </Box>
);

export default Skills;