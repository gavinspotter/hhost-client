import React from 'react'
import SplashItem from './SplashItem'

import "../../../../css/style.css"

const SplashList = (props) => {
    return (
        <div className="splash--list">
            {props.posts.map((data) =>
                <SplashItem
                    key={data._id}

                    post={data.post}
                    date={data.date}
                />
            )}
        </div>
    )
}

export default SplashList
