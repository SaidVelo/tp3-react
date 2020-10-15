import React from "react";
import { Box, Text, Header, Button, Menu } from 'grommet';

const Home = () => {
    return (
        <Header background="brand">
            <Button />
            <Menu label="account" items={[{ label: 'logout' }]} />
        </Header>
    )
};

export default Home;