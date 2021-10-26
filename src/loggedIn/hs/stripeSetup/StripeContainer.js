import React from 'react'
import UpdateContainer from './UpdateContainer'
import UpgradeContainer from './UpgradeContainer'

const StripeContainer = (props) => {





    return (



        <div>

            {
                !props.isAccount &&
                <div>
                    <UpgradeContainer accEmail={props.accEmail} isAcct={props.update} />
                    isnt account
                </div>

            }

            {
                props.isAccount &&

                <div>

                    <UpdateContainer />

                </div>

            }
        </div>
    )
}

export default StripeContainer
