import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="common-banner mb-5">
        <Container>
            <Row>
                <Col md={12} sm={12} xs={12}>
                    <div className="section-title">
                        <h2>404 Not Found</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default NotFound;