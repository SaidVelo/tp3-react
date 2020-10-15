import React from 'react';
import { DownloadOption } from 'grommet-icons';

import { Box, Image, Paragraph, Heading, Button } from 'grommet';

import CardItems from './CardItems/CardItems';



const Skills = () => (
  <Box fill="horizontal" direction="column" id="brief" background="dark" id="skills">
    <CardItems></CardItems>
  </Box>
);

export default Skills;