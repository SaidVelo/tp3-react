import React from 'react';
import { DownloadOption } from 'grommet-icons';

import { Box, Image, Paragraph, Heading, Button } from 'grommet';


const Brief = () => (
  <Box fill="horizontal" direction="column" pad={{"bottom": "xlarge"}} id="brief">
    <Box
      fill="horizontal"
      direction="row-responsive"
      justify="center"
      align="center"
      pad="small"
    >
      <Box width="80%" justify="center" align="center" alignSelf="center">
        <Image
          height="auto"
          fill="horizontal"
          justify="center"
          align="center"
          fit="cover"
          src="http://localhost:3000/assets/man-sitting.jpg"
        />
      </Box>
      <Box
        direction="column"
        justify="center"
        align="center"
        pad="small"
        background="transparent"
        gap="medium"
      >
        <Heading margin="none" size="small">Dévelopeur web fullstack en formation</Heading>
        <Paragraph margin="none">
        Actuellement en mastère "Expert Developpement Web", je suis à la recherche active d'un contrat en alternance dans le développement web.
  Mes expériences passées m'ont appris rigueur et sens de l'optimisation. Je me remets constamment en question dans un souci d’amélioration et j’ai une bonne capacité d’adaptation.
        </Paragraph>
        <Button 
          primary 
          label="Télécharger mon CV" 
          href="http://localhost:3000/assets/cv_said_velo.pdf"
          target="_blank"
          icon={<DownloadOption />}
          color="brand"
        />
      </Box>
    </Box>
    <Box
      fill="horizontal"
      direction="row-responsive"
      justify="center"
      align="center"
      pad="small"
    >
      <Box></Box>
    </Box>
  </Box>
);

export default Brief;