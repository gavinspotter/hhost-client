import React from 'react'
import WordItem from './WordItem'

const WordList = (props) => {
    return (
        <div className="word--list">
            {props.words.map((data) =>
                <WordItem
                    key={data._id}
                    word={data.word.definiteWord}
                    like={data.like.length}
                    dejuncture={data.dejuncture.length}
                    dictionary={data.dictionary}
                />
            )}
        </div>
    )
}

export default WordList
