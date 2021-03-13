
import React, {useReducer} from "react";
import {Dashboard} from "./Components/Dashboard";

import {Context} from './Contexts/IVMSContext'
import { IVMSReducer,initState} from './Reducers/Reducer'

function App() {


    const [state ,dispatch] = useReducer(IVMSReducer , initState )

  return (
      <div >
          <Context.Provider value={{state , dispatch}}>
              <Dashboard />
          </Context.Provider>

      </div>
  );
}

export default App;
