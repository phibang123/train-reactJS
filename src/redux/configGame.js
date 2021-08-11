import { combineReducers, createStore } from "redux";

import { baiTapQuanLyNguoiDungReducer } from "./baiTapQuanLyNguoiDungReducer";

// import { baiTapGameXucXacReducer } from "./baiTapGameXucXacReducer";


const rootReducer = combineReducers({
    // baiTapGameXucXacReducer
    baiTapQuanLyNguoiDungReducer
})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)