import React from 'react'

const StarDictionaryWordsItem = (props) => {
    return (
        <div>
            <div>
                {props.word.definiteWord}
            </div>
            <div>
                {props.definition.map((x) =>
                    <div>
                        -{x.aDefinition}
                    </div>
                )}
            </div>
            <div>-ORIGIN {props.etymology}</div>
            <div>{props.date}</div>

        </div>
    )
}

export default StarDictionaryWordsItem
