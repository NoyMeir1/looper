import React from "react";
import audioFiles from '../Utils/AudioFilesPaths'
import Channel from "./Channel";
import {Box} from "@mui/material";

const ChannelsBox = () => {

    /* maps all the audio files from  AudioFilesPaths
       and creating for each of them a Channel,
       passing the audio file and the file name. */
    const channels = audioFiles.map(file => <Channel key = {file} audioFile={file}
                                                     fileName={file.split("/")[3]} />)

    return (
        <Box>
            {channels}
        </Box>
    )
};


export default ChannelsBox;