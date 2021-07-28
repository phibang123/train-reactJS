import { combineReducers, createStore } from "redux";

import {gioHangReducer} from './reducer/gioHangReducer'

// const rootReducer = combineReducers({
//     //các state ứng dụng dc luu tại đây
// })
const rootReducer = combineReducers({
    gioHangReducer: gioHangReducer,
})
export const store = createStore(rootReducer)