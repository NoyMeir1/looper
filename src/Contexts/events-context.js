import React, {useState} from "react";

const EventsContextProvider = (props) => {

    /* use states */
    const [currentTime, setCurrentTime] = useState(0.0);
    const [position, setPosition] = useState(0.0);
        /* by default play button is off */
    const [isPlaying, setIsPlaying] = useState(false);
        /* by default loop button is off */
    const [isLoopEnabled, setIsLoopEnabled] = useState(false);

    /* set the playingOn to true */
    const setPlayingOn = () => {
        setIsPlaying(true);
    };

    /* set the playingOn to false and set the position to the start */
    const setPlayingOff = () => {
        setIsPlaying(false);
        setTimeout(() => {
            setPositionHandler(0)
        }, 10)
    }

    /* sets the loop button (enable/ disable) toggle */
    const loopToggleHandler = () => {
        setIsLoopEnabled(!isLoopEnabled)
    }

    /* receive a position and sets the current position to it */
    const setPositionHandler = (pos) => {
        setPosition(pos);
    };

    /* receive time in seconds and sets the current time to it */
    const setTimeHandler = (time) => {
        setCurrentTime(time);
    };

    return <EventsContext.Provider value={{
        isLoopEnabled,
        isPlaying,
        currentTime,
        position,
        setTimeHandler,
        setPositionHandler,
        setPlayingOn,
        setPlayingOff,
        loopToggleHandler,

    }}>
        {props.children}
    </EventsContext.Provider>
};

export const EventsContext = React.createContext({
    isLoopEnabled: false,
    isPlaying: false,
    currentTime: 0.0,
    position: 0.0,
    setTimeHandler: () => {
    },
    setPositionHandler: () => {
    },
    setPlayingOn: () => {
    },
    setPlayingOff: () => {
    },
    loopToggleHandler: () => {
    }

});

export default EventsContextProvider;