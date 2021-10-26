import React, { useState, useContext, useEffect } from 'react'

import { useForm } from "react-hook-form"


import { useHttpClient } from "../../../../shared/hooks/http-hook"

import { AuthContext } from "../../../../shared/context/auth-context"
import Modal from '../../../../shared/components/UIElements/Modal'
import LoadingSpinner from '../../../../shared/components/UIElements/LoadingSpinner'

const IncContractsitem = (props) => {


    const auth = useContext(AuthContext)

    const { register, handleSubmit } = useForm()


    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const [company, setCompany] = useState()

    const [aSponsor, setASponsor] = useState()


    useEffect(() => {

        const getCompany = async () => {

            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/getAUser/${props.sponsor}`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )
                setASponsor(responseData.company.username)
                if (props.tookContract === true) {
                    setCheck("✅")
                } else {
                    setCheck("☑️")
                }
            } catch (err) {

            }

        }
        getCompany()



    }, [props.sponsor, auth.token, sendRequest, props.tookContract])


   
    const [check, setCheck] = useState()

    // if (props.tookContract === true) {
    //     setCheck("✅")
    // } else {
    //     setCheck("☑️")
    // }

    const toString = props.price.toString()


    const fullLength = toString.length

    const priceStringLength = toString.length - 2

    const dectatePrice = toString.slice(0, priceStringLength) + "." + toString.slice(priceStringLength)

    const [isPosted, setIsPosted] = useState()


    const acceptSS = async (data) => {

        try {

            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/contractAPost`,
                "POST",
                JSON.stringify({
                    post: data.post,
                    contractId: props.contractId
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token
                }
            )

        } catch (err) {

        }



        props.sponsorship("2")





    }

    const [ssInput, setssInput] = useState(false)

    const toggleAcceptButton = () => {
        if (ssInput === false) {
            setssInput(true)
        } else if (ssInput === true) {
            setssInput(false)
        }
    }


    const posted = () => {

        setIsPosted(true)

    }


    return (
        <div>
        {isLoading && <LoadingSpinner asOverlay />}
        <div >

            
            <div>{aSponsor}</div>
            <div>{dectatePrice}</div>
            {props.post &&
            <div>
                <div>{props.post}</div>
            </div>
            }

            {props.contractedPost &&
                <div>{props.contractedPost}</div>
            }
            { props.date &&
                <div>

                    <div>{props.date}</div>
                    <div>{check}</div>
                </div>
            }
            

            {/* {
                isPosted &&
                <div>
                    posted.
                     </div>
            } */}


            { !isPosted && !props.contractedPost &&
                <div>

                    {check &&
                        !ssInput &&

                        <div>

                            <div onClick={toggleAcceptButton}>{check}accept</div>

                        </div>
                    }
                    {check && ssInput &&
                        <div>
                            <div>
                                <form>
                                    <textarea
                                        {...register("post")}
                                    />
                                    <div onClick={handleSubmit(acceptSS)}> $ post $ </div>
                                </form>
                            </div>
                            <div onClick={toggleAcceptButton}>{check}nvm</div>
                        </div>
                    }
                </div>
            }

        </div>
        </div>
    )
}

export default IncContractsitem
