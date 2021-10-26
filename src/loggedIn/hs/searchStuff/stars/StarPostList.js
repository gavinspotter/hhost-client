import React from 'react'
import StarPostItem from './StarPostItem'

import "../../../../css/style.css"

const StarPostList = (props) => {
    return (
        <div className="starSearchSplashes">
            {props.love.map((x) =>
                <StarPostItem
                    username={props.user}
                    key={x._id}
                    id={x._id}
                    post={x.post}
                    date={x.date}

                />
            )}
        </div>
    )
}

export default StarPostList
