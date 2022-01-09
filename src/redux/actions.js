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