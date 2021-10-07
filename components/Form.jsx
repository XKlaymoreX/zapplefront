import React, {useContext,useRef} from 'react'
import { AuthContext } from './UserContext'

const Form = () => {

const {sendEmailToken} = useContext(AuthContext)

    const emailInput = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmailToken(emailInput.current.value)
    }


    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{margin:'10px 0'}} ref={emailInput}/>
                <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
            </div>
            <input type="button" className="btn btn-primary" style={{marginTop:'30px'}} value="Send" onClick={e => {handleSubmit(e)}}></input>
        </form>
    )
}

export default Form
