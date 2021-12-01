import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faCompass from "@fortawesome/fontawesome-free-solid/faCompass";
import faphone from "@fortawesome/fontawesome-free-solid/faPhone";
import faClock from "@fortawesome/fontawesome-free-solid/faClock";
import faEnvelope from "@fortawesome/fontawesome-free-solid/faCompass";

const Footer = ({data}) => {
 
  return (
    <>
    {
      data.siteData?
      <footer className="bck_b_dark">
        <div className="container">
          <div className="logo">Waves</div>
          <div className="wrapper">
            <div className="left">
              <h2>Contact Information</h2>
              <div className="business_nfo">
                {/* Address */}
                <div className="tag">
                  <FontAwesomeIcon icon={faCompass} className="icon" />
                  <div className="nfo">
                    <div>Address</div>
                    <div>{data.siteData[0].address}</div>
                  </div>
                </div>
                    
                <div className="tag">
                  <FontAwesomeIcon icon={faClock} className="icon" />
                  <div className="nfo">
                    <div>Working Hours</div>
                    <div>{data.siteData[0].hours}</div>
                  </div>
                </div>

                <div className="tag">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <div className="nfo">
                    <div>Email</div>
                    <div>{data.siteData[0].email}</div>
                  </div>
                </div>

                <div className="tag">
                  <FontAwesomeIcon icon={faphone} className="icon" />
                  <div className="nfo">
                    <div>Phone</div>
                    <div>{data.siteData[0].phone}</div>
                  </div>
                </div>

              </div>
            </div>

            <div className="left">
                <h2>Be the First to know</h2>
                <div>
                    <div>Get all the latest information on Events, Sales and offers.</div>
                </div>
            </div>
          </div>
        </div>
      </footer>
      :null
    }
      
    </>
  );
};

export default Footer;
