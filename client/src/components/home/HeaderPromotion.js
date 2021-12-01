import React from 'react';
import Buttons from '../utils/Buttons'

const HeaderPromotion = () => {
    
    const promotion = 
        {
          img: "/images/featured/featured_home_3.jpg",
          lineOne: "up to 40% off",
          lineTwo: "In second hand Guitars",
          linkTitle: "Shop Now",
          linkTo: "/shop",
        }

    const renderPromotion = () =>(
        promotion?
            <div className="home_promotion_img"
            style={{
                background:`url(${promotion.img})`
            }}
            >
                <div className="featured_action">
                <div className="tag title">{promotion.lineOne}</div>
                <div className="tag low_title">{promotion.lineTwo}</div>
                <div style={{display: 'flex',justifyContent : 'center'}}>
                    <Buttons
                        type='default'
                        title={promotion.linkTitle}
                        linkTo={promotion.linkTo}
                        addstyles={{
                            margin:'10px 0 0 0',                     
                            }}
                    />
                </div>
              </div>
            </div>
        :null
    )
    return (
        <div className="home_promotion">
           {renderPromotion()}
        </div>
    );
};
export default HeaderPromotion;