import React, {useContext} from "react";
import {Box, Paper, Slider} from "@mui/material";
import {EventsContext} from "../Contexts/events-context";

const TimeBar = () => {

    {/* context */}
    const ctx = useContext(EventsContext)

    {/* slider position handler */}
    const updateSliderHandler = (event) => {
        ctx.setPositionHandler(event.target.value)
    }

    {/* styles */}
    const sxProps = {
        box: {
            width: '45%',
            marginLeft: 70
        },

        slider: {
            width: 600,
            alignItems:"center",
            justifyContent:"center"
        },

        cursor:{
            width: "1px",
            backgroundColor: "black",
            height: '64%',
            position: "absolute",
            left: `${(751 + ctx.position * 34).toString()}px`
        }
    }

    return (
        <Box sx={sxProps.box}>

            {/* bar with marks which tracks the location of the current playing position */}
            <Slider
                /* slider properties */
                sx={sxProps.slider}
                value={ctx.position}
                size="medium"
                min={0}
                max={18}
                defaultValue={0}
                step={0.1}
                marks={true}
                /* seconds tooltip */
                valueLabelDisplay="on"
                valueLabelFormat={(val) => {
                    return parseInt(Math.ceil(val)).toString() + "s"
                }}
                onChange={updateSliderHandler}
            />

            {/* top-down bar located above all the channels
             that shows the progress of all the channels together */}
            <Paper sx={sxProps.cursor}/>

        </Box>
    );
};

export default TimeBar;