const initialState = {
    corner: 0,
    interval: 2000,
    on: true
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
    default:
          return state;
    }
}