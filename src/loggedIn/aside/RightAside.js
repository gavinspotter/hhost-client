import React from 'react'

import { useForm } from "react-hook-form"

import "../../css/style.css"

import { useHttpClient } from "../../shared/hooks/http-hook"

const RightAside = () => {


    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const searchSubmit = async (data) => {
        try {
            const responseData = await sendRequest(
                `http://loc`
            )
        } catch (err) {

        }

    }





    return (
        <div>
            <aside className="hs--right-sidebar">
                <div>
                    <form>

                        <input placeholder="user" />
                        <button>search </button>
                    </form>
                </div>
            </aside>
        </div>
    )
}

export default RightAside
