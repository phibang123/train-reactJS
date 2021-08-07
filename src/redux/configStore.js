import { combineReducers, createStore } from "redux";

import {datVeXemPhimReducer} from './MovieRedux/datVeXemPhimReducer'

// import {danhSachGheReducer} from './MovieRedux/danhSachGheReducer'


const rootReducer = combineReducers({
    // danhSachGheReducer,
    datVeXemPhimReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)