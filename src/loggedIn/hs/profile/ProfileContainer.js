import React from 'react'
import ProfilePostList from './ProfilePostList'

const ProfileContainer = (props) => {





    return (
        <div className="star--list">
            <h3>
                {props.userProfile.username}
            </h3>
            

            <ProfilePostList
            findUserPosts={props.findUserPosts}
            />

        </div>
    )
}

export default ProfileContainer
