import React, { useContext, useEffect, useState } from 'react'

import { useForm } from "react-hook-form"


import { AuthContext } from "../../../shared/context/auth-context"
import { useHttpClient } from "../../../shared/hooks/http-hook"

import "../../../css/style.css"
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../../shared/components/UIElements/ErrorModal'


const UpdateContainer = (props) => {


    const auth = useContext(AuthContext)


    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const { register, handleSubmit } = useForm()


    const onSubmit = async (data) => {

        console.log(data.cardNumber)

        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/user/updateBizDetails`,
                "POST",
                JSON.stringify({
                    email: data.email,
                    bizType: data.bizType,
                    bizUrl: data.bizUrl,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    city: data.city,
                    state: data.state,
                    address: data.address,
                    zipCode: data.zipCode,
                    dobMonth: data.month,
                    dobDay: data.day,
                    dobYear: data.year,
                    phoneNumber: data.phoneNumber,
                    ssn: data.ssn,
                    cardNumber: data.cardNumber,
                    expMonth: data.expMonth,
                    expYear: data.expYear,
                    CVC: data.cvc


                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token

                }
            )




        } catch (err) {

        }

        const fetchRequirements = async () => {
            try {
                const requestData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/retrieveStripeAcct`,
                    "GET",
                    null,
                    {

                        Authorization: 'Bearer ' + auth.token
                    }
                )


                setStripeAccount(requestData.account)



            } catch (err) {

            }
        }

        fetchRequirements()



    }

    const [stripeAccount, setStripeAccount] = useState()

    const [hasFirstName, setHasFirstName] = useState(true)

    const editFirstName = () => {
        setHasFirstName(false)
    }

    useEffect(() => {

        const fetchRequirements = async () => {
            try {
                const requestData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/user/retrieveStripeAcct`,
                    "GET",
                    null,
                    {

                        Authorization: 'Bearer ' + auth.token
                    }
                )


                setStripeAccount(requestData.account)



            } catch (err) {

            }
        }

        fetchRequirements()

    }, [sendRequest, auth.token])


    const [accountToggle, setAccountToggle] = useState(true)


    const submitCard = () => { }

    const submitBankAccount = async () => {

        try {
            await sendRequest(

            )
        } catch (err) {

        }

    }

    const togglePaymentType = () => {

        if (accountToggle === false) {
            setAccountToggle(true)
            
        } else if (accountToggle === true) {
            setAccountToggle(false)
        }
        
    }

    const [bizSelector, setBizSelector] = useState()

    const selectorList = () => {
        if (bizSelector === false) {
            setBizSelector(true)
        } else if (bizSelector === true) {
            setBizSelector(false)
        }

    }


   

    const [handleBizUrl, setHandleBizUrl] = useState(false)


    const bizUrl = () => {

    }

    const [handleFirstName, setHandleFirstName] = useState(false)

    const firstName = () => {

    }

    const [handleLastName, setHandleLastName] = useState(false)

    const lastName = () => {
        if (handleLastName === false) {
            setHandleLastName(true)
        } else if (handleLastName === true) {
            setHandleLastName(false)
        }
    }

    const [lnInput, setlnInput] = useState()

    const [handleCity, setHandleCity] = useState(false)

    const city = () => {
        if (handleCity === false) {
            setHandleCity(true)
        } else if (handleCity === true) {
            setHandleCity(false)
        }
    }

    const [cInput, setcInput] = useState()


    const [handleState, setHandleState] = useState(false)

    const state = () => {
        if (handleState === false) {
            setHandleState(true)
        } else if (handleState === true) {
            setHandleState(false)
        }
    }

    const [sInput, setsInput] = useState()


    const [handleAddress, setHandleAddress] = useState(false)

    const address = () => {
        if (handleAddress === false) {
            setHandleAddress(true)
        } else if (handleAddress === true) {
            setHandleAddress(false)
        }
    }

    const [aInput, setaInput] = useState()


    const [handleZipCode, setHandleZipCode] = useState(false)

    const zipCode = () => {
        if (handleZipCode === false) {
            setHandleZipCode(true)
        } else if (handleZipCode === true) {
            setHandleZipCode(false)
        }
    }

    const [zcInput, setzcInput] = useState()


    const [handleDob, setHandleDob] = useState(false)

    const dob = () => {
        if (handleDob === false) {
            setHandleDob(true)
        } else if (handleDob === true) {
            setHandleDob(false)
        }
    }

    const [dobInput, setdobInput] = useState(false)

    const dobInputHandler = () => {
        if (dobInput === false) {
            setdobInput(true)
        } else if (dobInput === true) {
            setdobInput(false)
        }
    }

    const [handlePhoneNumber, setHandlePhoneNumber] = useState(false)

    const phoneNumber = () => {
        if (handlePhoneNumber === false) {
            setHandlePhoneNumber(true)
        } else if (handlePhoneNumber === true) {
            setHandlePhoneNumber(false)
        }
    }

    const [pnInput, setpnInput] = useState(false)

    const pnInputHandler = () => {
        if (pnInput === false) {
            setpnInput(true)
        } else if (pnInput === true) {
            setpnInput(false)
        }
    }


    const [handleSsn, setHandleSsn] = useState(false)

    const ssn = () => {
        if (handleSsn === false) {
            setHandleSsn(true)
        } else if (handleSsn === true) {
            setHandleSsn(false)
        }
    }

    const [ssnInput, setsnsInput] = useState(false)

    const ssnInputHandler = () => {
        if (ssnInput === false) {
            setsnsInput(true)
        } else if (ssnInput === true) {
            setsnsInput(false)
        }
    }

    const [updateCard, setUpdateCard] = useState(false)

    const updateCardInputHandler = () => {
        if (updateCard === false) {
            setUpdateCard(true)
        } else if (updateCard === true) {
            setUpdateCard(false)
        }
    }

    const [firstNameInput, setFirstNameInput] = useState(false)

    const toggleFirstName = () => {

  
            if (firstNameInput === false) {
                setFirstNameInput(true)
            } else if (firstNameInput === true) {
                setFirstNameInput(false)
            }
        

    }

    const [businessUrlInput, setBusinessUrlInput] = useState(false)

    const toggleBusinessUrlInput = () => {

        if (businessUrlInput === false) {
            setBusinessUrlInput(true)
        } else if (businessUrlInput === true) {
            setBusinessUrlInput(false)
        }


    }

    const [emailInput, setEmailInput] = useState(false)


    const toggleEmailInput = () => {

        if (emailInput === false) {
            setEmailInput(true)
        } else if (emailInput === true) {
            setEmailInput(false)
        }

    }








    return (
        <div className="stripe-setup">
            <ErrorModal error={error} onClear={clearError} />

            {isLoading && <LoadingSpinner asOverlay />}

            { stripeAccount &&
                <form>
                    <button className="bttn-update" onClick={handleSubmit(onSubmit)}> save changes</button>
                    <br />

                    <br />
                    <span>✅</span>
                    <label>email:</label>
                    {stripeAccount.email}

                    <br />
              
                    {
                        !emailInput &&
                        <div>
                                  
                                  <div className="bttn-update" onClick={toggleEmailInput}>edit</div>
                        </div>
                    }
                    {
                        emailInput &&
                        <div>
                            <input {...register("email")} defaultValue={stripeAccount.email} />
                            <div className="bttn-update" onClick={toggleEmailInput}>nvm</div>
                        </div>
                    }

                    <hr/>
                    <br />
                    <p>depending on what ur business is individual, company, non profit, or government entity, the qualifications to buy and deploy ad's will be different.</p>
                    business:{stripeAccount.business_type}
                    <br />
                    


                    {stripeAccount.business_type}
                    {
                        bizSelector &&

                        <select  {...register("bizType")}>
                            <option value={stripeAccount.business_type}></option>
                            <option value="individual">individual</option>
                            <option value="company">company</option>
                            <option value="non_profit">non profit</option>
                            <option value="government_entity">government organization</option>
                        </select>

                    }


                    {/* {
                        !bizSelector &&
                        <div onClick={selectorList}>change</div>
                    } */}

                    {bizSelector &&
                        <div onClick={selectorList}>nvm</div>}
                    <br />


                    {(stripeAccount.requirements || stripeAccount) &&

                        <div>
                            {

                                stripeAccount.requirements.currently_due.find(x => x === "business_profile.url") &&
                                <div>
                                    <hr />
                                    <p> we're going to need a url for your business. click profile to make it ur homepage on the heavinlyhost</p>

                                    <label>business url:</label>
                                    <input {...register("bizUrl")} />
                                </div>

                            }

                            {
                                stripeAccount.business_profile.url &&
                                <div>
                                    <hr />
                                    <p> we're going to need a url for your business.</p>
                                    <span>✅</span>

                                    <label>business url:</label>
                                    <span>{stripeAccount.business_profile.url}</span>
                                    { !businessUrlInput &&

                                    <div>
                                       
                                        <div className="bttn-update" onClick={toggleBusinessUrlInput}>edit</div>
                                    </div>

                                    }
                                    {
                                        businessUrlInput &&
                                        <div>
                                        <input value={stripeAccount.business_profile.url}{...register("bizUrl")} />
                                        <div className="bttn-update" onClick={toggleBusinessUrlInput}>nvm</div>
                                        </div>
                                    }

                         
                                </div>
                            }


                            {
                                stripeAccount.requirements.currently_due.find(x => x === "individual.first_name") &&

                                <div>
                                    <hr />
                                    <label> first name:</label>
                                    <input {...register("firstName")} />

                                </div>
                            }


                            {stripeAccount.individual &&
                                stripeAccount.individual.first_name &&

                                <div>
                                    <hr />
                                    <span>✅</span>
                                    <label> first name:</label>
                                    <span>{stripeAccount.individual.first_name}</span>
                                    {!firstNameInput &&

                                    <div> 
                                      
                                        <div className="bttn-update" onClick={toggleFirstName}>edit</div>
                                        </div>
                                        }
                                    {firstNameInput &&
                                        <div>
                                        <input value={stripeAccount.individual.first_name} {...register("firstName")} />
                                        <div className="bttn-update" onClick={toggleFirstName}>nvm</div>
                                        </div>
                                    }
                                    

                                </div>
                            }

                            {
                                stripeAccount.requirements.currently_due.find(x => x === "individual.last_name") &&

                                <div>
                                    <hr />
                                    <label> last name:</label>
                                    <input {...register("lastName")} />

                                </div>
                            }

                            {stripeAccount.individual &&
                                stripeAccount.individual.last_name &&

                                <div>
                                    <hr />
                                    <span>✅</span>
                                    <label> last name:</label>
                                    <span>{stripeAccount.individual.last_name}</span>



                                    {
                                        handleLastName &&
                                        <div>
                                            <input defaultValue={stripeAccount.individual.last_name} {...register("lastName")} />
                                            <div className="bttn-update" onClick={lastName}>nvm</div>
                                        </div>
                                    }

                                    {!handleLastName &&
                                        <div className="bttn-update" onClick={lastName}>edit</div>}
                                </div>
                            }

                            {
                                stripeAccount.requirements.currently_due.find(x => x === "individual.address.city") &&

                                <div>
                                    <hr />
                                    <label> city:</label>
                                    <input {...register("city")} />

                                </div>
                            }

                            {stripeAccount.individual &&
                                stripeAccount.individual.address.city &&


                                <div>
                                    <hr />
                                    <span>✅</span>
                                    <label> city:</label>
                                    <span>{stripeAccount.individual.address.city}</span>

                                    {
                                        handleCity &&
                                        <div><input defaultValue={stripeAccount.individual.address.city} {...register("city")} />
                                            <div className="bttn-update" onClick={city}>nvm</div>
                                        </div>
                                    }

                                    {
                                        !handleCity &&

                                        <div className="bttn-update" onClick={city}>edit</div>
                                    }

                                </div>
                            }

                            {
                                stripeAccount.requirements.currently_due.find(x => x === "individual.address.state") &&

                                <div>
                                    <hr />
                                    <label> state:</label>
                                    <input {...register("state")} />

                                </div>
                            }

                            {stripeAccount.individual &&
                                stripeAccount.individual.address.state &&


                                <div>
                                    <hr />
                                    <span>✅</span>
                                    <label> state:</label>
                                    <span>{stripeAccount.individual.address.state}</span>

                                    {
                                        handleState &&
                                        <div><input defaultValue={stripeAccount.individual.address.state} {...register("state")} />
                                            <div className="bttn-update" onClick={state}>nvm</div>
                                        </div>
                                    }

                                    {
                                        !handleState &&

                                        <div className="bttn-update" onClick={state}>edit</div>
                                    }

                                </div>
                            }



                            {
                                stripeAccount.requirements.currently_due.find(x => x === "individual.address.line1") &&

                                <div>
                                    <hr />
                                    <label> address:</label>
                                    <input {...register("address")} />

                                </div>
                            }

                            {stripeAccount.individual &&
                                stripeAccount.individual.address.line1 &&


                                <div>
                                    <hr />
                                    <span>✅</span>
                                    <label> address:</label>
                                    <span>{stripeAccount.individual.address.line1}</span>

                                    {
                                        handleAddress &&
                                        <div><input defaultValue={stripeAccount.individual.address.line1} {...register("address")} />
                                            <div className="bttn-update" onClick={address}>nvm</div>
                                        </div>
                                    }

                                    {
                                        !handleAddress &&

                                        <div className="bttn-update" onClick={address}>edit</div>
                                    }

                                </div>
                            }


                            {
                                stripeAccount.requirements.currently_due.find(x => x === "individual.address.postal_code") &&

                                <div>
                                    <hr />
                                    <label> zip code:</label>
                                    <input {...register("zipCode")} />

                                </div>
                            }

                            {stripeAccount.individual &&
                                stripeAccount.individual.address.postal_code &&


                                <div>
                                    <hr />
                                    <span>✅</span>
                                    <label> zip code:</label>
                                    <span>{stripeAccount.individual.address.postal_code}</span>

                                    {
                                        handleZipCode &&
                                        <div><input defaultValue={stripeAccount.individual.address.postal_code} {...register("zipCode")} />
                                            <div className="bttn-update" onClick={zipCode}>nvm</div>
                                        </div>
                                    }

                                    {
                                        !handleZipCode &&

                                        <div className="bttn-update" onClick={zipCode}>edit</div>
                                    }

                                </div>
                            }


                            {
                                (stripeAccount.requirements.currently_due.find(x => x === "individual.dob.day") || stripeAccount.requirements.currently_due.find(x => x === "individual.dob.month") || stripeAccount.requirements.currently_due.find(x => x === "individual.dob.year")) &&

                                <div>
                                    <hr />
                                    <label> dob </label>
                                    <input {...register("month")} />
                                    <input {...register("day")} />
                                    <input {...register("year")} />

                                </div>
                            }



                            {stripeAccount.individual &&
                                stripeAccount.individual.dob.day && stripeAccount.individual.dob.month && stripeAccount.individual.dob.year &&


                                <div>
                                    <hr />
                                    <span>✅</span>
                                    <label> dob:</label>
                                    <span>{stripeAccount.individual.dob.month}</span>/<span>{stripeAccount.individual.dob.day}</span>/<span>{stripeAccount.individual.dob.year}</span>

                                    {
                                        handleDob &&
                                        <div><input defaultValue={stripeAccount.individual.dob.month} {...register("month")} />
                                            <input defaultValue={stripeAccount.individual.dob.day} {...register("day")} />
                                            <input defaultValue={stripeAccount.individual.dob.year} {...register("year")} />
                                            <div className="bttn-update" onClick={dob}>nvm</div>
                                        </div>
                                    }

                                    {
                                        !handleDob &&

                                        <div className="bttn-update" onClick={dob}>edit</div>
                                    }

                                </div>
                            }

                            {
                                stripeAccount.requirements.currently_due.find(x => x === "individual.phone") &&

                                <div>
                                    <hr />
                                    <label> phone:</label>
                                    {
                                        !pnInput &&
                                        <div>
                                            <span className="needed">needed</span>
                                            <br/>
                                            <span onClick={pnInputHandler}>edit</span>
                                        </div>
                                    }

                                    {pnInput && <div>                   
                                        <input {...register("phoneNumber")} />
                                        <br/>
                                        <span onClick={pnInputHandler}>nvm</span>
                                    </div>
                                    }
                                </div>
                            }

                            {stripeAccount.individual &&
                                stripeAccount.individual.phone &&


                                <div>
                                    <hr />
                                    <span>✅</span>
                                    <label> phone:</label>
                                    <span>{stripeAccount.individual.phone}</span>

                                    {
                                        handlePhoneNumber &&
                                        <div><input defaultValue={stripeAccount.individual.phone} {...register("zipCode")} />
                                            <div className="bttn-update" onClick={phoneNumber}>nvm</div>
                                        </div>
                                    }

                                    {
                                        !handlePhoneNumber &&

                                        <div className="bttn-update" onClick={phoneNumber}>edit</div>
                                    }

                                </div>
                            }





                            

                            {
                                stripeAccount.requirements.currently_due.find(x => x === "individual.id_number") &&

                                <div>
                                    <hr />
                                    <p>
                                        as a <span>third party payment network </span> at the end of the year we send each of our pro users a 1099-k tax form. In order to do this we need to confirm your identity with your social security number. If your ssn is entered wrong you will have to go through more steps with a photo id to prove your
                                    </p>

                                    <label> ssn: </label>
                                    {!ssnInput &&
                                        <div>
                                            <span className="needed">needed</span>
                                            <br />
                                            <span className="bttn-update" onClick={ssnInputHandler}>edit</span>
                                        </div>
                                    }

                                    {ssnInput &&
                                        <div>
                                            <input {...register("ssn")} />
                                            <br />
                                            <label className="bttn-update" onClick={ssnInputHandler}>nvm</label>
                                        </div>
                                    }

                                </div>
                            }

                            {stripeAccount.individual &&
                                stripeAccount &&


                                <div>
                                    <hr />
                                    <label> ssn:</label>

                                    {stripeAccount.individual.id_number_provided &&
                                        <span>✅</span>}



                                </div>
                            }

                            {
                                stripeAccount.requirements.currently_due.find(x => x === "external_account")
                                &&
                                <div>
                                    <hr />
                                    <div>
                                        <div> <span onClick={togglePaymentType}>card</span> <span onClick={togglePaymentType}>bank account</span> </div>


                                        {accountToggle &&

                                            <div>
                                                <br />
                                                <form>
                                                    <label>card number:</label>
                                                    <input {...register("cardNumber")} />
                                                    <br />
                                                    <label>exp month:</label>
                                                    <input {...register("expMonth")} />
                                                    <br />
                                                    <label>exp year:</label>
                                                    <input {...register("expYear")} />
                                                    <br />
                                                    <label>CVC:</label>
                                                    <input {...register("cvc")} />
                                                    
                                                </form>

                                            </div>

                                        }
                                        {
                                            !accountToggle &&
                                            <div>
                                                <form>
                                                    <br />
                                                    <label>routing number:</label>
                                                    <br />
                                                    <input />
                                                    <br />
                                                    <label>account number:</label>
                                                    <br />
                                                    <input />
                                                    <div>submit </div>
                                                </form>
                                            </div>
                                        }
                                    </div>

                                </div>
                            }


                            {stripeAccount.individual &&
                                stripeAccount &&


                                <div>
                                  <hr/>
                                    <div>✅</div> how we pay you
                                    { !updateCard &&
                                    <div className="bttn-update" onClick={updateCardInputHandler}>update</div>
                                    }
                                    { updateCard &&
                                    <div className="bttn-update" onClick={updateCardInputHandler}>nvm</div>
                                    }
                                    {updateCard && <div>

                                    {accountToggle &&

                                        
                                        <div>
                                              <div> <span className="bttn-update" onClick={togglePaymentType}>bank account</span> </div>
                                         <div>
                                            <br />
                                            <form>
                                                <label>card number:</label>
                                                <input {...register("cardNumber")}/>
                                                <br />
                                                <label>exp month:</label>
                                                <input  {...register("expMonth")}/>
                                                <br />
                                                <label>exp year:</label>
                                                <input {...register("expYear")}/>
                                                <br />
                                                <label>CVC:</label>
                                                <input {...register("cvc")}/>
                                                
                                            </form>

                                        </div>

                                        </div>

                                    }


                                    {
                                        !accountToggle &&
                                        <div>
                                              <div> <span className="bttn-update" onClick={togglePaymentType}>card</span> </div>
                                            <form>
                                                <br />
                                                <label>routing number:</label>
                                                <br />
                                                <input />
                                                <br />
                                                <label>account number:</label>
                                                <br />
                                                <input />
                                               
                                            </form>
                                        </div>
                                    }
                                    </div>}
                                </div>

                            }




                            {stripeAccount.requirements.currently_due.map(x =>
                                <div>
                                    <hr />
                                    {x}
                                </div>
                            )}


                        </div>

                    }







                </form>
            }
            <div className="update-padding"></div>

        </div>
    )
}



export default UpdateContainer
