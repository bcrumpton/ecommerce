import React from 'react'
import homeHeader from '../assets/luxury.jpg'
import '../app.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__banner">
                    <img 
                        className="home__img"
                        src={homeHeader} 
                        alt="home banner"
                    />
                    <div className="home__img-overlay"></div>
                </div>
            </div>
        </div>
    )
}

export default Home
