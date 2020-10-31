import React from 'react';

import { Box } from 'grommet';

import Slider from './slider/Slider';

const imagePath = 'http://localhost:3000/assets/portfolio/';

const Portfolio = () => (
    <Box direction="column" justify="center" align="center" >
        <Slider
            background="light"
            title="CV en ligne"
            href="https://www.saidvelo.com"
            images={[imagePath + 'screen_cv_en_ligne_1.png', imagePath + 'screen_cv_en_ligne_2.png', imagePath + 'screen_cv_en_ligne_3.png', imagePath + 'screen_cv_en_ligne_4.png']}
        />
        <Slider
            background="dark"
            title="Boutique en ligne de thés"
            href="https://www.namuje.com"
            images={[imagePath + 'screenshot_namuje_1.png', imagePath + 'screenshot_namuje_2.png', imagePath + 'screenshot_namuje_3.png']}
        />
        <Slider
            background="light"
            title="Site de gestion associative"
            href="https://reseausocialsolidairedeblagnac.fr/"
            images={[imagePath + 'screenshot_reseausocialsolidairedeblagnac_1.png', imagePath + 'screenshot_reseausocialsolidairedeblagnac_2.png', imagePath + 'screenshot_reseausocialsolidairedeblagnac_3.png']} /
        >
    </Box>
);

export default Portfolio;