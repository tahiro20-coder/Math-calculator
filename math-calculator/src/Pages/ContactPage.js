import { useState } from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactPage(){
    const [formStatus, setFormStatus] = useState('Send')
    const form = useRef();

    const onSubmit = (e) => {
        if(formStatus==='Thanks for your feedback'){
          e.target.reset()
          setFormStatus('send')
        }
        else{
          e.preventDefault()
          setFormStatus('Submitting...')
          const { name, subject,email, message } = e.target.elements
          let conFom = {
          name: name.value,
          subject: subject.value,
          email: email.value,
          message: message.value,
          }
          console.log(conFom)
         
          emailjs.sendForm("service_q3bsonc","template_40jiv6q", form.current, 'pfLh9sxMAF_ZV9wtT')
          .then((result) => {
              alert('success you email was sent successfully')
          }, (error) => {
              alert(error.message)
          })
          setFormStatus('Thanks for your feedback')
          
        }
          
        
    }
    return(
      <div className="container-xxl mt-5" style={{height:"57%"}}>
      <h2 className="mb-3">Please feel free to give your feedback:</h2>
      <form ref={form} onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="subject">
            subject
          </label>
          <input className="form-control" type="text" id="subject" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required style={{height:"100px", padding:'1.5em'}}/>
        </div>
        <button className="btn btn-danger" type="submit" value='Send'>
          {formStatus}
        </button>
      </form>
    </div>

    );
}

export default ContactPage;