const initialState = {
    corner: 0,
    interval: 2000,
    time: 120000,
    on: false,
    fourCorners: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "CORNER_UPDATED":
            return {
                ...state,
                corner: action.corner
            }
        case "FOUR_CORNERS_UPDATED":
            return {
                ...state,
                fourCorners: action.fourCorners
            }
        case "INTERVAL_UPDATED":
            return {
                ...state,
                interval: action.interval
            }
        case "TIME_UPDATED":
            return {
                ...state,
                time: action.time
            }
        case "TIMER_STARTED":
            return {
                ...state,
                on: action.on
            }
        case "ALL_EVENTS_RESET":
            return {
                ...state,
                corner: 0,
                on: false
            }
    default:
          return state;
    }
}