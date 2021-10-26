import React from 'react'
import SecretWordItem from './SecretWordItem'

const SecretWordList = (props) => {
    return (
        <div className="secretWord">
            {
                props.words.map((data) =>
                    <SecretWordItem
                        word={data.word}
                        definition={data.definition}
                    />
                )
            }
        </div>
    )
}

export default SecretWordList
