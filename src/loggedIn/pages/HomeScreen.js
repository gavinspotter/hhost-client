import React, { useContext, useEffect, useRef, useState, useCallback } from 'react'

import "../../css/style.css"

import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import { useForm } from "react-hook-form"


import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LeftAside from '../aside/LeftAside'
import RightAside from '../aside/RightAside'
import SplashFeedList from '../hs/splashFeed/SplashFeedList'


import DStarList from '../hs/searchStuff/dictionary/DStarList'
import StarsList from '../hs/searchStuff/stars/StarsList'
import SplashList from '../hs/searchStuff/splash/SplashList'
import DictionaryList from '../hs/searchStuff/dictionary/DictionaryList'
import WordList from '../hs/searchStuff/word/WordList'
import DefinitionList from '../hs/searchStuff/definition/DefinitionList'
import SecretWordList from '../hs/searchStuff/secretWord/SecretWordList'
import SecretWordDefinitionList from '../hs/searchStuff/secretWordDefintion/SecretWordDefinitionList'

import DictionaryFeedList from '../hs/dictionaryFeed/DictionaryFeedList'
import SecretWordFeedList from '../hs/dictionaryFeed/SecretWordFeedList'
import DictionaryFeedItem from '../hs/dictionaryFeed/DictionaryFeedItem'
import UpgradeContainer from '../hs/stripeSetup/UpgradeContainer'
import StripeContainer from '../hs/stripeSetup/StripeContainer'
import SScontainer from '../hs/sponsorships/SScontainer'
import ProfileContainer from '../hs/profile/ProfileContainer'


