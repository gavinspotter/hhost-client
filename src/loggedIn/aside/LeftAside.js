import React from 'react'

import '../../css/style.css'

const LeftAside = () => {
    return (
        <div>
            <aside className="hs--left-sidebar">
                <div className="hs--left-sidebar-logo">dictionary</div>
                <div className="hs--left-sidebar-home">home</div>
                <div className="hs--left-sidebar-profile">profile</div>
                {/* <button className="home--login">words</button>
                    <button className="home--signup">secret words</button> */}
            </aside>
        </div>
    )
}

export default LeftAside
