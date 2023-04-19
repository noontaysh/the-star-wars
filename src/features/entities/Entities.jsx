import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchEntities, selectAllEntities, setStatus} from "./entitiesSlice";
import {pageChanged} from "./entitiesSlice";
import {getId} from "../../utilities/getImageById";
import {useLocation} from "react-router-dom";
import Paginator from "../../components/Paginator/Paginator";
import EntityCard from "./EntityCard";
import './Entities.scss'
import '../../common/Container.scss'
import Preloader from "../../components/preloader/Preloader";

const Entities = () => {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const [content, setContent] = useState()

    const {entities, status, error, currentPage, totalCount, pageSize} = useSelector(selectAllEntities)


    useEffect(() => {
        const promise = dispatch(fetchEntities({pathname, currentPage}))
        return () => {
            promise.abort()
        }
    }, [currentPage, dispatch, pathname])


    useEffect(() => {
        if (status === 'pending') {
            setContent(<Preloader />)
        } else if (status === 'success') {
            setContent(entities !== undefined && entities.map(entityCard => {
                const id = getId(entityCard.url)
                return (
                    <EntityCard key={id} {...entityCard} entityId={id} path={pathname}/>
                )
            }))
        } else if (status === 'failed') {
            setContent(<p>{error}</p>)
        }
    }, [status, pathname])

    const paginate = (pageNumber) => {
        dispatch(pageChanged(pageNumber))
    };

    return (
        <div className={'entities container'}>
            <h1 className={'entities__title'}>{pathname.replace(/\//g, '')}</h1>
            <Paginator currentPage={currentPage} paginate={paginate} totalCount={totalCount} pageSize={pageSize}/>
            <div className={'entities__content'}>
                {content}
            </div>
        </div>
    );
};

export default Entities;