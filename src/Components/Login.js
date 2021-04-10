
import React from "react";
import {useDispatch} from "react-redux";
import {useState,useEffect} from "react";
import axios from "axios";
import {LoginApiRequest,LoginApiError,fetchToken} from '../ActionType'


const Login = (props) => {

    const [usernameState , setUsernameState] =useState('')
    const [passwordState , setPasswordState] =useState('')
    // const [apiFetchState , setApiFetchState] =useState(false)

    const dispatch = useDispatch()


    const handleInputChange = (event) => {
        // console.log("Event : " , event.target.name)

        if (event.target.type ==="submit" ){
            event.preventDefault()
            if (usernameState != '' & passwordState != ''){

                /*dispatch({
                    type: LOGIN_API_REQUEST
                })*/

                dispatch(fetchToken(usernameState, passwordState))

                /*axios({
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
                            dispatch({
                                type: LOGIN_API_SUCCESS,
                                loginData : response.data
                            })
                            // setApiFetchState(true)
                            // props.setApiAuthTokenState(response.data)
                        }
                    })
                    .catch((error)=>{
                        dispatch({
                            type: LOGIN_API_ERROR,
                            error : error
                        })
                        console.log('Error : ',error)
                    })*/

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
        <div style={{width:"300px" , height:"200px" , border:"2px solid black",borderRadius:"5%" , backgroundColor:"#e3f0f5" , margin:" -100px 0 0 -150px",position:"absolute" , top:"50%" , left:"50%"}}>
            <h2 style={{marginLeft:"5px"}}>Login Form</h2>
            <form >
                <label  style={{color: "#070b4c" , fontSize:"3 rem" , fontFamily:"Arial" ,fontWeight:"bold" , marginLeft:"8px"}}>
                    {`Username : `}
                </label>
                <input type={"text"} name={"username"} value={usernameState} onChange={handleInputChange} />
                <br/>
                <label  style={{color: "#070b4c" , fontSize:"3 rem" , fontFamily:"Arial" , fontWeight:"bold" , marginLeft:"8px"}}>
                    {`Password : `}
                </label>
                <input type={"password"} name={"password"} value={passwordState} onChange={handleInputChange} style={{marginLeft:3, marginTop:6} }/>
                <br/>
                <input type={"submit"} onClick={handleInputChange} style={{marginTop:20, marginLeft:100 ,width:"6rem" , height:"2rem" , backgroundColor:"#a1ceec" , fontWeight:"bold"}}/>

            </form>

        </div>
    )
}


export {Login}