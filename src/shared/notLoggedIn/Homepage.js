import React, { useState, useContext } from 'react'

import { AuthContext } from "../context/auth-context"
import { useHttpClient } from "../hooks/http-hook"
import { useForm } from "react-hook-form"
import "../../css/style.css"


import ErrorModal from '../components/UIElements/ErrorModal'
import LoadingSpinner from '../components/UIElements/LoadingSpinner'


const Homepage = () => {


    const auth = useContext(AuthContext)


    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const { register, handleSubmit } = useForm()

    const [isSignupMode, setIsSignupMode] = useState(false)

    const [isLoginMode, setIsLoginMode] = useState(false)



    const homeHandler = () => {
        setIsLoginMode(false)

        setIsSignupMode(false)
    }

    const loginHandler = () => {
        setIsSignupMode(false)
        setIsLoginMode(true)

    }

    const signupHandler = () => {

        setIsLoginMode(false)

        setIsSignupMode(true)
    }

    const loginSubmit = async (data) => {

        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/login`,
                "POST",
                JSON.stringify({
                    username: data.username,
                    password: data.password
                }),
                {
                    "Content-Type": "application/json"
                }
            )
            auth.login(responseData.userId, responseData.token)
        } catch (err) {

        }
    }

    const signupSubmit = async (data) => {

        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/signup`,
                "POST",
                JSON.stringify({
                    username: data.username,
                    password: data.password,
                    email: data.email
                }),
                {
                    "Content-Type": "application/json"
                }
            )
            auth.login(responseData.userId, responseData.token)
        } catch (err) {

        }
    }

    const [option,setOption] = useState()

    const loginSignupSwitch = (event) => {
        setOption(event.target.value)
        if(option === "login"){
            loginHandler()
        }else if(option==="signup"){
            signupHandler()
        }

    }




    return (
        <div>
            <header className="home--toolbar">
                <button onClick={homeHandler} className="home--logo"> dictionary</button>
                <button onClick={loginHandler} className="home--login"> login</button>
                <button onClick={signupHandler} className="home--signup"> signup</button>
                <select onChange={loginSignupSwitch} className="home--select"  >
                
                <option value="signup" >login</option>
                <option value="login">signup</option>
            </select>
            </header>
            <header>
            
            <button onClick={loginHandler} className="home--login"> login</button>
                <button onClick={signupHandler} className="home--signup"> signup</button>

            </header>
            <header className="home--note">
                mobile app coming soon!

            </header>
            {/* <img src={hpimg} alt="dictionary home page" className="home" /> */}
            
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && <LoadingSpinner asOverlay />}
            {isSignupMode &&
                <div className="home--signupmode">
                    <form onSubmit={handleSubmit(signupSubmit)}>
                        <label>star</label>
                        <br />
                        <input
                            {...register("username")} />

                        <br />
                        <label>password</label>
                        <br />
                        <input
                            {...register("password")}
                            type="password"
                        />
                        <br />
                        <label>email</label>
                        <br />
                        <input
                            {...register("email")} />

                        <br />
                        <button className="bttn-homepage">signup</button>
                    </form>
                </div>
            }
            {isLoginMode &&
                <div className="home--loginmode">
                    <form onSubmit={handleSubmit(loginSubmit)}>
                        star <br />
                        <input
                            {...register("username")}
                        />
                        <br />
                        password<br />
                        <input
                            {...register("password")}
                            type="password"
                        /><br />
                        <button className="bttn-homepage">login</button>
                    </form>
                </div>
            }

        </div>
    )
}

export default Homepage
