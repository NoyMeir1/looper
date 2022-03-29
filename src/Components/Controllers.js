import React, {useContext} from "react";
import {Box, Button, ButtonGroup} from "@mui/material";
import {EventsContext} from "../Contexts/events-context";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';


const Controllers = () => {

    {/* context */}
    const ctx = useContext(EventsContext)

    {/* styles */}
    const sxProps = {
        box: {
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            marginTop: 3,
        },

        button: {
            textTransform: 'capitalize',
            border: 2,
            fontSize: '25px'
        },

        icon: {
            fontSize: '25px'
        },
    }

    return (

        <Box sx={sxProps.box}>
            <ButtonGroup>

                {/* Play Button that plays all the channels that isn’t muted. */}
                <Button color="secondary" sx={sxProps.button} onClick={ctx.setPlayingOn}>
                    Play
                    <PlayArrowRoundedIcon sx={sxProps.icon}/>
                </Button>

                {/* Stop Button that stops all playing channels and go back to start. */}
                <Button color="secondary" sx={sxProps.button} onClick={ctx.setPlayingOff}>
                    Stop
                    <StopRoundedIcon sx={sxProps.icon}/>
                </Button>

                {/* Loop Button -
                    when Loop button is on, each time that loop ends (all the channels that isn’t muted finishes),
                    go back to start and play again.
                    when Loop button is off, each time that loop ends it’s not starting again. */}
                <Button color="secondary" sx={sxProps.button}
                        onClick={ctx.loopToggleHandler}>
                    {!ctx.isLoopEnabled ? "Loop" : "Cancel Loop"}
                <LoopRoundedIcon sx={sxProps.icon}/>
                </Button>
            </ButtonGroup>
        </Box>
    )
};

export default Controllers;