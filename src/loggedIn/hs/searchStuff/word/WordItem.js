import React from 'react'

const WordItem = (props) => {
    return (
        <div>
            <div>{props.word}</div>
            <div>{props.like} 👍</div>
            <div>{props.dejuncture}🐍 </div>
        </div>
    )
}

export default WordItem
