import React, { useContext, useState, useEffect } from 'react'
import DictionaryFeedItem from './DictionaryFeedItem'
import { useHttpClient } from "../../../shared/hooks/http-hook"
import { AuthContext } from "../../../shared/context/auth-context"

import "../../../css/style.css"

const DictionaryFeedList = (props) => {


    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const [userAndDictionary, setUserAndDictionary] = useState()

    // useEffect(() => {
    //     const fetchUserAndDictionary = async () => {
    //         try {
    //             const responseData = await sendRequest(
    //                 `${process.env.REACT_APP_BACKEND_URL}/user/getDictionaryAndUser/${props.words.map(x => x.dictionary)}`,
    //                 "GET",
    //                 null,
    //                 {
    //                     Authorization: 'Bearer ' + auth.token
    //                 }
    //             )


    //             setUserAndDictionary(responseData[0])
    //             console.log(userAndDictionary)
    //         } catch (err) {

    //         }



    //     }


    //     fetchUserAndDictionary()

    // }, [sendRequest, auth.token, props.words, userAndDictionary])


    return (
        <div className="dictionaryFeed">
            {props.words.map((data) =>
                <DictionaryFeedItem
                    key={data._id}
                    word={data.word.definiteWord}
                    definition={data.definition}
                    etymology={data.etymology}
                    dictionary={data.dictionary}
                    date={data.date}

                />
            )}
        </div>
    )
}

export default DictionaryFeedList
