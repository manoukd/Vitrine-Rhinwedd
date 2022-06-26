import React from 'react';
import featureimage from '../images/Frame 19.png'
const Features = () => {
    return (
        <div id='features'>
           <div className='features-model'>
                <img src={featureimage} alt="feature-image"/>
           </div> 
            <div className='features-text'>
                <h2>Feature</h2>
                <h3>This application  <span>software </span>is art</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Molestiae ab porro a! Laboriosam omnis voluptas vero maxime non a sequi,
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Molestiae ab porro a! Laboriosam omnis voluptas vero maxime non a sequi,         
                </p>
                <button >View More Features</button>
            </div>
        </div>
    );
};

export default Features;