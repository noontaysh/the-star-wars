import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectAllCharacters} from "./charactersSlice";
import './Paginator.scss'
import '../../common/Container.scss'

const Paginator = ({currentPage, paginate}) => {
    const characters = useSelector(selectAllCharacters)
    const pageSize = useSelector(state => state.characters.pageSize)
    const totalCount = useSelector(state => state.characters.totalCount)

    const pagesCount = Math.ceil(totalCount / 10)
    const pageNumbers = []

    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i)
    }

    // Logic of PREV & NEXT buttons
    let [portionNumber, setPortionNumber] = useState(1)
    let portionCount = Math.ceil(pagesCount / 3)
    let leftPortionPageNum = (portionNumber - 1) * 3 + 1
    let rightPortionPageNum = portionNumber * 3


    // debugger
    return (
        <div className={'paginator'}>
            <div className={'paginator__content'}>
                <ul className={'paginator__list'}>
                    {portionNumber > 1 ? <button onClick={() => setPortionNumber(portionNumber - 1)}>
                        <i className="arrow left"></i>
                    </button> : ''}
                    {pageNumbers.filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum).map(number => (
                            <li className={currentPage === number ? 'active' : 'paginator__number'} key={number} onClick={() => paginate(number)}>
                            {number}
                        </li>
                    ))}
                    {portionCount > portionNumber ? <button onClick={() => setPortionNumber(portionNumber + 1)}>
                        <i className="arrow right"></i>
                    </button> : ''}
                </ul>
            </div>
        </div>
    );
};

export default Paginator;