import React from 'react'
import StarsItem from './StarsItem'

import "../../../../css/style.css"

const StarsList = (props) => {



    return (
        <div className="star--list">
            {props.stars.map((data) =>
                <StarsItem

                    key={data._id}
                    star={data.username}
                    dictionaryStatus={props.dictionaryStatus}
                />
            )}
        </div>
    )
}

export default StarsList
