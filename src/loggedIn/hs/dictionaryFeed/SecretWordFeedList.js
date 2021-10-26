import React from 'react'
import SecretWordFeedItem from './SecretWordFeedItem'

const SecretWordFeedList = (props) => {
    return (
        <div className="dictionaryFeed">
            {props.words.map((data) =>
                <SecretWordFeedItem
                    key={data._id}
                    definition={data.definition}
                    word={data.word}
                    date={data.date}
                />
            )}
        </div>
    )
}

export default SecretWordFeedList
