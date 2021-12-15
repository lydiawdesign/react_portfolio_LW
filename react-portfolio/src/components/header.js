import React from 'react';
import image from '../img/hero_final.png';

  
export const Header = () => {
    return (

        <div className="">
            <img src={image} alt="" className="position-absolute"
            />
            <div className="">
                <h1 className="text-center font-weight-bold">
                    Hi, I'm Lydia! Nice to meet ya!
                </h1>
            </div>
      </div>
    );
}

export default Header;







