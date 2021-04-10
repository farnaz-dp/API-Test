import React  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Login} from "./Login";
import {Main} from "./Main";


const Dashboard = (props)=>{

    // const [apiAuthTokenState , setApiAuthTokenState] =useState(null)

    const loginApi = useSelector(state => state.loginApi.token)

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

