import React from 'react';

import { Grommet, Box, Stack, Diagram, ResponsiveContext } from 'grommet';
import CardItems from './cards/CardItems';

const theme = {
    global: {
      colors: {
        "brand": '#fc6f20',
        "light": '#f8f8ff',
        "dark": '#21242c',
        "transparent": '#ffffff00'
      }
    },
  };

const Formations = () => {
    const size = React.useContext(ResponsiveContext);
    return (
        <>
            <Box fill="horizontal" pad="large" id="formations">
                <Stack guidingChild={1}>
                    <Diagram
                        connections={[
                            {
                            fromTarget: '1',
                            toTarget: '2',
                            thickness: 'xsmall',
                            color: 'accent-4',
                            },
                            {
                            fromTarget: '2',
                            toTarget: '3',
                            thickness: 'xsmall',
                            color: 'accent-4',
                            type: 'rectilinear',
                            },
                            {
                            fromTarget: '3',
                            toTarget: '4',
                            thickness: 'xsmall',
                            color: 'accent-4',
                            type: 'rectilinear',
                            },
                            {
                            fromTarget: '4',
                            toTarget: '5',
                            thickness: 'xsmall',
                            color: 'accent-4',
                            type: 'rectilinear',
                            },
                            {
                            fromTarget: '5',
                            toTarget: '6',
                            thickness: 'xsmall',
                            color: 'accent-4',
                            type: 'rectilinear',
                            },
                        ]}
                    />
                        {size === "small" ? (
                            <Box direction="column">
                                <Box id="1" margin="small" pad="medium">
                                <CardItems template="formation" background="dark" color="light" title="M1 Expert en développement web" image='http://localhost:3000/assets/ynovLogo_400x400.png' localisation="Ynov Toulouse" date="Depuis Août 2019"></CardItems>
                                </Box>
                                <Box id="2" margin="small" pad="medium">
                                <CardItems template="formation" background="dark" color="light" title="Concepteur/Développeur Applications Web et Mobile" image='http://localhost:3000/assets/adrar.jpg' localisation="ADRAR Digital Academy - Ramonville" date="2018 à 2019"></CardItems>
                                </Box>
                                <Box id="3" margin="small" pad="medium">
                                <CardItems template="formation" background="dark" color="light" title="Accompagnement à la définition d’un projet professionnel (P.O.I.)" image='http://localhost:3000/assets/ort.png' localisation="Centre de formation O.R.T - Colomiers" date="De nov. 2017 à avril 2018"></CardItems>
                                </Box>
                                <Box id="4" margin="small" pad="medium">
                                <CardItems template="formation" background="dark" color="light" title="L.E.A. (Anglais-Espagnol)" image='http://localhost:3000/assets/fac-mirail.jpeg' localisation="Université Jean Jaurés - Toulouse" date="De 2016 à 2017"></CardItems>
                                </Box>
                                <Box id="5" margin="small" pad="medium">
                                <CardItems template="formation" background="dark" color="light" title="Médecine, Biologie" image='http://localhost:3000/assets/paul-sabatier.png' localisation="Université Paul Sabatier - Toulouse" date="De 2012 à 202015"></CardItems>
                                </Box>
                                <Box id="6" margin="small" pad="medium">
                                <CardItems template="formation" background="dark" color="light" title="Baccalauréat Scientifique" image='http://localhost:3000/assets/victor-hugo.png' localisation="Lycée Victor Hugo" date="En 2012"></CardItems>
                                </Box>
                            </Box>
                        ) : size === "medium" || "large" ? (
                            <Box>
                                <Box direction="row">
                                    <Box id="1" margin="medium" pad="medium">
                                        <CardItems template="formation" background="dark" color="light" title="M1 Expert en développement web - Ynov" image='http://localhost:3000/assets/ynovLogo_400x400.png' localisation="Ynov Toulouse" date="Depuis Août 2019"></CardItems>
                                    </Box>
                                    <Box id="2" margin="medium" pad="medium">
                                        <CardItems template="formation" background="dark" color="light" title="M1 Expert en développement web - Ynov" image='http://localhost:3000/assets/ynovLogo_400x400.png' localisation="Ynov Toulouse" date="Depuis Août 2019"></CardItems>
                                    </Box>
                                </Box>
                                <Box direction="row">
                                    <Box id="4" margin="medium" pad="medium">
                                        <CardItems template="formation" background="dark" color="light" title="M1 Expert en développement web - Ynov" image='http://localhost:3000/assets/ynovLogo_400x400.png' localisation="Ynov Toulouse" date="Depuis Août 2019"></CardItems>
                                    </Box>
                                    <Box id="3" margin="medium" pad="medium">
                                        <CardItems template="formation" background="dark" color="light" title="M1 Expert en développement web - Ynov" image='http://localhost:3000/assets/ynovLogo_400x400.png' localisation="Ynov Toulouse" date="Depuis Août 2019"></CardItems>
                                    </Box>
                                </Box>
                                <Box direction="row">
                                    <Box id="5" margin="small" pad="medium">
                                        <CardItems template="formation" background="dark" color="light" title="M1 Expert en développement web - Ynov" image='http://localhost:3000/assets/ynovLogo_400x400.png' localisation="Ynov Toulouse" date="Depuis Août 2019"></CardItems>
                                    </Box>
                                    <Box id="6" margin="small" pad="medium">
                                        <CardItems template="formation" background="dark" color="light" title="M1 Expert en développement web - Ynov" image='http://localhost:3000/assets/ynovLogo_400x400.png' localisation="Ynov Toulouse" date="Depuis Août 2019"></CardItems>
                                    </Box>
                                </Box>
                            </Box>
                        ) : (
                            <Box>Hello</Box>
                        )}
                </Stack>
            </Box>
        </>
    )
}

export default Formations;
