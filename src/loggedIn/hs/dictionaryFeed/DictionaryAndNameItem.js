import React, { useState, useContext, useEffect } from 'react'

import { useHttpClient } from "../../../shared/hooks/http-hook"
import { AuthContext } from "../../../shared/context/auth-context"


const DictionaryAndNameItem = (props) => {

    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [userAndDictionary, setUserAndDictionary] = useState()



    useEffect(() => {
        const fetchUserAndDictionary = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/getDictionaryAndUser/${props.dictionary}`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                //console.log(responseData)
                setUserAndDictionary(responseData.findUserAndDictionary[0])

            } catch (err) {

            }



        }


        fetchUserAndDictionary()

    }, [sendRequest, auth.token, props.dictionary])


    return (
        <div>
            {!isLoading && userAndDictionary && <div>
                <div>{userAndDictionary.dictionarys[0].dictionaryName}</div>
                <div>{userAndDictionary.username}</div>
            </div>
            }
        </div>

    )
}

export default DictionaryAndNameItem
