import { combineReducers, createStore } from "redux";

import { baiTapGameXucXacReducer } from "./baiTapGameXucXacReducer";

const rootReducer = combineReducers({
    baiTapGameXucXacReducer
})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)