import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slideOne from '../../../Images/carousel/slide-01.jpg';
import slideTwo from '../../../Images/carousel/slide-02.jpg';
import slideThree from '../../../Images/carousel/slide-03.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={slideOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>International Doctor</h3>
                        <p>There are lots of international docotor.</p>
                        <Link className='slide-btn' to='/contact'>Contact us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={slideTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Dental Care</h3>
                        <p>We have the best dentist.</p>
                        <Link className='slide-btn' to='/contact'>Contact us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={slideThree}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Best solution</h3>
                        <p>We give the best solution in the medical history.</p>
                        <Link className='slide-btn' to='/contact'>Contact us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;