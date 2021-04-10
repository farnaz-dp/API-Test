import {combineReducers, createStore , applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import {loginApiReducer,mapDataApiReducer,svgReducer,contentReducer,drawerReducer} from './Reducers'
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    loginApi : loginApiReducer,
    mapDataApi : mapDataApiReducer,
    svg : svgReducer ,
    content : contentReducer,
    drawer : drawerReducer
})

const store = createStore(
    rootReducer ,
    composeWithDevTools(
        applyMiddleware(

            thunk
        )
    )
)

export {store}