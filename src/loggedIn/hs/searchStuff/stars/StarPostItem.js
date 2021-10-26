import React from 'react'

const StarPostItem = (props) => {
    return (
        <div>
            <div>{props.username}</div>
            <div>{props.post}</div>
            <div>{props.date}</div>
        </div>
    )
}

export default StarPostItem
