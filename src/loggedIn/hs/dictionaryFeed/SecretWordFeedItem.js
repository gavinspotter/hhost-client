import React from 'react'
import SecretWordFeedDefinition from './SecretWordFeedDefinition'

const SecretWordFeedItem = (props) => {
    return (
        <div>
            <div style={{ color: "rgb(3, 177, 235)" }}>{props.word}</div>
            <div><SecretWordFeedDefinition definition={props.definition} /> </div>
            <div>{props.date}</div>
        </div>
    )
}

export default SecretWordFeedItem
