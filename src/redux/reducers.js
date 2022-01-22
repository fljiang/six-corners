const initialState = {
    corner: 0,
    interval: 2000,
    totalTime: 120000,
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
                fourCorners: true
            }
        case "INTERVAL_UPDATED":
            return {
                ...state,
                interval: action.interval
            }
        case "TIMER_UPDATED":
            return {
                ...state,
                on: action.on
            }
        case "TOTAL_TIME_UPDATED":
            return {
                ...state,
                totalTime: action.totalTime
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