import { put, all, takeLatest } from "redux-saga/effects";

function* setCorner(action) {
    yield put({
        type: "CORNER_UPDATED",
        corner: action.corner
    });
}

function* appWatcher() {
    yield takeLatest("SET_CORNER", setCorner);
}
  
export default function* rootSaga() {
    yield all([
        appWatcher()
    ]);
}