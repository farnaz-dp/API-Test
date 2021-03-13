import React , {useContext} from 'react'
import {useState,useEffect} from "react";
import {Login} from "./Login";
import {Main} from "./Main";
import {Context} from "../Contexts/IVMSContext";

const Dashboard = (props)=>{

    // const [apiAuthTokenState , setApiAuthTokenState] =useState(null)

    const {state , dispatch} = useContext(Context)

    const pageRender = () => {
        if (state.ivmsLoginApi.data === null){
            return (
                // <Login setApiAuthTokenState={setApiAuthTokenState}/>
                <Login />
            )
        }
        else
        {
            return (
                // <Main apiAuthTokenState={apiAuthTokenState} />
                <Main  />
            )
        }
    }
    return (
        <div>
            {pageRender()}
        </div>
    )
}

export {Dashboard}

