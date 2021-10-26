import React, { useContext, useEffect, useState } from 'react'
import IncContractsitem from './IncContractsitem'
import { AuthContext } from "../../../../shared/context/auth-context"

import { useHttpClient } from "../../../../shared/hooks/http-hook"

const IncConctractsList = (props) => {


    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    

    // const urContract = props.contracts.receiver.find(x => `${x.contracted}` === `${auth.userId}`)

    // const [aSponsor, setASponsor] = useState()

    // useEffect(() => {
    //     const getCompany = async () => {

    //         try {
    //             const responseData = await sendRequest(
    //                 `${process.env.REACT_APP_BACKEND_URL}/user/getAUser/${props.contracts.creator}`,
    //                 "GET",
    //                 null,
    //                 {
    //                     Authorization: 'Bearer ' + auth.token
    //                 }
    //             )
    //             setASponsor(responseData.company.username)
    //         } catch (err) {

    //         }

    //     }
    //     getCompany()


    // }, [sendRequest, auth.token, props.contracts.creator])



    return (
        <div className="">


            {props.contracts.map((x) =>




                <IncContractsitem
                    key={x._id}
                    sponsor={x.creator}
                    price={x.price}
                    contractId={x._id}
                    sponsorship={props.sponsorship}
                    post={x.post}

                    date={x.receiver.find(x => `${x.contracted}` === `${auth.userId}`).date}
                    tookContract={x.receiver.find(x => `${x.contracted}` === `${auth.userId}`).tookContract}
                    contractedPost={x.receiver.find(x => `${x.contracted}` === `${auth.userId}`).contractedPost}
                />
            ).reverse()}

        </div>
    )
}

export default IncConctractsList
