import React from 'react';
import { Header, Grid } from "semantic-ui-react";

export default function Home() {
    return (
        <Grid.Column textAlign="center">
            <Header as="h1">Welcome!</Header>
            
            <p>Please use the menu to start.</p>
        </Grid.Column>
    );
}