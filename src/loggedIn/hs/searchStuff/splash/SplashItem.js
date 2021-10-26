import React from 'react'

const SplashItem = (props) => {
    return (
        <div>
            <div>
                {props.post}
            </div>

            <div>
                {props.date}
            </div>
        </div>
    )
}

export default SplashItem
