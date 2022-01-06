const initialState = {
    corner: 0,
    on: true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "CORNER_UPDATED":
            return {
                ...state,
                corner: action.corner
            }
    default:
          return state;
    }
}