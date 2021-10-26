import React, { useState, useEffect } from 'react'
import SplashFeedItem from './SplashFeedItem'

import { useHttpClient } from "../../../shared/hooks/http-hook"


import "../../../css/style.css"

const SplashFeedList = (props) => {




    return (
        <div className="splashes">
            {props.posts.map((data) =>
                <SplashFeedItem
                    key={data._id}
                    postID={data._id}
                    creator={data.creator}
                    aPost={data.post}
                    postDate={data.date}
                    hearts={data.hearts}

                />
            )}
        </div>
    )
}

export default SplashFeedList
