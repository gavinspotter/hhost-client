import React from 'react'
import FilterFeedBite from './FilterFeedBite'

const FilterFeedCrum = (props) => {



    return (
        <div>
            {props.crumSentence.map((x) =>
                <span>
                    <FilterFeedBite
                        query={x}
                        crumDictionary={props.crumDictionary}
                    />
                </span>
            )}
        </div>
    )
}

export default FilterFeedCrum
