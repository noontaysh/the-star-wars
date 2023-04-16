import React from 'react';
import './Intro.scss'

const Intro = () => {
    return (
        <div className={'intro'}>
            <img src={require('./star-wars.png')} alt="bg"/>
        </div>
    );
};

export default Intro;