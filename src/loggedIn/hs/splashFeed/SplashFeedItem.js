import React, { useEffect, useContext, useRef, useState } from 'react'

import { useHttpClient } from "../../../shared/hooks/http-hook"
import { AuthContext } from "../../../shared/context/auth-context"

import "../../../css/style.css"
import FilterFeedItem from './FilterFeedItem'
import Modal from '../../../shared/components/UIElements/Modal'
import ErrorModal from '../../../shared/components/UIElements/ErrorModal'




const SplashFeedItem = (props) => {

    const auth = useContext(AuthContext)


    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [creator, setCreator] = useState()

    const [postCache, setPostCache] = useState()


    useEffect(() => {


        const fetchCreator = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/findPostCreator/${props.creator}`,


                )
                setCreator(responseData.findUser)

            } catch (err) {

            }

        }

        fetchCreator()

    }, [sendRequest, props.creator])


    const [hearts, setHearts] = useState()

    useEffect(() => {

        const findHearts = async () => {

            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/getHeartCount/${props.postID}`,
                    "GET",
                    null,
                    {

                        Authorization: 'Bearer ' + auth.token

                    }
                )

                setHearts(responseData.hearts)



            } catch (err) {

            }


        }

        findHearts()

    }, [props.postID, auth.token, sendRequest])


    useEffect(() => {

      

        const heartCheck = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/checkIfHearted/${props.postID}`,
                    "GET",
                    null,
                    {

                        Authorization: 'Bearer ' + auth.token

                    }
                )
                if (responseData.confirmHeart.length > 0) {
                    setPostCache(true)
                } else {
                    setPostCache(false)
                }

            } catch (err) {

            }
        }
        heartCheck()






    }, [auth.token, props.postID, sendRequest])


    const heartAPost = async () => {

        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/heartAPost`,
                "POST",
                JSON.stringify({
                    postId: props.postID
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token

                }

            )

        } catch (err) {

        }

        const findHearts = async () => {

            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/getHeartCount/${props.postID}`,
                    "GET",
                    null,
                    {

                        Authorization: 'Bearer ' + auth.token

                    }
                )

                setHearts(responseData.hearts)

                
            } catch (err) {

            }
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/checkIfHearted/${props.postID}`,
                    "GET",
                    null,
                    {

                        Authorization: 'Bearer ' + auth.token

                    }
                )
                if (responseData.confirmHeart) {
                    setPostCache(true)
                } else {
                    setPostCache(false)
                }

            } catch (err) {

            }

        }

        findHearts()

    }

    const unheartAPost = async () => {
        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/unheartAPost/${props.postID}`,
                "DELETE",
                null,
                {

                    Authorization: 'Bearer ' + auth.token

                }
            )
        } catch (err) {

        }

        const findHearts = async () => {

            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/getHeartCount/${props.postID}`,
                    "GET",
                    null,
                    {

                        Authorization: 'Bearer ' + auth.token

                    }
                )

                setHearts(responseData.hearts)

               
            } catch (err) {

            }
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/checkIfHearted/${props.postID}`,
                    "GET",
                    null,
                    {

                        Authorization: 'Bearer ' + auth.token

                    }
                )
                if (responseData.confirmHeart) {
                    setPostCache(true)
                } else {
                    setPostCache(false)
                }

            } catch (err) {

            }

        }

        findHearts()
    }



    return (


        <div className="posts">

            { creator &&

                <div className="posts--borderSet">
                    <div>{creator.username}</div>
                    <div><FilterFeedItem

                        sentence={props.aPost}
                        crumDictionary={creator.dictionarys[0]._id}
                    /></div>
                    <div>
                        <div>




                            {hearts &&

                                <div><span>

                                    {!postCache &&
                                        <span onClick={heartAPost}>♡</span>}
                                    {postCache &&
                                        <span onClick={unheartAPost}> &#10084;&#65039;
                                         </span>} 

                                         &nbsp;{hearts.length} </span>
                                </div>
                            }


                        </div>

                    </div>

                    <div>{props.postDate}</div>
                </div>
            }
        </div>
    )
}

export default React.memo(SplashFeedItem)
