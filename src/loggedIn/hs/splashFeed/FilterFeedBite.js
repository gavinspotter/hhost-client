import React, { useState, useEffect } from 'react'

import { useHttpClient } from "../../../shared/hooks/http-hook"

import "../../../css/style.css"

const FilterFeedBite = (props) => {



    const [query, setQuery] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const removeTilda = props.query.substring(1)

    const [isAWord, setIsAWord] = useState()

    useEffect(() => {

        if (props.query.charAt(0) === "~") {
            const fetchTildadWords = async () => {
                try {
                    const responseData = await sendRequest(
                        `${process.env.REACT_APP_BACKEND_URL}/user/dictionarySWQuery/${removeTilda}/${props.crumDictionary}`
                    )



                    if (responseData.length > 0) {
                        setIsAWord("is a word")
                    }

                    responseData.findWord.length === 1 ? setQuery(responseData.findWord[0]) : setQuery({
                        word: { definiteWord: "thats not a word" },
                        definition: [
                            { aDefinition: "that doesnt have a definition" },],
                        etymology: "unknown"

                    })
                } catch (err) {

                }




            }

            fetchTildadWords()

        }

    }, [sendRequest, props.crumDictionary, props.query, removeTilda])



    // useEffect(() => {


    //     const fetchTildadWords = async () => {
    //         try {
    //             const responseData = await sendRequest(
    //                 `${process.env.REACT_APP_BACKEND_URL}/user/dictionarySWQuery/${props.query}/${props.crumDictionary}`
    //             )

    //         } catch (err) {

    //         }



    //     }

    //     fetchTildadWords()



    // }, [sendRequest, props.crumDictionary, props.query])

    const [clickWord, setClickWord] = useState()

    const toggleWord = async () => {
        // if (clickWord === true) {
        //     setClickWord(false)
        // } else if (clickWord === false) {

        // }



        setOg(false)
        setClickWord(true)
        setWord(true)


    }

    const toggleWordDown = () => {
        setClickWord(false)
        setWord(false)
        setOg(true)
    }


    const [og, setOg] = useState(true)

    const [word, setWord] = useState();





    return (<span>

        { word &&
            <span onClick={toggleWordDown}>
                {
                    clickWord &&
                    <div className="tildaWord">
                        <span className="tildaWord-relative">
                            <div className="tildaWord-inside">
                                <div className="tildaWord-fullwidth" style={{ color: "rgb(3, 177, 235)" }}>
                                    {query.word.definiteWord}
                                </div>
                                <div>
                                    {query.definition.map((x) =>
                                        <div className="tildaWord-fullwidth">- {x.aDefinition} </div>
                                    )}
                                </div>
                                <div className="tildaWord-fullwidth"><span className="dictionaryFeed-origin">-ORIGIN&nbsp;</span>{query.etymology}</div>
                            </div>
                        </span>
                    </div>
                }
                {props.query}&nbsp;
        </span>}
        { og &&
            <span onClick={toggleWord}>

                {props.query}&nbsp;
        </span>}
    </span>
    )
}

export default FilterFeedBite
