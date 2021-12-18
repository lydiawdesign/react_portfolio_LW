import React from 'react'
import '../App.css';
import groovyMovie from '../img/Groovy Movie Results Screenshot.jpg';
import passwordGenerator from '../img/password generator screenshot.jpg';
import musicReview from '../img/music review.png';
import teamProfile from '../img/teamGen.png';
import ecommerceBackend from '../img/ecommerce.png';
import noteTaker from '../img/noteTaker.png';


export const Portfolio = () => {
    return (
        <>
            <div className="container p-5" id="portfolio">
            <h1 className='text-center p-4'>Portfolio</h1>

                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-center h-100">
                            <img src={groovyMovie} className="card-img-top" alt="groovy movie"/>
                            <div className="card-body">
                                <h5 className="card-title text-uppercase fw-bold">Groovy Movie</h5>
                                <p className="card-text">An application that allows you to randomly choose 5 movies to watched based on the genre and year that you are interested in.</p>
                                <a href="https://github.com/lydiawdesign/Movie-Picker-App" className="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://lydiawdesign.github.io/Movie-Picker-App/" className="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-center h-100">
                            <img src={passwordGenerator} className="card-img-top" alt="password generator"/>
                            <div className="card-body">
                                <h5 className="card-title text-uppercase fw-bold">Password Generator</h5>
                                <p className="card-text">This application enables employees to generate random passwords based on criteria that they’ve selected.</p>
                                <a href="https://github.com/lydiawdesign/Password_Generator_LW" className="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://lydiawdesign.github.io/Password_Generator_LW/" className="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={musicReview} class="card-img-top" alt="music review"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">MUSIC REVIEW CLUB</h5>
                                <p class="card-text">A website that builds a music loving community by allowing users to post song reviews, read music reviews, and comment on reviews once logged in.</p>
                                <a href="https://github.com/lydiawdesign/music-review-club" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://music-review-club.herokuapp.com/login" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={teamProfile} class="card-img-top" alt="TEAM PROFILE GENERATOR"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">TEAM PROFILE GENERATOR</h5>
                                <p class="card-text">A Node.js command-line app that takes in information about employees, then generates an HTML webpage that displays summaries for each person.</p>
                                <a href="https://github.com/lydiawdesign/Team_Profile_Generator_LW" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://youtu.be/Nkcqnp-BPl8" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Walkthrough Video</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={ecommerceBackend} class="card-img-top" alt="ECOMMERCE BACKEND"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">ECOMMERCE BACKEND</h5>
                                <p class="card-text">An Express.js API and MySQL database built as a back end for an e-commerce website.</p>
                                <a href="https://github.com/lydiawdesign/E-Commerce-Back-End_LW" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://www.youtube.com/watch?v=oa8Qv9RRp3E&feature=youtu.be" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Walkthrough Video</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={noteTaker} class="card-img-top" alt="NOTE TAKER"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold center">NOTE TAKER</h5>
                                <p class="card-text">An application that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.</p>
                                <a href="https://github.com/lydiawdesign/Note_Taker_LW" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://github.com/lydiawdesign/Note_Taker_LW" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Portfolio;