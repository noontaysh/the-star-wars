import React from 'react';
import '../../common/Container.scss'
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={'container'}>
            <div>
                <NavLink to={'/people'} className={(navData) => (navData.isActive && 'link_active')}>
                    <p>Characters</p>
                </NavLink>
                <NavLink to={'/'}>
                    <img src="https://cdn.cdnlogo.com/logos/s/58/star-wars.png" alt=""/>
                </NavLink>
                <NavLink to={'/planets'} className={(navData) => (navData.isActive && 'link_active')}>
                    <p>Planets</p>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;