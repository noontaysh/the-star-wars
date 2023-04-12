import React from 'react';

const FilmExcerpt = ({objectId, ...props}) => {
    return (
        <div className={'excerpt'}>
            <img src={`https://starwars-visualguide.com./assets/img/films/${objectId}.jpg`} alt=""
                 onError={(e) => {
                     e.target.onError = null;
                     e.target.src = `https://starwars-visualguide.com/./assets/img/big-placeholder.jpg`
                 }}/>
            <div className={'excerpt__content'}>
                <h1>{props.title}</h1>
                <p>Title: {props.title}</p>
                <p>Release date: {new Date(`${props.release_date}`).toDateString()}</p>
                <p>Director: {props.director}</p>
                <p>Producer(s): {props.producer}</p>
                <p>Opening crawl: <em>{props.opening_crawl}</em></p>
            </div>
        </div>
    );
};

export default FilmExcerpt;