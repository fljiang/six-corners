export const setCorner = (corner) => {
    return {
        type: "SET_CORNER",
        corner
    }
}

export const setFourCorners = (fourCorners) => {
    return {
        type: "SET_FOUR_CORNERS",
        fourCorners
    }
}

export const setInterval = (interval) => {
    return {
        type: "SET_INTERVAL",
        interval
    }
}

export const setTime = (time) => {
    return {
        type: "SET_TIME",
        time
    }
}

export const startTimer = (on) => {
    return {
        type: "START_TIMER",
        on
    }
}

export const resetAllEvents = () => {
    return {
        type: "RESET_ALL_EVENTS"
    }
}