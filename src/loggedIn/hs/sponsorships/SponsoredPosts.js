import React, { useContext, useEffect, useRef, useState } from 'react'

import { useHttpClient } from "../../../shared/hooks/http-hook"

import { AuthContext } from "../../../shared/context/auth-context"

import io from "socket.io-client"

import IncContractsList from './incContracts/IncContractsList'

const SponsoredPosts = (props) => {

    // const socket = useRef(null)

    const auth = useContext(AuthContext)

    const [contracts, setContracts] = useState()


    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const [ssUpdate, setssUpdate] = useState([])


    useEffect(() => {

        const getContracts = async () => {

            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/findSSPosts`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                console.log(responseData)

                setContracts(responseData.findPSS)



                // socket.on("update", setContracts(responseData.findPSS)

                // )

            } catch (err) {

            }


        }

        getContracts()



    }, [auth.token, sendRequest])



    const getUpdate = async () => {
        // socket.current.on("update", update => {
        //     setContracts(prevState => [...prevState, update])
        // }

        // )

        // try {
        //     const responseData = await sendRequest(
        //         `${process.env.REACT_APP_BACKEND_URL}/user/findSSPosts`,
        //         "GET",
        //         null,
        //         {
        //             Authorization: 'Bearer ' + auth.token
        //         }
        //     )

        //     console.log(responseData)

        //     // setContracts(responseData.findPSS)

        //     // socket.current.on("update", update => {
        //     //     setContracts(prevState => [...prevState, update])
        //     // }

        //     // )

        //     socket.current.emit("update", responseData.findPSS)

        //     // socket.on("update", setContracts(responseData.findPSS)

        //     // )

        // } catch (err) {

        // }


    }


    useEffect(() => {
        const socket = io("http://10.0.0.16:5001")

        socket.on("update", update => {
            setContracts(prevState => [...prevState, update])
        }

        )
    }, [])



    const [acceptSS, setAcceptSS] = useState(1)


    useEffect(() => {

        const getContracts = async () => {

            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/findSSPosts`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                console.log(responseData)


                setContracts(responseData.findPSS)


            } catch (err) {

            }


        }

        getContracts()



    }, [sendRequest, auth.token, acceptSS])



    return (
        <div className="ss-SSFeed">

           
            { contracts &&
                <IncContractsList sponsorship={setAcceptSS} contracts={contracts} />}


        </div>
    )
}

export default SponsoredPosts
