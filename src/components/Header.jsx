import React, { useState, useEffect } from 'react';

const Header = ({ scroll }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    // Apply the dark mode class to the body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);


    return (
        <>
            <nav className={`header ${scroll}`}>

                <div className="header-left">
                    <a href="#" className="header-left-text">Web Rule</a>
                </div>

                

                

                {/* Navigation Menu */}
                <div className={`header-right ${isMenuOpen ? 'open' : ''}`}>
                    <div className="item project">Projects</div>
                    <div className="item compat">Capabilities</div>
                    <div className="item contact">Contact</div>

                   
                </div>
                 {/* Dark Mode Toggle Switch */}
                 <div className="toggle-switch">
                        <label className="switch-label">
                            <input
                                type="checkbox"
                                className="checkbox"
                                onChange={toggleDarkMode}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                    {/* Hamburger Menu Toggle */}
                <div className="hamburger-menu">
                    <input
                        type="checkbox"
                        id="checkbox"
                        onChange={toggleMenu}
                    />
                    <label className="toggle" htmlFor="checkbox">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>
                </div>
                
            </nav>
        </>
    );
};

export default Header;
