import React, { useState, useRef, useEffect } from 'react';
import { sendForm } from "@emailjs/browser";
// import emailjs, { sendForm } from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with custom duration
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
        setError(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
        } else {
            sendForm('service_1lvghe3', 'template_wiw8qpw', form.current, 'BYqKtOE8X0-uCyZ3b') 
            .then(
                () => {
                    setDone(true);
                    setNotDone(false);
                    setError(false);
                },
                (error) => {
                    setError(true);
                },
            );
        }
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left" data-aos="fade-right">
                    <h1 className='c-left-text'>Get in Touch</h1>
                    <h1 className="yellow c-left-text">Contact me</h1>
                    <div className="curve-container">
                        <svg
                            viewBox="0 0 500 100"
                            preserveAspectRatio="none"
                            className="curved-line"
                        >
                            <path d="M0,100 C150,0 350,0 500,100" stroke="#f7c619" strokeWidth="5" fill="none" />
                        </svg> 
                    </div>
                    <br /> <br />
                </Col>
                <Col md={6} className="c-right" data-aos="fade-left">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="from_name"
                            className="user"
                            placeholder="Name"
                            onChange={handleChange}
                            data-aos="fade-up"
                        />
                        <input
                            type="email"
                            name="reply_to"
                            className="user"
                            placeholder="Email"
                            onChange={handleChange}
                            data-aos="fade-up"
                        />
                        <textarea
                            name="message"
                            className="user"
                            placeholder="Message"
                            onChange={handleChange}
                            data-aos="fade-up"
                        />
                        <span className='not-done'>
                            {notDone && "Please, fill all the input fields."}
                        </span>
                        {error && <span className='error'>There was an error sending your message. Please try again later. Or Just connect with me on below social media links</span>}
                        <Button type="submit" style={{ padding: "10px 50px" }} className="button btn-lg" disabled={done} data-aos="zoom-in">
                            Send
                        </Button>
                        <span className='done'>
                            {done && "Thanks for contacting me. I have received your message and will get back to you soon. Meantime just connect with me on below social media links also."}
                        </span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
