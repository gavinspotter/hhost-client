import React from 'react'
import DictionaryList from './DictionaryList'

const DStarItem = (props) => {
    return (
        <div>
            <div>{props.star}</div>
            <DictionaryList
                dictionary={props.dictionary}
            />
        </div>
    )
}

export default DStarItem
