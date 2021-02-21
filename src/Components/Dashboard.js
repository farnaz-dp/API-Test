import React from 'react'
import {useState,useEffect} from "react";
import {Login} from "./Login";
import {Main} from "./Main";
// import {Login} from "./Login";
// import {Main} from "./Main";

const Dashboard = (props)=>{

    const [apiAuthTokenState , setApiAuthTokenState] =useState(null)

    const pageRender = () => {
        if (apiAuthTokenState === null){
            return (
                <Login setApiAuthTokenState={setApiAuthTokenState}/>
            )
        }
        else
        {
            return (
                <Main apiAuthTokenState={apiAuthTokenState} />
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

