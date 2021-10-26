import React from 'react'

const DictionaryFeedItemDefinition = (props) => {
    return (
        <div>
            <div className=" dictionaryFeed-definitionAndOrigin">- {props.aDefinition}</div>
        </div>
    )
}

export default DictionaryFeedItemDefinition
