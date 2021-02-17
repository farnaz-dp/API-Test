
import React from "react";
import {useState,useEffect} from "react";

const Login = (props) => {

   const [usernameState , setUsernameState] =useState(null)
   const [passwordState , setPasswordState] =useState(null)

   const handleInputChange = (event) => {
       // console.log("Event : " , event.target.name)

       if (event.target.type ==="submit" ){
           console.log("Event type is Submit Button")
       }
       else
       {
           console.log("Event type is text input ")
           if (event.target.name === "username"){
               setUsernameState(event.target.value)
           }
       else
           {
               setPasswordState(event.target.value)
           }
       }



   }

   useEffect(()=>{

       console.log("usernameState : " , usernameState)
   },[usernameState])

    useEffect(()=>{

        console.log("passwordState : " , passwordState)
    },[passwordState])

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
                <input type={"submit"}/>

            </form>
        </div>
    )
}


export {Login}