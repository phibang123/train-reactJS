import { combineReducers, createStore } from "redux";

import { baiTapGameOanTuTiReducer } from "./BaiTap/baiTapGameOanTuTiReducer"

const rootReducer = combineReducers({
    baiTapGameOanTuTiReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)