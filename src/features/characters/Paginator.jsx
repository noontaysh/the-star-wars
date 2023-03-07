import React, {useEffect, useState} from 'react';
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

    const [portionNumber, setPortionNumber] = useState(1)
    const [leftPortionPageNum, setLeftPortionPageNum] = useState(1)
    const [rightPortionPageNum, setRightPortionPageNum] = useState(3)
    const portionCount = Math.ceil(pagesCount / 3)
    // const leftPortionPageNum = (portionNumber - 1) * 3 + 1
    // const rightPortionPageNum = portionNumber * 3

    useEffect(() => {
        setLeftPortionPageNum((portionNumber - 1) * 3 + 1)
        setRightPortionPageNum(portionNumber * 3)
    }, [portionNumber])

    const showNextNumber = (number) => {
        if(number === rightPortionPageNum) {
            setLeftPortionPageNum(leftPortionPageNum + 1)
            setRightPortionPageNum(rightPortionPageNum + 1)
            paginate(number)
        } else if (number === leftPortionPageNum) {
            setLeftPortionPageNum(leftPortionPageNum - 1)
            setRightPortionPageNum(rightPortionPageNum - 1)
            paginate(number)
        } else {
            paginate(number)
        }
    }

    // debugger
    return (
        <div className={'paginator'}>
            <div className={'paginator__content'}>
                <ul className={'paginator__list'}>
                    {leftPortionPageNum > 1 ? <button onClick={() => setPortionNumber(portionNumber - 1)}>
                        <i className="arrow left"></i>
                    </button> : ''}
                    {pageNumbers.filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum).map(number => (
                            <li className={currentPage === number ? 'active' : 'paginator__number'} key={number} onClick={() => showNextNumber(number)}>
                            {number}
                        </li>
                    ))}
                    {pagesCount > rightPortionPageNum ? <button onClick={() => setPortionNumber(portionNumber + 1)}>
                        <i className="arrow right"></i>
                    </button> : ''}
                </ul>
            </div>
        </div>
    );
};

export default React.memo(Paginator);