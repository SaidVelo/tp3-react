import React from 'react';

import { Grommet, Box, ResponsiveContext } from 'grommet';

import Brief from './sections/Brief';
import Skills from './sections/Skills';
import Formations from './sections/Formations';


const Home = () => (
    <Box>
        <Brief></Brief>
        <Skills></Skills>
        <Formations></Formations>
    </Box>
);

export default Home;