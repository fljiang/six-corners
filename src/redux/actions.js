export const setCorner = (corner) => {
    return {
        type: "SET_CORNER",
        corner
    }
}

export const setInterval = (interval) => {
    return {
        type: "SET_INTERVAL",
        interval
    }
}

export const setTimer = (on) => {
    return {
        type: "SET_TIMER",
        on
    }
}

export const setTotalTime = (totalTime) => {
    return {
        type: "SET_TOTAL_TIME",
        totalTime
    }
}

export const resetAllEvents = () => {
    return {
        type: "RESET_ALL_EVENTS"
    }
}