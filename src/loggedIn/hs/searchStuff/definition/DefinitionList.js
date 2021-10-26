import React from 'react'
import DefinitionItem from './DefinitionItem'

import "../../../../css/style.css"

const DefinitionList = (props) => {
    return (
        <div className="definitions">
            {props.words.map((data) =>
                <DefinitionItem
                    key={data._id}
                    word={data.word.definiteWord}
                />
            )}
        </div>
    )
}

export default DefinitionList
