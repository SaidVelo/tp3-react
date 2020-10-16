import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import CardItems from './CardItems/CardItems';

const Skills = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <>
      {size === "small" ? (
        <Box fill="horizontal" alignSelf="center" alignContent="center" direction="column" background="dark" gap="large" pad="xlarge" id="skills">
          <CardItems title="Frontend" image='http://localhost:3000/assets/woman.jpg' list={['Javascript', 'HTML', 'CSS']}></CardItems>
          <CardItems title="Backend" image='http://localhost:3000/assets/man-sitting-back.jpg' list={['Node.js', 'MongoDB', 'Express']}></CardItems>
          <CardItems title="Conception" image='http://localhost:3000/assets/man-standing.jpg' list={['Node.js', 'MongoDB', 'Express']}></CardItems>
          <CardItems title="Soft Skills" image='http://localhost:3000/assets/brief-image.jpg' list={['Node.js', 'MongoDB', 'Express']}></CardItems>
        </Box>
      ) : size === "medium" || "large" ? (
        <Box>
          <Box fill="horizontal" alignSelf="center" justify="around" direction="row" background="dark" gap="large" pad="xlarge" id="skills">
            <CardItems width title="Frontend" image='http://localhost:3000/assets/woman.jpg' list={['Javascript', 'HTML', 'CSS']}></CardItems>
            <CardItems title="Backend" image='http://localhost:3000/assets/man-sitting-back.jpg' list={['Node.js', 'MongoDB', 'Express']}></CardItems>
          </Box>
          <Box fill="horizontal" alignSelf="center" justify="around" direction="row" background="dark" gap="large" pad="xlarge" id="skills">
            <CardItems title="Conception" image='http://localhost:3000/assets/man-standing.jpg' list={['Node.js', 'MongoDB', 'Express']}></CardItems>
            <CardItems title="Soft Skills" image='http://localhost:3000/assets/brief-image.jpg' list={['Node.js', 'MongoDB', 'Express']}></CardItems>
          </Box>
        </Box>
      ) : (
        <Box fill="horizontal" alignSelf="center" justify="between" direction="row" background="dark" gap="large" pad="xlarge" id="skills">
          <CardItems width title="Frontend" image='http://localhost:3000/assets/woman.jpg' list={['Javascript', 'HTML', 'CSS']}></CardItems>
          <CardItems title="Backend" image='http://localhost:3000/assets/man-sitting-back.jpg' list={['Node.js', 'MongoDB', 'Express']}></CardItems>
          <CardItems title="Conception" image='http://localhost:3000/assets/man-standing.jpg' list={['Node.js', 'MongoDB', 'Express']}></CardItems>
          <CardItems title="Soft Skills" image='http://localhost:3000/assets/brief-image.jpg' list={['Node.js', 'MongoDB', 'Express']}></CardItems>
        </Box>
      )}
    </>
  );
}

export default Skills;