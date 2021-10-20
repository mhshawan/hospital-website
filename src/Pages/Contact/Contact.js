import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faAddressBook,
    faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Contact.css';

// this variable will show contact page
const Contact = () => {
    return (
        <div>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>CONTACT</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="d-md-flex justify-content-around align-items-center mt-3">
                <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faPhone} className="fs-1 me-2" />
                    <div className="ms-2">
                        <h3>Phone</h3>
                        <p>Phone: +8801688496554</p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faAddressBook} className="fs-1 me-2" />
                    <div className="ms-2">
                        <h3>Adress</h3>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faVoicemail} className="fs-1 me-2" />
                    <div className="ms-2">
                        <h3>Email</h3>
                        <p>Email:mhshawan7@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h1 className="contact-title text-center">Contact Me</h1>
                <Form className="w-75 mx-auto mb-2">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="email" placeholder="Type Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className="contact-btn"> Submit </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;