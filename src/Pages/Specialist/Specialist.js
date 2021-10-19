import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Specialist.css';
import specialist from '../../Images/carousel/slide-01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagnoses, faUserMd, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Specialist = () => {
    const eye = <FontAwesomeIcon icon={faEye} />
    const diagnosICon = <FontAwesomeIcon icon={faDiagnoses} />
    const labICon = <FontAwesomeIcon icon={faEyeSlash} />
    const doctorICon = <FontAwesomeIcon icon={faUserMd} />
    return (
        <div>
            <div className="specialist-header">
                <h4>Owner, Lead Optometrist</h4>
                <h2>Angela Brawn</h2>
                <p className="credibly">Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.</p>
            </div>
            <Container className="special-top">
                <Row>
                    <Col xs={12} md={6} className="special-pera">
                        <div className="holistically">
                            <p>Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.</p>
                            <p><small>
                                Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedures whereas bricks-and-clicks processes.</small></p>

                            <p><small>
                                Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before process-centric communities. Dramatically evisculate holistic innovation rather than client-centric data.</small></p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src={specialist} alt="" />
                    </Col>
                </Row>
            </Container>

            <Container className='my-5'>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div>
                            <div className="feature-icon-1">
                                {eye}
                            </div>
                            <div className="feature-details p-5">
                                <h2>Eye examination
                                </h2>
                                <p>Globally harness multimedia based collaboration and idea-sharing with backend product superior opportunities.

                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div>
                            <div className="feature-icon-2">
                                {diagnosICon}
                            </div>
                            <div className="feature-details p-5">
                                <h2>Diagnostics Services</h2>
                                <p>All kind of diagnostics are here for you, we are open 24/7 you can always get our help and stay safe.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div>
                            <div className="feature-icon-1">
                                {labICon}
                            </div>
                            <div className="feature-details p-5">
                                <h2>Hi-technology Labs</h2>
                                <p>Most expensive hi-tech labs are created here for safety and trush of our patients and relief also.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div>
                            <div className="feature-icon-2">
                                {doctorICon}
                            </div>
                            <div className="feature-details p-5">
                                <h2>Specialized Doctors</h2>
                                <p>Most experienced specialized doctors are here for you they are very much dedicated to all patients.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="specialist-contact py-5">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div>
                                <h2>Contact Angela</h2>
                                <p>Come and visit our quarters or simply send us an email anytime you want. We are open to all suggestions from our audience.</p>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <Row>
                                <Col md={3} sm={6} xs={12}>
                                    <p><small>Address</small></p>
                                    <p><small>27th Avenue,
                                        W2 3XE, New York</small></p>
                                </Col>
                                <Col md={3} sm={6} xs={12}>
                                    <p><small>Call us
                                    </small></p>
                                    <p><small>0-800-777-2331
                                        0-800-772-3466</small></p>
                                </Col>
                                <Col md={3} sm={6} xs={12}>
                                    <p><small>Write us
                                    </small></p>
                                    <p><small>office@medicare.com
                                        book@medicare.com</small></p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Specialist;