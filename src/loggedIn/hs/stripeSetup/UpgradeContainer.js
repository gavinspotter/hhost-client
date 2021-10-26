import React, { useContext } from 'react'
import { useForm } from "react-hook-form"


import { AuthContext } from "../../../shared/context/auth-context"
import { useHttpClient } from "../../../shared/hooks/http-hook"

import "../../../css/style.css"

const UpgradeContainer = (props) => {

    const auth = useContext(AuthContext)


    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const { register, handleSubmit } = useForm()


    const onSubmit = async (data) => {


        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/upgradeToBusiness`,
                "POST",
                JSON.stringify({
                    email: data.email,
                    bizType: data.bizType,
                    bizUrl: data.bizUrl,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    city: data.city,
                    state: data.state,
                    address: data.address,
                    zipCode: data.zipCode,
                    dobMonth: data.month,
                    dobDay: data.day,
                    dobYear: data.year,
                    phoneNumber: data.phoneNumber,
                    ssn: data.ssn
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token

                }
            )
            props.isAcct("2")



        } catch (err) {

        }



    }





    return (
        <div className="stripe-setup">

            <form>

                <label>email:</label>
                <br />
                <input {...register("email")} defaultValue={props.accEmail} />
                <br />
                business
                <br />
                <select {...register("bizType")}>
                    <option value="individual">individual</option>
                    <option value="company">company</option>
                    <option value="non_profit">non profit</option>
                    <option value="government_entity">government organization</option>
                </select>
                <br />

                <button onClick={handleSubmit(onSubmit)}> submit</button>

            </form>


        </div>
    )
}

export default UpgradeContainer
