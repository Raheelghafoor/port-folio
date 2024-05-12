import React from 'react';
import { Link } from 'react-router-dom';
import appStoreIcon from '../../Assets/appstore.png';
import playStoreIcon from '../../Assets/playstore.png';
import portfolio1 from '../../Assets/flutter_Img.jpg';
import './Portfolio.scss';

const PortfolioData = [
    {
        bgImg: portfolio1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        bgImg: portfolio1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        bgImg: portfolio1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        bgImg: portfolio1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        bgImg: portfolio1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        bgImg: portfolio1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        bgImg: portfolio1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        bgImg: portfolio1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
    {
        bgImg: portfolio1,
        title: "App Development",
        description: "We can provide you with Flutter App Development services."
    },
]

const Portfolio = () => {
  return (
    <div className="portfolio-sec" id='portfolio'>
        <div className="container">
            <div className="portfolio-wrapper">
                <div className="top-content">
                    <span className="meta">What I Did ?</span>
                    <h2 className="heading">
                        Portfolio
                    </h2>
                </div>
                <div className="row">
                    {
                        PortfolioData.map((item, id) => (
                            <div className="col-md-4" key={id}>
                                <div className="job-box" style={{ backgroundImage: `url(${item.bgImg})` }}>
                                    <div className="box-content">
                                        <h4 className="heading">{item.title}</h4>
                                        <p className="description">{item.description}</p>
                                        <ul>
                                            <li>
                                                <Link to='/'>
                                                    <img src={appStoreIcon} alt={appStoreIcon} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/'>
                                                    <img src={playStoreIcon} alt={playStoreIcon} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
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

export default Portfolio