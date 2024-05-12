import React from 'react';
import './Services.scss';
import job1 from '../../Assets/job1.png';
import job2 from '../../Assets/job2.png';
import job3 from '../../Assets/job3.png';

const ServicesData = [
    {
        serviceImg: job1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        serviceImg: job2,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        serviceImg: job3,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        serviceImg: job1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        serviceImg: job1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        serviceImg: job1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        serviceImg: job1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        serviceImg: job1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        serviceImg: job1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
]

const Services = () => {
    return (
        <div className="services-sec" id='services'>
            <div className="container">
                <div className="services-wrapper">
                    <div className="top-content">
                        <span className="meta">What I Do ?</span>
                        <h2 className="heading">
                            Services
                        </h2>
                    </div>
                    <div className="row">
                        {
                            ServicesData.map((item, id) => (
                                <div className="col-md-4">
                                    <div className="job-box">
                                        <div className="job-logo">
                                            <img src={item.serviceImg} alt="job1" />
                                        </div>
                                        <h4 className="heading">{item.title}</h4>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services