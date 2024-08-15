import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

import "./Contact.css";

const Contact = () => {
    const [formStatus, setFormStatus] = useState('');

    useEffect(() => {
        emailjs.init("N0ZOryOZ7puY8yViV"); 

        const handleSubmit = (e) => {
            e.preventDefault();
            setFormStatus('Sending...');

            emailjs.sendForm('service_0sgre76', 'template_w7vhl4r', e.target)
                .then((response) => {
                    console.log('SUCCESS!', response);
                    alert('Your message has been sent successfully. We will get back to you soon.');
                    setFormStatus('Message sent successfully!');
                    e.target.reset();
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    setFormStatus('Failed to send message. Please try again.');
                });
        };

        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            contactForm.addEventListener("submit", handleSubmit);
        }

        return () => {
            if (contactForm) {
                contactForm.removeEventListener("submit", handleSubmit);
            }
        };
    }, []);

    return (
        <div className="ContactPage">
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Contact Us</title>
            </Helmet>

            <p className="Contact">Contact Us</p>

            <div className="wrapper">
                <div className="box1">
                    <p>
                        <b>FINIVESTA<br />
                            Financial and economics society - IGDTUW</b> <br />
                        Address<br />
                        James Church, New Church Rd, Opp. St,<br />
                        Kashmere Gate, New Delhi, Delhi 110006<br />
                        <b>Phone</b><br />
                        011 2390 0220
                    </p>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.611386887791!2d77.22299567770999!3d28.6655361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683919c3b%3A0xf5fc331b74c2b9e2!2sIndira%20Gandhi%20Delhi%20Technical%20University%20for%20Women!5e0!3m2!1sen!2sin!4v1701533528764!5m2!1sen!2sin"
                        title="IGDTUW Location"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="message">
                <p>Send a message</p>
            </div>

            <div className="container">
                <form id="contact-form">
                    <div className="row">
                        <div className="col-50">
                            <input type="text" id="fname" name="fname" placeholder="Name" required />
                        </div>
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-50">
                            <input type="tel" id="phone" name="phone" placeholder="Phone" required />
                        </div>
                        <div className="col-75">
                            <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-100">
                            <textarea id="message" name="message" placeholder="Message" style={{ height: "150px" }} required></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-100">
                            <input type="submit" value="Send" className="submit-button" />
                        </div>
                    </div>
                </form>
                {formStatus && <p className="form-status">{formStatus}</p>}
            </div>
        </div>
    );
};

export default Contact;