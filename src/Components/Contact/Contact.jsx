import React from 'react';
import './Contact.scss';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {
    return (
        <div className="contact-sec" id='contactus'>
            <div className="contact-sec-bg">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="top-content">
                            <span className="meta">How can you communicate?</span>
                            <h2 className="heading">
                                Contact Me 
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <Form>
                                <Row className="mb-4 two-fields">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4">
                                    <Form.Group as={Col} controlId="formGridSubject">
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} controlId="formGridMessage">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Message"
                                        style={{ height: '150px' }}
                                    />
                                    </Form.Group>
                                </Row>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact