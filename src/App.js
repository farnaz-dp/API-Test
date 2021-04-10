
import React, {useReducer} from "react";
import {Provider} from "react-redux";
import {store} from "./store";
import {Dashboard} from "./Components/Dashboard";


function App() {

    return (
        <Provider store={store}>
            <div >
                <Dashboard />
            </div>
        </Provider>
    );
}

export default App;
