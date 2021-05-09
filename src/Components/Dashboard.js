import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import {Login} from "./Login";
import {Main} from "./Main";


const Dashboard = (props)=>{

    // const [apiAuthTokenState , setApiAuthTokenState] =useState(null)

    const loginApi = useSelector(state => state.loginApi.token)
    const user = useSelector(state => state.loginApi.user)

    useEffect(() => {
        if (user) {
            console.log("Dashboard , token is :" , loginApi)
            console.log("Dashboard , user is :" , user)
        }

    } ,[loginApi , user])

    const pageRender = () => {
        if (loginApi === null){
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

