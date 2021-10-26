import React from 'react'
import DictionaryItem from './DictionaryItem'

const DictionaryList = (props) => {
    return (
        <div>
            { props.dictionary.map((data) =>
                <DictionaryItem
                    dictionaryName={data.dictionaryName}
                />
            )}
        </div>
    )
}

export default DictionaryList
