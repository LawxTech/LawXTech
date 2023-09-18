import React from "react";
import { Typography, Card, CardActions, CssBaseline, CardContent, CardMedia, Grid, Toolbar, Container } from "@mui/material";

// import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { Button } from "../Button";
import "../.../../../App.css"

export const Intro = () => {
    return(
        <>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" color="#133167" fontWeight="bold" fontSize="md">Why join Law x Tech?</Typography>
                <Typography variant="h6" align="center" color="#133167" fontSize="sm" fontWeight="light">Being a member of the law x Tech Community gives you access to:</Typography>
            </Container>
        </>
    )
}