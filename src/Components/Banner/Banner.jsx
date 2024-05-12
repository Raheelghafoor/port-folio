import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
      <>
        <div className="main-banner" id='home'>
          <div className="container">
            <div className="banner-wrapper">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="banner-content">
                    <h1 className="heading">
                      Hi! <br />
                      Raheel Ghafoor
                    </h1>
                    <p className="description">I'm Flutter Developer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Banner