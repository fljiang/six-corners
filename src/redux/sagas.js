import { put, all, takeLatest } from "redux-saga/effects";

function* setCorner(action) {
    yield put({
        type: "CORNER_UPDATED",
        corner: action.corner
    });
}

function* setInterval(action) {
    yield put({
        type: "INTERVAL_UPDATED",
        interval: action.interval
    });
}

function* setTimer(action) {
    yield put({
        type: "TIMER_UPDATED",
        on: action.on
    });
}

function* setTotalTime(action) {
    yield put({
        type: "TOTAL_TIME_UPDATED",
        totalTime: action.totalTime
    });
}

function* resetAllEvents(action) {
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
    yield takeLatest("SET_INTERVAL", setInterval);
    yield takeLatest("SET_TIMER", setTimer);
    yield takeLatest("SET_TOTAL_TIME", setTotalTime);
    yield takeLatest("RESET_ALL_EVENTS", resetAllEvents);
}
  
export default function* rootSaga() {
    yield all([
        appWatcher()
    ]);
}