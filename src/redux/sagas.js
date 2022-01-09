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

function* appWatcher() {
    yield takeLatest("SET_CORNER", setCorner);
    yield takeLatest("SET_INTERVAL", setInterval);
    yield takeLatest("SET_TIMER", setTimer);
}
  
export default function* rootSaga() {
    yield all([
        appWatcher()
    ]);
}