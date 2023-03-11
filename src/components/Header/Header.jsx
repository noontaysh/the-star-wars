import React from 'react';
import '../../common/Container.scss'
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={'container'}>
            <div>
                <NavLink to={'/characters'} className={(navData) => (navData.isActive && 'link_active')}>
                    <p>Characters</p>
                </NavLink>
                <img src="https://cdn.cdnlogo.com/logos/s/58/star-wars.png" alt=""/>
                <NavLink to={'/planets'} className={(navData) => (navData.isActive && 'link_active')}>
                    <p>Planets</p>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;