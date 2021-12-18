import React from 'react'
import '../App.css';
import groovyMovie from '../img/Groovy Movie Results Screenshot.jpg';
import passwordGenerator from '../img/password generator screenshot.jpg';
import musicReview from '../img/music review.png';


export const Portfolio = () => {
    return (
        <>
            <div className="container p-5" id="portfolio">
            <h1 className='text-center p-4'>Portfolio</h1>
                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-center">
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
                        <div className="card text-center">
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
                        <div class="card text-center">
                            <img src={musicReview} class="card-img-top" alt="coming soon"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">MUSIC REVIEW CLUB</h5>
                                <p class="card-text">A website that builds a music loving community by allowing users to post song reviews, read music reviews, and comment on reviews once logged in.</p>
                                <a href="https://github.com/lydiawdesign/music-review-club" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://music-review-club.herokuapp.com/login" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Portfolio;