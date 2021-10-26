import React from 'react'

const SecretWordItem = (props) => {
    return (
        <div>
            <div>{props.word}</div>
            <div>{props.definition.map((data) =>
                <div>{data}</div>
            )}</div>
        </div>
    )
}

export default SecretWordItem
