import React, {useEffect, useState} from 'react';
import './Paginator.scss'
import '../../common/Container.scss'

const Paginator = ({currentPage, paginate, totalCount, pageSize}) => {
    // debugger
    const pagesCount = Math.ceil(totalCount / pageSize)
    const pageNumbers = []

    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i)
    }

    const [leftPortionPageNum, setLeftPortionPageNum] = useState(1)
    const [rightPortionPageNum, setRightPortionPageNum] = useState(3)

    useEffect(() => {
        if (currentPage > pageNumbers.length) {
            paginate(1)
            setLeftPortionPageNum(1)
            setRightPortionPageNum(2)
        } else if (currentPage === rightPortionPageNum) {
            setLeftPortionPageNum(currentPage - 1)
            setRightPortionPageNum(currentPage + 1)
        } else if (currentPage === leftPortionPageNum) {
            setLeftPortionPageNum(currentPage - 1)
            setRightPortionPageNum(currentPage + 1)
        } else {
            paginate(currentPage)
        }
    }, [currentPage, leftPortionPageNum, rightPortionPageNum, paginate, pageNumbers])

    return (
        <div className={'paginator'}>
            <div className={'paginator__content'}>
                <ul className={'paginator__list'}>
                    {leftPortionPageNum > 1 && <button onClick={() => paginate(currentPage - 1)}>
                        <i className="arrow left"></i>
                    </button>}
                    {pageNumbers.filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum).map(number => (
                        <li className={currentPage === number ? 'number__active' : 'paginator__number'} key={number}
                            onClick={() => paginate(number)}>
                            {number}
                        </li>
                    ))}
                    {pagesCount > rightPortionPageNum && <button onClick={() => paginate(currentPage + 1)}>
                        <i className="arrow right"></i>
                    </button>}
                </ul>
            </div>
        </div>
    );
};

export default Paginator;