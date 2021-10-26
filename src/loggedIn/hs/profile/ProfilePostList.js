import React from 'react'

const ProfilePostList = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                {props.findUserPosts.map(x => 
                    
                    <div>
                    <div>
                        {x.post}
                    </div>
                    <div>
                        {x.date}
                    </div>
                    </div>

                    )}
            </div>
            
        </div>
    )
}

export default ProfilePostList
