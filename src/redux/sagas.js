import { put, all, takeLatest } from "redux-saga/effects";

function* setCorner(action) {
    yield put({
        type: "CORNER_UPDATED",
        corner: action.corner
    });
}

function* setFourCorners(action) {
    yield put({
        type: "FOUR_CORNERS_UPDATED",
        fourCorners: action.fourCorners
    });
}

function* setInterval(action) {
    yield put({
        type: "INTERVAL_UPDATED",
        interval: action.interval
    });
}

function* setTime(action) {
    yield put({
        type: "TIME_UPDATED",
        time: action.time
    });
}

function* startTimer(action) {
    yield put({
        type: "TIMER_STARTED",
        on: action.on
    });
}

function* resetAllEvents() {
    const highestTimeoutId = setTimeout(";");
    for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
    
    yield put({
        type: "ALL_EVENTS_RESET"
    });
}

function* appWatcher() {
    yield takeLatest("SET_CORNER", setCorner);
    yield takeLatest("SET_FOUR_CORNERS", setFourCorners);
    yield takeLatest("SET_INTERVAL", setInterval);
    yield takeLatest("SET_TIME", setTime);
    yield takeLatest("START_TIMER", startTimer);
    yield takeLatest("RESET_ALL_EVENTS", resetAllEvents);
}
  
export default function* rootSaga() {
    yield all([
        appWatcher()
    ]);
}