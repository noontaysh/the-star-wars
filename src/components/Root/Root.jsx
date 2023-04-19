import React from 'react';
import {NavLink} from "react-router-dom";
import './Root.scss'

const Root = () => {
    return (
        <div className={'root container'}>
            <div className={'root__item'}>
                <h2>Characters</h2>
                <NavLink to={'/people/'}>
                    <img src={'https://www.theyoungfolks.com/wp-content/uploads/2019/12/underrated-star-wars-featured-extras-characters-ilm-stan-winston-henson-1-770x490.jpg'} alt=""/>
                {/*    https://cdn.europosters.eu/image/750/posters/star-wars-characters-i4731.jpg*/}
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/planets/'}>
                    <h2>Planets</h2>
                    <img src={'https://img1.goodfon.com/wallpaper/nbig/d/85/star-wars-episode-vii-the-6653.jpg'} alt=""/>
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/species/'}>
                    <h2>Species</h2>
                    <img src={'https://sportshub.cbsistatic.com/i/2021/09/14/b1c7dd48-7d80-48b5-b768-634e4a55c9fd/mon-calamari-mandalorian-sweater-amazon-viral-tweet.jpg'} alt=""/>
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/starships/'}>
                    <h2>Starships</h2>
                    <img src={'https://cdna.artstation.com/p/assets/covers/images/042/276/964/large/sam-morse-brown-sam-morse-brown-mustafarthumbnail2.jpg?1634059493'} alt=""/>
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/vehicles/'}>
                    <h2>Vehicles</h2>
                    <img src={'https://c4.wallpaperflare.com/wallpaper/26/390/355/star-wars-ship-wallpaper-preview.jpg'} alt=""/>
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/films/'}>
                    <h2>Films</h2>
                    <img src={'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701841154.jpg'} alt=""/>
                </NavLink>
            </div>
        </div>
    );
};

export default Root;