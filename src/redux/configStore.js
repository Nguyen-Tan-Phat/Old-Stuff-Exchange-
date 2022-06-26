
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { editBuidingReducer } from './reducers/editBuildingReducer';
import { editUserReducer } from './reducers/editUserReducer';
import { loginReducer } from './reducers/loginReducer';
import { quanLyBuildingReducer } from './reducers/quanLyBuildingReducer';
import { quanLyPostReducer } from './reducers/quanLyPostReducer';
import { quanLyUserReducer } from './reducers/quanLyUserReducer';




const rootReducer = combineReducers({
    quanLyBuildingReducer,
    quanLyUserReducer,
    quanLyPostReducer,
    editBuidingReducer,
    loginReducer,
    editUserReducer,
});

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, composeCustom);