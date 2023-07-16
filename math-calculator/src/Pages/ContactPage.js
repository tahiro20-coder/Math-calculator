import { useState } from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import "../Styles/ContactPage.css"
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
      <div>
      <Container fluid="xxl" className='CPT'>
          <div className="CPTTitle">
            Contact Us
            <hr className='lineSt'/>
          </div>
          
          <div className='CPTdesc'>
            Here you can send us your feedback, problems, sujessions and anything you want to tell us about
            feel free and write what ever you want to say we will read it later.
          </div>
        </Container>
      <div className="container-xxl mt-5 main-ctp"  style={{height:"fit-content"}}>
        

      <h2 className="mb-3">Please feel free to give your feedback:</h2>
      <form ref={form} onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="subject">
            subject
          </label>
          <input className="form-control" type="text" name="subject" id="subject" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" name="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" id="message" required style={{height:"100px", padding:'1.5em'}}/>
        </div>
        <button className="btn btn-danger" type="submit" value='Send'>
          {formStatus}
        </button>
      </form>
    </div>
    </div>
    );
}

export default ContactPage;