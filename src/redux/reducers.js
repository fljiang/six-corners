const initialState = {
    corner: 0,
    interval: 2000,
    on: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "CORNER_UPDATED":
            return {
                ...state,
                corner: action.corner
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
    default:
          return state;
    }
}