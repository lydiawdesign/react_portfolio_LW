import React from 'react'
import '../App.css';
import groovyMovie from '../img/Groovy Movie Results Screenshot.jpg';
import passwordGenerator from '../img/password generator screenshot.jpg';
import teamProfile from '../img/team profile gen post img 1.png';


export const Portfolio = () => {
    return (
        <>
            <div className="container py-5" id="portfolio">

                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-center">
                            <img src={groovyMovie} className="card-img-top" alt="groovy movie"/>
                            <div className="card-body">
                                <h5 className="card-title text-uppercase fw-bold">Groovy Movie</h5>
                                <p className="card-text">An application that allows you to randomly choose 5 movies to watched based on the genre and year that you are interested in.</p>
                                <a href="https://github.com/lydiawdesign/Movie-Picker-App" className="btn btn-outline-dark">See GitHub Project</a>
                                <a href="/groovy movie post.html" className="btn btn-outline-dark">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card text-center">
                        <img src={passwordGenerator} className="card-img-top" alt="password generator"/>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase fw-bold">Password Generator</h5>
                            <p className="card-text">This application enables employees to generate random passwords based on criteria that they’ve selected.</p>
                            <a href="https://github.com/lydiawdesign/Password_Generator_LW" className="btn btn-outline-dark">See GitHub Project</a>
                            <a href="/password generator post.html" className="btn btn-outline-dark">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card text-center">
                        <img src={teamProfile} className="card-img-top" alt="coming soon"/>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase fw-bold">Team Profile Generator</h5>
                            <p className="card-text">A Node.js command-line app that takes in information about employees, then generates an HTML webpage that displays summaries for each person.</p>
                            <a href="https://github.com/lydiawdesign/Team_Profile_Generator_LW" className="btn btn-outline-dark">See GitHub Project</a>
                            <a href="/team profile post.html" className="btn btn-outline-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;