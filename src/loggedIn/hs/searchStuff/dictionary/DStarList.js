import React from 'react'
import DStarItem from './DStarItem'

const DStarList = (props) => {
    return (
        <div className="dictionarys--list">
            {props.star.map((data) =>
                <DStarItem
                    key={data._id}
                    star={data.username}
                    dictionary={data.dictionarys}
                />
            )}
        </div>
    )
}

export default DStarList
