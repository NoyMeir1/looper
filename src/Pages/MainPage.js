import React from "react";
import ChannelsBox from "../Components/ChannelsBox";
import Controllers from "../Components/Controllers";
import TimeBar from "../Components/TimeBar";
import {Box} from "@mui/material";
import './MainPage.css';


const MainPage = () => {


    return (
        <Box>
            <h1>Moveo's Looper By Noy Meir</h1>
            <Box className="wrapper">
                <TimeBar/>
                <ChannelsBox/>
                <Controllers/>
            </Box>
        </Box>
    )
};

export default MainPage;