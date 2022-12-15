import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Nav from "./Nav";
import "../style/App.css"
import { FormDiv, Form, Name, Email, Message, Label, Send, ContactDiv, ContactBox, ConatctOuter } from '../style/Contact.styled';
import Footer from './Footer';

const Contact = () => {


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_30gu8dt', 'template_g5o3lm7', form.current, 'sS_kskmFPSceg9T6o')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return ( 
    <div>
        <div>
            <Nav />
        </div>

    <div className='ConatctBackground'>

    <ContactDiv>
        <FormDiv>
            <Form ref={form} onSubmit={sendEmail}>
                <Label>Name</Label>
                <Name type="text" name="user_name" placeholder='Your Name'/>
                <Label>Email</Label>
                <Email type="email" name="user_email" placeholder='Your Email'/>
                <Label>Message</Label>
                <Message name="message" placeholder='Your Message'/>
                <Send type="submit" value="Send" />
            </Form>
        </FormDiv>

    <ConatctOuter>
        <ContactBox>
            <h4>Contact Me</h4>
            <p>To conact me you can either use the conact form, send me an email at placeholder@placeholder.com or reach out through my Etsy store</p>
        </ContactBox>
    </ConatctOuter>
    </ContactDiv>

    </div>

        <Footer />

    </div>
    );
}

export default Contact;