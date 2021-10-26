import React, { useContext } from 'react'

import io from "socket.io-client"


import { useForm } from "react-hook-form"


import { useHttpClient } from "../../../shared/hooks/http-hook"

import { AuthContext } from "../../../shared/context/auth-context"

import "../../../css/style.css"

const SponsorAPost = () => {


    const auth = useContext(AuthContext)

    const { register, handleSubmit } = useForm()



    const { isLoading, error, sendRequest, clearError } = useHttpClient()




    const onSubmit = async (data) => {

        const socket = io("http://10.0.0.16:5001")

        try {
            const gav = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/sendAPostSponsorship`,
                "POST",
                JSON.stringify({
                    price: data.price,
                    sUser: data.sponsoree.split(" "),
                    post: data.post
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token
                }
            )

            socket.emit("update", gav.sponsorshipPost)

        } catch (err) {

        }



    }


    return (
        <div className="ss-sap">

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>post</label>
                    <br/>
                    <textarea {...register("post")}/>
                    <br/>
                    <label>price</label>
                    <br />
                    <input {...register("price")} />
                    <br />
                    <label>star</label>
                    <br />
                    <input {...register("sponsoree")} />

                    <br/>
                   

                    <button>sponsor</button>

                </form>
            </div>

        </div>
    )
}

export default SponsorAPost
