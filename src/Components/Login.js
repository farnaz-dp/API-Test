
import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";


const Login = (props) => {

    const [usernameState , setUsernameState] =useState('')
    const [passwordState , setPasswordState] =useState('')
    const [apiFetchState , setApiFetchState] =useState(false)


    const handleInputChange = (event) => {
        // console.log("Event : " , event.target.name)

        if (event.target.type ==="submit" ){
            event.preventDefault()
            if (usernameState != '' & passwordState != ''){
                axios({
                    method: 'post',
                    url: 'http://192.168.100.56/api-token-auth',
                    data: {
                        username : usernameState,
                        password: passwordState
                    }

                })
                    .then( (response)=>{
                        // console.log(`Response : ${response}`)

                        if (response.status === 200){
                            console.log('Login,Response : ' , response.data)
                            setApiFetchState(true)
                            props.setApiAuthTokenState(response.data)
                        }
                    })
                    .catch((error)=>{
                        console.log('Error : ',error)
                    })
            }
            console.log("Event type is Submit Button")

        }
        else
        {
            console.log("Event type is text input ")
            if (event.target.name === "username"){
                setUsernameState(event.target.value)
            }
            else if (event.target.name === "password")
            {
                setPasswordState(event.target.value)
            }
        }


    }

    return(
        <div>
            <h2>Login Form</h2>
            <form>
                <label>
                    {`UserName : `}
                </label>
                <input type={"text"} name={"username"} value={usernameState} onChange={handleInputChange}/>
                <br/>
                <label>
                    {`Password : `}
                </label>
                <input type={"password"} name={"password"} value={passwordState} onChange={handleInputChange}/>
                <br/>
                <input type={"submit"} onClick={handleInputChange}/>

            </form>

        </div>
    )
}


export {Login}