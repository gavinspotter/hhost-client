import React, {useContext, useEffect, useState} from 'react'

import {useHttpClient} from "../../../../shared/hooks/http-hook"

import {AuthContext} from "../../../../shared/context/auth-context"

const OGContractsList = (props) => {


const auth = useContext(AuthContext)

const { isLoading, error, sendRequest, clearError } = useHttpClient()

const [ssPosts, setssPosts] = useState()

useEffect(()=> {

    const fetchPostSponsorShips = async () => {

        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/getPostsYouSponsor`,
                "GET",
                null,
                {
                    Authorization: 'Bearer ' + auth.token
                }
            )
            
            setssPosts(responseData.findBusPosts)
            
            

            
        } catch (err) {

        }


    }

    fetchPostSponsorShips()


}, [sendRequest, auth.token])



    return (
        <div>

            {ssPosts &&
            ssPosts.map(x => 
                <div className="ssBorder">
                    <div>
                        {x.price}
                    </div>
                    <div>
                        {x.receiver.map(x =>
                        <div>
                        { x.tookContract &&
                            <div>
                                <div>
                                    {x.contractedPost}
                                </div>
                                <div>{x.date}</div>
                                
                            </div>}
                            {
                                !x.tookContract &&
                                <div>
                                    pending...
                                </div>
                            }

                            </div>
                            )}
                        
                    </div>

                </div>
                ).reverse()}
        </div>
    )
}

export default OGContractsList
