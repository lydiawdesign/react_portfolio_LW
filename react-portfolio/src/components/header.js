import React from 'react';
import image from '../img/about_img.jpg';
import '../App.css';

  
export const Header = () => {
    return (

        <div>
            <div class="b-example-divider heroColor"></div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src = {image} className=  "d-block mx-lg-auto img-fluid" alt="heroimage" width="600" height="300"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Hi, I'm Lydia! Nice to meet ya!</h1>
                        <p className="lead">Website and Product data manager with experience in Marketing, Design, and Web Development. Lydia is currently earning a certificate in full-stack development from the Coding Bootcamp Program at the Ohio State University, with newly developed skills in JavaScript, CSS, APIs, and responsive web design. She is known to be an avid troubleshooter, a precise problem solver, and a creative thinker. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-dark btn-lg px-4 me-md-2" href="react-portfolio\src\img\Lydia Williamson Resume 2021 September Updated.pdf" download="Lydia Williamson's Resume">Download Resume</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4" href="https://github.com/lydiawdesign">View GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;







