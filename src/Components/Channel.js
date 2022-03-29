import React, {useContext, useEffect, useRef, useState} from "react";
import {Box, Slider, IconButton, Typography} from '@mui/material'
import {styled} from '@mui/material/styles';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import {EventsContext} from "../Contexts/events-context";
import ReactPlayer from "react-player";
import getColor from "../Utils/ChannelsBackgroundColors";
import './Channel.css'

const Channel = ({fileName, audioFile}) => {

    {/* context states and ref */}
    const ctx = useContext(EventsContext);
    const [bgColor, setBgColor] = useState("");
        /* by default mute button is off - all channels are active */
    const [isMuted, setIsMuted] = useState(false);
    const [duration, setDuration] = useState(0); // seconds
    const audioRef = useRef()

    const audioFileName = fileName.split(".")[0];

    {/* style for the seconds of the slider */}
    const TinyText = styled(Typography)({
        fontSize: '0.75rem',
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
    });

    {/* set each channel with a different color */}
    useEffect(() => {
        setBgColor(getColor());
    }, [])

    {/* format numbers that appears as the seconds of the slider to seconds format */}
    const formatDuration = (value) => {
        value = Math.ceil(value)
        const minute = Math.floor(value / 60);
        const secondLeft = parseInt(value - minute * 60);
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
    }

    {/* toggle mute button On/Off and updates the position of the slider  */}
    const muteToggler = () => {
        setIsMuted(!isMuted)
        audioRef.current.seekTo(ctx.position)
    }

    const setAudioLength = (e) => {
        setDuration(e)
    }

    const updateSlider = (event) => {
        ctx.setPositionHandler(event.playedSeconds)
    }

    {/* reset the audio to the start and the position of the slider to the start */}
    const resetPlayer = () => {
        ctx.setPlayingOff()
        setTimeout(() => {
            ctx.setPositionHandler(0)
        }, 1000)

        audioRef.current.seekTo(ctx.position)
    }

    const updateSliderPosition = (event) => {
        ctx.setPositionHandler(event.target.value);
    }

    return (
        /* sets the background color for each channel */
        <Box className="channelBox" sx={{backgroundColor: bgColor}}>

            {/* manage audio */}
            <ReactPlayer
                ref={audioRef}
                muted={isMuted}
                progressInterval={10}
                onProgress={updateSlider}
                onDuration={setAudioLength}
                onEnded={resetPlayer}
                onPause={() => {
                    audioRef.current.seekTo(0)
                }}
                className="mediaPlayer"
                url={audioFile}
                loop={ctx.isLoopEnabled}
                playing={ctx.isPlaying && !isMuted}
            />

            {/* file title */}
            <Box className="audioTitle">
                <Typography>
                    {audioFileName}
                </Typography>
            </Box>

            {/* manage audio slider */}
            <Box className="playerBox">
                <Slider
                    size="small"
                    min={0}
                    max={duration}
                    value={!isMuted ? ctx.position : 0}
                    onChange={updateSliderPosition}
                />
                <Box className="durationTextBox">
                    <TinyText>{!isMuted && formatDuration(ctx.position)}</TinyText>
                    <TinyText>-{!isMuted && formatDuration(duration - ctx.position)}</TinyText>
                </Box>
            </Box>

            {/* mute button toggle */}
            <IconButton
                onClick={muteToggler}>
                {isMuted && <VolumeMuteIcon/>}
                {!isMuted && <VolumeOffIcon/>}
            </IconButton>
        </Box>
    )
};

export default Channel;