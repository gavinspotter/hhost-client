import React from 'react'





import "../../../css/style.css"
import OGContractsList from './outgoingContracts/OGContractsList'

const PostsUSponsor = (props) => {
    return (
        <div>
            <div className="ss-SSFeed">
            <OGContractsList postsList={props.userProfile} />

        </div>
        </div>
    )
}

export default PostsUSponsor
