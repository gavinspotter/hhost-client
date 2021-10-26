import React, { useState, useContext } from 'react'


import { useHttpClient } from "../../../shared/hooks/http-hook"
import { AuthContext } from "../../../shared/context/auth-context"

import "../../../css/style.css"
import SponsorAPost from './SponsorAPost'
import PostsUSponsor from './PostsUSponsor'
import SponsoredPosts from './SponsoredPosts'



const SScontainer = (props) => {

    const auth = useContext(AuthContext)



    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const [togglePostSS, setPostSS] = useState()

    const [SP, setSP] = useState(true)

    const [PUS, setPUS] = useState()

    const [SAP, setSAP] = useState()

    const toggleSponsorAPost = () => {


        setPUS(false)
        setSP(false)
        setSAP(true)

    }

    const togglePostsUSponsor = () => {
        setSP(false)
        setSAP(false)
        setPUS(true)
    }

    const toggleSponsoredPosts = () => {
        setSAP(false)
        setPUS(false)
        setSP(true)
    }





    return (
        <div className="ss-container">

            
            <div className="ss-container-SP" onClick={toggleSponsoredPosts}>sponsorships </div>
            { SP &&
                <SponsoredPosts />}
            <div className="ss-container-SAP" onClick={toggleSponsorAPost}>sponsor a post</div>
            { SAP &&
                <SponsorAPost />
            }
            <div className="ss-container-PUS" onClick={togglePostsUSponsor}>posts you sponsor</div>
            {   PUS &&
                <PostsUSponsor userProfile={props.userProfile} />}






        </div>
    )
}

export default SScontainer
