import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <div>
                <img className="picture-up" src="https://image.freepik.com/free-vector/neon-light-arrow-direction-perspective_1017-22033.jpg" alt="gras" />

                <div className="portfolio">
                    <img className="photoMy" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="PhotoMy" />
                    <div className="about">
                        <div className="about-name">Batton B.</div>

                        <div className="about-info">Date of Brith: 2 january</div>
                        <div className="about-info">City: Saint-Petersburg</div>
                        <div className="about-info">Education: BSU'11</div>
                        <div className="about-info">Web Site: https://batton-batonovich.com</div>
                    </div>

                    <div className="posts">
                        My posts
                    </div>
                    <div className="posts">
                        My posts
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;