const HomeScreen = () => {

    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm({ defaultValues: {post: ""}})

    const auth = useContext(AuthContext)

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ post: '' });
          }
    },
    [reset, isSubmitSuccessful])


    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [loadedSplashFeed, setLoadedSplashFeed] = useState()

    const [homeMode, setHomeMode] = useState(true)

    const [changeAValue, setChangeAValue] = useState()


    const homeHandler = async () => {
        const fetchSplashFeed = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/splashFeed`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )
                //shouldntRender.current = io("http://10.0.0.16:8080")
                //shouldntRender.current.on("shimmer", shimmer => {



                setLoadedSplashFeed(responseData.byDate)

            } catch (err) {

            }


        }
        

        fetchSplashFeed()
        setUrDictionaryMode(false)
        setSearchMode(false)
        setDictionaryFeedMode(false)
        setStripeSignup(false)
        setSponsorShips(false)
        setProfile(false)
        setHomeMode(true)

        
    }

    const [searchMode, setSearchMode] = useState(false)



    const [starSearch, setStarSearch] = useState(false)

    const starSearchHandler = () => {
        setSplashHand1(false)
        setWordHand1(false)
        setSecretWordHand1(false)
        setDictionaryHand1(false)
        setSearchMode(true)
        setStarSearch(true);

    }

    const [starData, setStarData] = useState()

    

    

    const [splashHand, setSplashHand] = useState()

    const [splashHand1, setSplashHand1] = useState(false)

    const splashSearchHandler = () => {
        setStarSearch(false)
        setDefinitionHand1(false)
        setWordHand1(false)
        setSplashHand1(true)
    }

    const [dictionaryHand, setDictionaryHand] = useState()

    const [dictionaryHand1, setDictionaryHand1] = useState(false)

    const dictionarySearchHandler = () => {
        setStarSearch(false)
        setSplashHand1(false)
        setWordHand1(false)
        setSecretWordHand1(false)
        setDictionaryHand1(true)
    }

    const [wordHand, setWordHand] = useState()

    const [wordHand1, setWordHand1] = useState(false)

    const wordSearchHandler = () => {
        setStarSearch(false)
        setSplashHand1(false)
        setDictionaryHand1(false)
        setSecretWordHand1(false)
        setWordHand1(true)
    }

    const [definitionHand, setDefinitionHand] = useState()

    const [definitionHand1, setDefinitionHand1] = useState(false)

    const definitionSearchHandler = () => {

        setStarSearch(false)
        setSplashHand1(false)
        setDictionaryHand1(false)
        setWordHand1(false)
        setSecretWordHand1(false)
        setDefinitionHand1(true)

    }

    const [secretWordHand, setSecretWordHand] = useState()

    const [secretWordHand1, setSecretWordHand1] = useState(false)

    const secretWordSearchHandler = () => {

        setStarSearch(false)
        setSplashHand1(false)
        setDictionaryHand1(false)
        setWordHand1(false)
        setDefinitionHand1(false)

        setSecretWordHand1(true)

    }

    /* handlers

        setHomeMode(false)
        setSearchMode(false)
        setDictionaryFeedMode(false)

     
    */

    const [secretWordDefinitionHand, setSecretWordDefinitionHand] = useState()

    const [secretWordDefinitionHand1, setSecretWordDefinitionHand1] = useState(false)


    const [userProfile, setUserProfile] = useState()



    
    const [loadedValue, setLoadedValue] = useState()


    const onSubmitSearch = async (data, e) => {
        
    
        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/aSearch`,
                "POST",
                JSON.stringify({
                    search: data.searchBar 
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token

                }
            )
            
            setStarData(responseData.findUser)
            setSplashHand(responseData.findSplash)
            setDictionaryHand(responseData.findDictionary)
            setWordHand(responseData.findWord)
            setDefinitionHand(responseData.findDefinition)
            setSecretWordHand(responseData.findSecretWord)
            setSecretWordDefinitionHand(responseData.findSecretWordDefinition)
            setHomeMode(false)

            setSearchMode(true)
            starSearchHandler()

           
            

        } catch (err) {

        }

        e.target.reset()

        setDictionaryFeedMode(false)
        setStripeSignup(false)
    }

    
    
    const onSubmitSplash = async (data, e) => {

        console.log(data)

        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/makeAPost`,
                "POST",
                JSON.stringify({
                    post: data.post
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token

                }

            )

        } catch (err) {

        }



        const fetchSplashFeed = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/splashFeed`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                setLoadedSplashFeed(responseData.byDate)
                
               
            } catch (err) {

            }




        }

        

        
        

        
        

        fetchSplashFeed()
        homeHandler()

    }




    





    useEffect(() => {
        const fetchSplashFeed = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/splashFeed`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )
                //shouldntRender.current = io("http://10.0.0.16:8080")
                //shouldntRender.current.on("shimmer", shimmer => {



                setLoadedSplashFeed(responseData.byDate)

            } catch (err) {

            }


        }

        fetchSplashFeed()

        





    }, [sendRequest, auth.token])


    const [dictionaryFeedMode, setDictionaryFeedMode] = useState()

    const [dictionaryFeed, setDictionaryFeed] = useState()

    const dictionaryFeedHandler = () => {
        setHomeMode(false)
        setSearchMode(false)
        setUrDictionaryMode(false)
        setSecretDictionaryInputMode(false)
        setStripeSignup(false)
        setSponsorShips(false)
        setProfile(false)

        const fetchDictionaryFeed = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/dictionaryFeed`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                setDictionaryFeed(responseData.byDate)


                // const dictionarysTho = dictionaryFeed.map(x => x.dictionary)
                // const fetchUserAndDictionary = async () => {
                //     try {
                //         const stuff = await sendRequest(
                //             `${process.env.REACT_APP_BACKEND_URL}ACKEND_URL}/user/getDictionaryAndUser/${dictionarysTho}`,
                //             "GET",
                //             null,
                //             {
                //                 Authorization: 'Bearer ' + auth.token
                //             }
                //         )


                //         setUserAndDictionary(stuff)
                //         //console.log(userAndDictionary)
                //     } catch (err) {

                //     }



                // }


                // fetchUserAndDictionary()
            } catch (err) {

            }
        }

        fetchDictionaryFeed()



        setDictionaryFeedMode(true)
        setDictionaryInputMode(true)




    }

    useEffect(() => {
        const fetchDictionaryFeed = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/dictionaryFeed`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                setDictionaryFeed(responseData.byDate)


                // const dictionarysTho = dictionaryFeed.map(x => x.dictionary)
                // const fetchUserAndDictionary = async () => {
                //     try {
                //         const stuff = await sendRequest(
                //             `${process.env.REACT_APP_BACKEND_URL}ACKEND_URL}/user/getDictionaryAndUser/${dictionarysTho}`,
                //             "GET",
                //             null,
                //             {
                //                 Authorization: 'Bearer ' + auth.token
                //             }
                //         )


                //         setUserAndDictionary(stuff)
                //         //console.log(userAndDictionary)
                //     } catch (err) {

                //     }



                // }


                // fetchUserAndDictionary()
            } catch (err) {

            }
        }

        fetchDictionaryFeed()













    }, [sendRequest, auth.token])



    // useEffect(() => {
    //     if(userProfile){
    //         if(userProfile.following ){

    //         }
    //     }
    // }, [])


    const [secretDictionaryInputMode, setSecretDictionaryInputMode] = useState()

    const [dictionaryInputMode, setDictionaryInputMode] = useState()

    const [dictionaryInputValue, setDictionaryInputValue] = useState()

    const [toUpdate, setToUpdate] = useState(1)

    const onSubmitDictionaryWord = async (data, e) => {
        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/createWord`,
                "POST",
                JSON.stringify({
                    word: data.word,
                    definition: data.definition,
                    etymology: data.etymology,
                    dictionary: userProfile.dictionarys[0]._id
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token
                }
            )





        } catch (err) {
            console.log(err)
        }

        const fetchDictionaryFeed = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/dictionaryFeed`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                setDictionaryFeed(responseData.byDate)

            } catch (err) {

            }
        }

        e.target.reset()

        fetchDictionaryFeed()

        dictionaryFeedHandler()

       
        



    }



    const onSubmitDictionarySecretWord = () => { }


    const [createADictionaryCard, setCreateADictionaryCard] = useState()


    const [findUserFollowing, setFindUserFollowing] = useState()

    const [findUserFollowers, setFindUserFollowers] = useState()

    const [findUserPosts, setFindUserPosts] = useState()


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

                console.log(responseData)

                setFindUserFollowing(responseData.findUserFollowing)

                setFindUserFollowers(responseData.findUserFollowers)

                setFindUserPosts(responseData.findPosts)

                setUserProfile(responseData.findUser)

                setDictionaryCreated(responseData.findUser.dictionarys.length)

                setDictionaryNotCreated(responseData.findUser.dictionarys.length)


            } catch (err) {

            }
        }

        fetchUserProfile()




    }, [sendRequest, auth.token, toUpdate])

    const [dictionaryCreated, setDictionaryCreated] = useState(false)

    const [dictionaryNotCreated, setDictionaryNotCreated] = useState()




    // if (userProfile.dictionarys.length === 0) {
    //     setDictionaryNotCreated(true)
    //     setDictionaryCreated(false)
    // } else {
    //     setDictionaryNotCreated(false)
    //     setDictionaryCreated(true)
    // }

    const toggleSecretWord = () => {
        setDictionaryInputMode(false)
        setSecretDictionaryInputMode(true)
    }

    const toggleWord = () => {
        setSecretDictionaryInputMode(false)
        setDictionaryInputMode(true)
    }

    const [secretWordList, setSecretWordList] = useState()

    useEffect(() => {
        const fetchSecretWords = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/secretWordFeed`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                setSecretWordList(responseData.byDate)
            } catch (err) {

            }



        }

        fetchSecretWords()

    }, [sendRequest, auth.token])

    const [secretWordInput, setSecretWordInput] = useState()

    const onSubmitSecretWord = async (data, e) => {
        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/createSecretWord`,
                "POST",
                JSON.stringify({
                    theDictionary: userProfile.dictionarys[0]._id,
                    theWord: data.theWord,
                    theDefinition: data.theDefinition
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token
                }
            )
        } catch (err) {

        }

        e.target.reset()

    }







    const [urDictionaryMode, setUrDictionaryMode] = useState(false)

    const urDictionaryHandler = () => {



        setSearchMode(false)
        setDictionaryFeedMode(false)
        setHomeMode(false)
        setUrDictionaryMode(true)



    }

    const createDictionarySubmitDirection = () => {
        setHomeMode(false)
        setDictionaryFeedMode(true)
        setDictionaryInputMode(true)
    }

    const onSubmitNewDictionary = async (data, e) => {

        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/createDictionary`,
                "POST",
                JSON.stringify({
                    dictionary: data.cDictionary
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token
                }
            )
            document.location.reload()


        } catch (err) {

        }

        e.target.reset()



    }




    // useEffect(() => {

    //     const fetchUserAndDictionary = async () => {
    //         try {
    //             const responseData = await sendRequest(
    //                 `${process.env.REACT_APP_BACKEND_URL}ACKEND_URL}/user/getDictionaryAndUser/`,
    //                 "GET",
    //                 null,
    //                 {
    //                     Authorization: 'Bearer ' + auth.token
    //                 }
    //             )


    //             setUserAndDictionary(responseData)
    //             //console.log(userAndDictionary)
    //         } catch (err) {

    //         }



    //     }


    //     fetchUserAndDictionary()

    // }, [sendRequest, auth.token])

    const [stripeSignup, setStripeSignup] = useState()


    const expressSignUp = async () => {

        setHomeMode(false)
        setSearchMode(false)
        setDictionaryFeedMode(false)
        setSponsorShips(false)
        setProfile(false)


        setStripeSignup(true)




        // try {
        //     const responseData = await sendRequest(
        //         `${process.env.REACT_APP_BACKEND_URL}/user/upgradeToBusiness`,
        //         "GET",
        //         null,
        //         {

        //             Authorization: 'Bearer ' + auth.token
        //         }
        //     )


        // } catch (err) {

        // }



    }


    const [toggleSponsorShips, setSponsorShips] = useState()

    const ssClick = () => {

        setHomeMode(false)
        setSearchMode(false)
        setUrDictionaryMode(false)
        setSecretDictionaryInputMode(false)
        setStripeSignup(false)
        setDictionaryFeedMode(false)
        setProfile(false)


        setSponsorShips(true)

    }

   

    const [toggleProfile, setProfile] = useState()


    const profileClick = () =>{

        setHomeMode(false)
        setSearchMode(false)
        setDictionaryFeedMode(false)
        setSponsorShips(false)


        setStripeSignup(false)

       
        setProfile(true)


    }


    return (

        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <div className="hs-background"> </div>
            {
                dictionaryNotCreated === 0 &&
                <div
                    className="createDictionary"
                >
                    <p

                    >hey guys u gotta create a dictionary before joining us</p>
                    <div >
                        <form onSubmit={handleSubmit(onSubmitNewDictionary)}>
                            <input {...register("cDictionary")} />
                            <button>create dictionary</button>
                        </form>
                    </div>
                </div>
            }
            {dictionaryCreated > 0 &&
                <div>

                    <div>
                        <aside className="hs--left-sidebar">
                            <div onClick={homeHandler} className="hs--left-sidebar-home">home</div>
                            <div onClick={dictionaryFeedHandler} className="hs--left-sidebar-logo">dictionary feed</div>
                            {/* <div onClick={urDictionaryHandler} className="hs--left-sidebar-urd">ur dictionary</div> */}
                            
                            <div onClick={profileClick} className="hs--left-sidebar-urd">profile</div>
                            {/* <button className="home--login">words</button>
                    <button className="home--signup">secret words</button> */}
                            <div className="hs--left-sidebar-sponsor" onClick={ssClick}> sponsorships</div>
                        </aside>
                    </div>

               
                    <div>
                        
                        

                        {
                            toggleProfile &&
                            userProfile &&

                            <ProfileContainer
                                userProfile={userProfile}
                                findUserPosts={findUserPosts}
                                findUserFollowers={findUserFollowers}
                                findUserFollowing={findUserFollowing}
                            />


                        }






                        {homeMode && loadedSplashFeed &&
                            <div>
                                <div >
                                <form onSubmit={handleSubmit(onSubmitSplash)}>
                                 <textarea 
   
                                    {...register("post")} className="splashes--input-input" />
                                        <br />

                                        <button  className="bttn-post splashes--input">post</button>
                                </form>
                                    
                                </div>

                                <SplashFeedList posts={loadedSplashFeed} />
                            </div>
                        }

                        {searchMode &&
                            <div>
                                <div className="home--search-star" onClick={starSearchHandler}> star </div>
                                {starSearch && userProfile && <StarsList stars={starData} dictionaryStatus={userProfile.following} />}
                                <div onClick={splashSearchHandler} className="home--search-splash"> post {splashHand.length} </div>
                                {splashHand1 && splashHand && <SplashList posts={splashHand} />}
                                <div onClick={dictionarySearchHandler} className="home--search-dictionary"> dictionary {dictionaryHand.length}</div>
                                {dictionaryHand1 && dictionaryHand && <DStarList star={dictionaryHand} />}
                                <div onClick={wordSearchHandler} className="home--search-word"> word {wordHand.length}</div>
                                {wordHand1 && wordHand && <WordList words={wordHand} />}
                                <div onClick={definitionSearchHandler} className="home--search-definition"> definition {definitionHand.length} </div>
                                {definitionHand1 && definitionHand && <DefinitionList words={definitionHand} />}
                                {/* <div onClick={secretWordSearchHandler} className="home--search-secretword"> secret word {secretWordHand.length} </div>
                                {secretWordHand1 && secretWordHand && <SecretWordList words={secretWordHand} />} */}
                                {/* <div className="home--search-secretworddefinition"> secret word definition {secretWordDefinitionHand.length}</div>
                                {secretWordDefinitionHand1 && secretWordDefinitionHand && <SecretWordDefinitionList />} */}
                            </div>
                        }

                        {
                            dictionaryFeedMode &&
                            <div>

                                {createADictionaryCard &&
                                    <div>
                                        <div className="createDictionary">
                                            <form onSubmit={handleSubmit(onSubmitNewDictionary)}>
                                                <input {...register("cDictionary")} />
                                                <button>create dictionary</button>
                                            </form>
                                        </div>
                                    </div>
                                }

                                {
                                    secretDictionaryInputMode &&
                                    <div>
                                        <button onClick={toggleSecretWord} className="dictionaryFeed-secretButton">secret</button>
                                        <button onClick={toggleWord} className="dictionaryFeed-notSecretButton">not secret</button>

                                        <div>
                                            <form onSubmit={handleSubmit(onSubmitSecretWord)}>
                                                <label className="dictionaryFeed-secretWordWordLabel">word</label>
                                                <input {...register("theWord")} className="dictionaryFeed-secretWordInput" />
                                                <label className="dictionaryFeed-secretWordDefinitionLabel">definition</label>
                                                <textarea  {...register("theDefinition")} className="dictionaryFeed-secretWordDefinitionInput" />
                                                <button onClick={() => reset()} className="dictionaryFeed-programButton">program</button>
                                            </form>
                                            <div>
                                                <SecretWordFeedList words={secretWordList} />
                                            </div>
                                        </div>
                                    </div>

                                }
                                {
                                    dictionaryInputMode && dictionaryFeed &&
                                    <div>
                                        <div>
                                            {/* <button onClick={toggleSecretWord} className="dictionaryFeed-secretButton">secret</button>
                                            <button onClick={toggleWord} className="dictionaryFeed-notSecretButton">not secret</button> */}

                                            <div>
                                                <form onSubmit={handleSubmit(onSubmitDictionaryWord)}>
                                                    <label className="dictionaryFeed-wordInput-label">word</label>
                                                    <input  className="dictionaryFeed-wordInput" {...register("word")} />

                                                    <label className="dictionaryFeed-definitionLabel">definition</label>
                                                    <textarea  className="dictionaryFeed-definitionInput" {...register("definition")} />
                                                    <label className="dictionaryFeed-etymology">etymology</label>
                                                    <textarea  className="dictionaryFeed-etymologyInput" {...register("etymology")} />


                                                    <button onClick={() => reset()} className="dictionaryFeed-programButton">program</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div >




                                            <DictionaryFeedList words={dictionaryFeed} />

                                            {/* {
                                            dictionaryFeed.map((x) =>
                                                <div >
                                                    <div style={{ color: "rgb(3, 177, 235)" }}>{x.word.definiteWord}</div>
                                                    <div>
                                                        {x.definition.map((z) =>
                                                            <div>{z.aDefinition}</div>
                                                        )}
                                                    </div>
                                                    <div><label className="dictionaryFeed-origin">-ORIGIN</label> {x.etymology}</div>
                                                    <div>
                                                        {x.date}
                                                    </div>
                                                    <div> <DictionaryFeedItem dictionary={x.dictionary} /> </div>

                                                </div>
                                            )

                                        } */}
                                        </div>
                                        {/* <DictionaryFeedList words={dictionaryFeed} /> */}
                                    </div>
                                }

                            </div>
                        }


                        {
                            stripeSignup &&
                            <StripeContainer update={setToUpdate} accEmail={userProfile.email} isAccount={userProfile.stripeBusinessId} />
                        }

                        {
                            toggleSponsorShips &&
                            <SScontainer userProfile={userProfile} />
                        }


            
                    </div> 
                        
                    <div>
                        <aside className="hs--right-sidebar">

                                <button className="bttn-logout hs--right-sidebar-search" onClick={auth.logout}>logout</button>
                                <div>
                                <form onSubmit={handleSubmit(onSubmitSearch)}>
                                    <div className="search-padding">
                                    <input placeholder="search" {...register("searchBar")}  />

                                    <button  className="bttn-search" >search </button>
                                    </div>
                                </form>
                                </div>
                           
                        </aside>

                        <div className="hs--right-sidebar-expressSignUp">
                            {
                                !userProfile.stripeBusinessId &&
                                <div>
                                    <div>go pro</div>
                                    <button className="bttn-update" onClick={expressSignUp}>upgrade {toUpdate}</button>
                                </div>
                            }
                            {
                                userProfile.stripeBusinessId &&
                                <div>
                                    <div >update ur account</div>
                                    <button className="bttn-update" onClick={expressSignUp}> update </button>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            }

        </React.Fragment>
    )
}




export default React.memo(HomeScreen)
