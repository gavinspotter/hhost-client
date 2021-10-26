import React from 'react'
import StarDictionaryWordsItem from './StarDictionaryWordsItem'

const StarDictionaryWordsList = (props) => {
    return (
        <div className>
            {props.love.map((x) =>
                <StarDictionaryWordsItem
                    id={x._id}
                    key={x._id}
                    word={x.word}
                    definition={x.definition}
                    etymology={x.etymology}
                    date={x.date}
                    dictionary={props.dictionary}
                />
            )}
        </div>
    )
}

export default StarDictionaryWordsList
