import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [error, setError] = useState(false); // New state for error handling
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
        setError(false); // Reset error state on change
    };

    const sendEmail = (e) => {
      e.preventDefault();
  
      if (!formData.from_name || !formData.reply_to || !formData.message) {
          setNotDone(true);
      } else {
          console.log("Sending email with data:", formData); // Log the form data
          emailjs
              .sendForm(
                  "service_83kjz8q",
                  "template_ir1u2cg",
                  form.current,
                  "7qOUyzYfgxGo2OsO9"
              )
              .then(
                  (result) => {
                      console.log(result.text);
                      setDone(true);
                      setFormData({});
                      e.target.reset();
                  },
                  (error) => {
                      console.log(error.text);
                      setError(true);
                  }
              );
      }
  };
  

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1 className='c-left-text'>Get in Touch</h1>
                    <h1 className="yellow c-left-text">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="from_name"
                            className="user"
                            placeholder="Name"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="reply_to"
                            className="user"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            className="user"
                            placeholder="Message"
                            onChange={handleChange}
                        />
                        <span className='not-done'>
                            {notDone && "Please, fill all the input fields."}
                        </span>
                        {error && <span className='error'>There was an error sending your message. Please try again later.</span>} {/* New error message */}
                        <Button type="submit" className="button" disabled={done}>
                            Send
                        </Button>
                        <span className='done'>
                            {done && "Thanks for contacting me. I have received your message and will get back to you soon."}
                        </span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
