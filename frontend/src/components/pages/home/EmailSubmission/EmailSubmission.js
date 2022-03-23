import React, { useState } from 'react';
import axios from 'axios';
import style from './EmailSubmission.module.css'

const initialValues = {
    input_text: "",
};

function EmailSubmission() {

    const [emails, setEmail] = useState(initialValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmail({
            ...emails,
            [name] : value,
        });
    };

    const handleSubmit = (e) => {
        console.log("handling email input: ",emails.input_text);
        postSubmit(emails.input_text)
    }

    const postSubmit = async (email) =>{
        const request = await axios.post('/api/emailSubscription/create-new-email-subscription/'+email);
        console.log(request.status);
    }

    return (
        <div className={style.emailSubmission}>
            <div className = {style.container}>
                <div className = {style.inner_container}>
                    <div className = {style.title_text}>
                        title
                    </div>
                    <div className = {style.sub_tittle_text}>
                        sub title
                    </div>
                    
                    <div className = {style.submission_container}>
                        <input 
                         className = {style.textbox}
                         type="email"
                         id = "input_text"
                         name = "input_text"
                         value = {emails.input_text}
                         onChange = {handleInputChange}>
                             

                        </input>
                        <button className = {style.submit_butn} onClick = {handleSubmit}>
                            submit
                        </button>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default EmailSubmission;