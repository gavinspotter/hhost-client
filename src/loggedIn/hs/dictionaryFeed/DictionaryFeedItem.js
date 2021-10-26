import React, { useEffect, useContext, useState } from 'react'
import DictionaryFeedItemDefinition from './DictionaryFeedItemDefinition'
import { useHttpClient } from "../../../shared/hooks/http-hook"
import { AuthContext } from "../../../shared/context/auth-context"
import DictionaryAndNameItem from './DictionaryAndNameItem'

const DictionaryFeedItem = (props) => {


    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [userAndDictionary, setUserAndDictionary] = useState()



    // useEffect(() => {
    //     const fetchUserAndDictionary = async () => {
    //         try {
    //             const responseData = await sendRequest(
    //                 `${process.env.REACT_APP_BACKEND_URL}/user/getDictionaryAndUser/${props.dictionary}`,
    //                 "GET",
    //                 null,
    //                 {
    //                     Authorization: 'Bearer ' + auth.token
    //                 }
    //             )

    //             //console.log(responseData)
    //             setUserAndDictionary(responseData)

    //         } catch (err) {

    //         }



    //     }


    //     fetchUserAndDictionary()

    // }, [sendRequest, auth.token, props.dictionary])

    return (
        <div>
            <h3 style={{ color: "rgb(3, 177, 235)" }}>{props.word}</h3>
            {props.definition.map((data) =>
                <DictionaryFeedItemDefinition
                    key={data._id}
                    aDefinition={data.aDefinition}
                />
            )}
            <div className=" dictionaryFeed-definitionAndOrigin"><label className="dictionaryFeed-origin">-ORIGIN</label> {props.etymology}</div>
            <div>{props.date}</div>
            <DictionaryAndNameItem dictionary={props.dictionary} />
        </div>
    )
}

export default DictionaryFeedItem
