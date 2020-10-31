import React from 'react';

import { Image, Box, Carousel, Heading, Button } from 'grommet';
import { Link } from 'grommet-icons';

const Slider = (props) => (
    <Box direction="column" justify="center" align="center" >
        <Box background={props.background} height="small" fill overflow="hidden" direction="column" justify="between" align="center" pad="medium">
            <Heading margin="medium">{props.title}</Heading>
            <Carousel fill>
                {props.images.map((image) => <Image fit="cover" src={image} />)}
            </Carousel>
            <Button color="brand" margin="small" focusIndicator="false" target="_blank"
                icon={<Link color="brand" size='medium' />}
                label="Visiter le site"
                href={props.href}
            >
            </Button>
        </Box>
    </Box>
);

export default Slider;