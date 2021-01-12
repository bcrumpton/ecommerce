import React from 'react'
import toucan from '../assets/toucan.svg';

function Header() {
    return (
        <header className="masthead">
            <div class="container">

                <div class="header">
                    
                    <div class="header__logoLink">
                        <img 
                            src={toucan} 
                            className="toucan-logo" 
                            alt="toucan logo" 
                        />
                        <h1>Toucan</h1>
                    </div>

                    
                    <div class="header__search">
                        <input class="header__searchInput" type="text" name="search" id="search" />
                        <input class="header__searchButton" type="button" value="Search"/>
                    </div>

                    <div class="header__options">
                        <div className="header__option">
                            Sign In
                        </div>
                        <div className="header__option">
                            Returns & Orders
                        </div>
                        <div className="header__option">
                            Cart
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
