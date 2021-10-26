import React, { useEffect, useState } from 'react'

import { useHttpClient } from "../../../shared/hooks/http-hook"
import FilterFeedCrum from './FilterFeedCrum'

const FilterFeedItem = (props) => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const [filteredItem, setFilteredItem] = useState()


    // yourText.split(' ').filter(v=> v.startsWith('#'))


    const aPost = props.sentence

    useEffect(() => {


        const fetchTildadWords = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/dictionarySWQuery/`
                )

            } catch (err) {

            }
        }



    }, [])






    const dictionaryQuery = props.sentence.split(" ")

    const onlyTildad = dictionaryQuery.filter(x => x.charAt(0) === "~")



    const hi = props.sentence.match(/~[a-z]+/gi);




    const sentenceDisplay = hi ? (<div>
        <FilterFeedCrum
            crumSentence={dictionaryQuery}
            crumDictionary={props.crumDictionary}

        />
    </div>) : (<div>
        {props.sentence}
    </div>)

    return (
        <div>
            {sentenceDisplay}
        </div>
    )



}

export default FilterFeedItem
