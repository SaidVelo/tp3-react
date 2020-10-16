import React from 'react';

import { Grommet, Box, Stack, Diagram } from 'grommet';
import ExperienceItem from './CardItems/ExperienceItem';

const Formations = () => (
    <Box fill="horizontal" pad="large" id="formations">
        <Stack guidingChild={1}>
            <Diagram
                connections={[
                    {
                    fromTarget: '1',
                    toTarget: '2',
                    thickness: 'xsmall',
                    color: 'accent-2',
                    },
                    {
                    fromTarget: '1',
                    toTarget: '4',
                    thickness: 'xsmall',
                    color: 'accent-2',
                    type: 'rectilinear',
                    },
                ]}
                width="xlarge"
            />
            <Box>
            <Box direction="row">
                <Box id="1" margin="small" pad="medium">
                    <ExperienceItem></ExperienceItem>
                </Box>
                <Box id="1" margin="small" pad="medium">
                    <ExperienceItem></ExperienceItem>
                </Box>
            </Box>
            <Box direction="row">
                <Box id="3" margin="small" pad="medium" background="light-4" />
                <Box id="4" margin="small" pad="medium" background="light-4" />
            </Box>
            </Box>
        </Stack>
    </Box>
);

export default Formations;
