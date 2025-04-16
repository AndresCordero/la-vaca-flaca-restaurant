import React from 'react';
import backgroundImage from '../assets/wallpaper.png';
import '../components/styles/BackgroundComponent.css';

const BackgroundComponent = ({ children }) => {
    return (
        <div
            className="bg-wrapper"
            style={{ "--bg-BackgroundImage": `url(${backgroundImage})` }}
        >
            {children}
        </div>
    );
};

export default BackgroundComponent;
