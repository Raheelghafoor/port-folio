import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';
import aboumeImg from '../../Assets/HCareerimg.png';

const About = () => {
    return (
        <div className="about-sec" id="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">Who Am I ?</span>
                                <h2 className="heading">
                                    About Me
                                </h2>
                                <p className="description">
                                    Welcome to my portfolio! My name is Raheel Ghafoor, and I am a computer 
                                    science graduate with 4+ years of experience in mobile application 
                                    development, specializing in the use of the Flutter framework. My expertise 
                                    in this field has enabled me to assist numerous clients in boosting their 
                                    sales and growing their businesses through the use of engaging mobile 
                                    applications. As mobile usage continues to rise, it is essential to have a 
                                    top-quality app to reach your target audience. That's why it is important 
                                    to choose an expert in the field. Our in-house team of four professionals 
                                    is dedicated to delivering exceptional work on time and within budget. If 
                                    you have any questions or would like to discuss a project, please don't 
                                    hesitate to reach out. I am available to assist you and wish you a great day.
                                </p>
                            
                                <div className="sec-btns">
                                    <Link to="/" className="btn learn-btn">
                                        <span>Download CV</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={aboumeImg} alt="aboumeImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About