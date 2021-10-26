import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from "../../../../shared/context/auth-context"
import { useHttpClient } from '../../../../shared/hooks/http-hook'
import StarDictionaryWordsList from './StarDictionaryWordsList'
import StarPostList from './StarPostList'

const StarsItem = (props) => {

    const auth = useContext(AuthContext)


    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [profile, setProfile] = useState()

    const [posts, setPosts] = useState()

    const [words, setWords] = useState()

    const [dictionaryFollowStatus, setDictionaryFollowStatus] = useState()

    const [dictionaryCheck, setDictionaryCheck] = useState()

    const [followCheck, setFollowCheck] = useState()

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/userProfile`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                setFollowCheck(responseData.findUser.followingCurrent)

                setDictionaryCheck(responseData.findUser.following)

                // if (profile && dictionaryCheck) {
                //     const getStatus = dictionaryCheck.filter(x => `${profile.dictionarys[0]._id}` === `${x}`)

                //     if (getStatus.length === 0) {
                //         setDictionaryFollowStatus("Follow")

                //     } else {
                //         setDictionaryFollowStatus("Unfollow")
                //     }

                // }


            } catch (err) {

            }
        }

        fetchUserProfile()




    }, [sendRequest, auth.token])

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/searchAUser/${props.star}`
                )
                setProfile(responseData.findUser[0])
                setPosts(responseData.postsByDate)
                setWords(responseData.wordsByDate)



            } catch (err) {

            }

        }
        fetchUserProfile()


    }, [sendRequest, props.star])

    useEffect(() => {

        if (profile && followCheck) {
            const getStatus = followCheck.filter(x => `${profile._id}` === `${x}`)

            if (getStatus.length === 0) {
                setUserFollowStatus("Follow")
            } else {
                setUserFollowStatus("Unfollow")
            }
        }

    }, [profile, followCheck])





    // useEffect(() => {

    //     if (profile) {
    //         const getStatus = props.dictionaryStatus.filter(x => `${profile.dictionarys[0]._id}` === `${x}`)

    //         if (getStatus.length === 0) {
    //             setDictionaryFollowStatus("Follow")

    //         } else {
    //             setDictionaryFollowStatus("Unfollow")
    //         }

    //     }

    // }, [profile, props.dictionaryStatus])



    //console.log(props.dictionaryStatus)

    const [openDictionaryFeed, setOpenDictionaryFeed] = useState()

    const [openPostFeed, setOpenPostFeed] = useState(true)

    const toggleDictionaryFeed = () => {
        setOpenPostFeed(false)
        setOpenDictionaryFeed(true)
    }

    const togglePostFeed = () => {
        setOpenDictionaryFeed(false)
        setOpenPostFeed(true)
    }

    const [dictionaryStatus, setDictionaryStatus] = useState()

    useEffect(() => {


        if (profile && dictionaryCheck) {
            const getStatus = dictionaryCheck.filter(x => `${profile.dictionarys[0]._id}` === `${x}`)

            if (getStatus.length === 0) {
                setDictionaryFollowStatus("Follow")

            } else {
                setDictionaryFollowStatus("Unfollow")
            }

        }


    }, [dictionaryCheck, profile])



    const followUnfollowDictionary = async () => {


        if (dictionaryFollowStatus === "Follow") {
            try {
                await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/followADictionary`,
                    "POST",
                    JSON.stringify({
                        dictionary: profile.dictionarys[0]._id,
                        userWithDictionary: profile._id
                    }),
                    {
                        "Content-Type": "application/json",
                        Authorization: 'Bearer ' + auth.token
                    }
                )






                const fetchUserProfile = async () => {
                    try {
                        const responseData = await sendRequest(
                            `${process.env.REACT_APP_BACKEND_URL}/user/userProfile`,
                            "GET",
                            null,
                            {
                                Authorization: 'Bearer ' + auth.token
                            }
                        )

                        setDictionaryCheck(responseData.findUser.following)




                    } catch (err) {

                    }
                }

                fetchUserProfile()

                setDictionaryFollowStatus("Unfollow")

                // try {
                //     const responseData = await sendRequest(
                //         `${process.env.REACT_APP_BACKEND_URL}/user/searchAUser/${props.star}`
                //     )
                //     const dictionaryStuff = responseData.findUser[0]

                //     const getStatus = props.dictionaryStatus.filter(x => `${dictionaryStuff.dictionarys[0]._id}` === `${x}`)

                //     if (getStatus === 0) {
                //         setDictionaryFollowStatus("Follow")

                //     } else {
                //         setDictionaryFollowStatus("Unfollow")
                //     }
                // } catch (err) {

                // }

            } catch (err) {

            }
        } else if (dictionaryFollowStatus === "Unfollow") {
            try {
                await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/unfollow/${profile.dictionarys[0]._id}/${profile._id}`,
                    "DELETE",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )
            } catch (err) {

            }

            const fetchUserProfile = async () => {
                try {
                    const responseData = await sendRequest(
                        `${process.env.REACT_APP_BACKEND_URL}/user/userProfile`,
                        "GET",
                        null,
                        {
                            Authorization: 'Bearer ' + auth.token
                        }
                    )

                    setDictionaryCheck(responseData.findUser.following)




                } catch (err) {

                }
            }

            fetchUserProfile()

            setDictionaryFollowStatus("Follow")
        }


    }

    const [userFollowStatus, setUserFollowStatus] = useState()


    const followAndUnfollowAUser = async () => {

        if (userFollowStatus === "Follow") {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/currentAUser`,
                "POST",
                JSON.stringify({
                    userId: profile._id
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token
                }
            )


            const fetchUserProfile = async () => {
                try {
                    const responseData = await sendRequest(
                        `${process.env.REACT_APP_BACKEND_URL}/user/userProfile`,
                        "GET",
                        null,
                        {
                            Authorization: 'Bearer ' + auth.token
                        }
                    )

                    setFollowCheck(responseData.findUser.followingCurrent)




                } catch (err) {

                }
            }

            fetchUserProfile()

        } else if (userFollowStatus === "Unfollow") {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/uncurrentAUser/${profile._id}`,
                "DELETE",
                null,
                {
                    Authorization: 'Bearer ' + auth.token
                }

            )

            const fetchUserProfile = async () => {
                try {
                    const responseData = await sendRequest(
                        `${process.env.REACT_APP_BACKEND_URL}/user/userProfile`,
                        "GET",
                        null,
                        {
                            Authorization: 'Bearer ' + auth.token
                        }
                    )

                    setFollowCheck(responseData.findUser.followingCurrent)




                } catch (err) {

                }
            }

            fetchUserProfile()
        }



    }




    return (
        <div>
            { profile &&
                <div>
                    <div>
                        <h2 onClick={togglePostFeed}>{profile.username}</h2>
                        <button onClick={followAndUnfollowAUser}>{userFollowStatus}</button>
                        <h4 onClick={toggleDictionaryFeed}>{profile.dictionarys[0].dictionaryName}</h4>
                        {
                            dictionaryFollowStatus &&

                            <button onClick={followUnfollowDictionary}> {dictionaryFollowStatus} </button>}
                        {words &&
                            openDictionaryFeed &&

                            <div>
                                <StarDictionaryWordsList love={words} dictionary={profile.dictionarys[0].dictionaryName} />
                            </div>

                        }
                    </div>
                    <div>
                        {posts && openPostFeed &&
                            <div>
                                <StarPostList love={posts} user={profile.username} />
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )

}

export default StarsItem
