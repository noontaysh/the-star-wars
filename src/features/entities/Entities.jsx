import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchEntities, getEntitiesError, getEntitiesStatus, selectAllEntities} from "./entitiesSlice";
import {pageChanged} from "./entitiesSlice";
import {getId} from "../../utilities/getImageById";
import {useLocation} from "react-router-dom";
import Paginator from "../../components/Paginator/Paginator";
import EntityCard from "./EntityCard";
import './Entities.scss'
import '../../common/Container.scss'

const Entities = () => {
    const dispatch = useDispatch()
    const {pathname} = useLocation()

    const entities = useSelector(selectAllEntities)
    const status = useSelector(getEntitiesStatus)
    const error = useSelector(getEntitiesError)

    const currentPage = useSelector(state => state.entities.currentPage)
    const totalCount = useSelector(state => state.entities.totalCount)
    const pageSize = useSelector(state => state.entities.pageSize)

    useEffect(() => {
        const promise = dispatch(fetchEntities({pathname, currentPage}))
        return () => {
            promise.abort()
        }
    }, [currentPage, dispatch, pathname])

    const paginate = (pageNumber) => {
        dispatch(pageChanged(pageNumber))
    };

    let content
    if (status === 'pending') {
        content = <p>"Loading..."</p>
    } else if (status === 'success') {
        content = entities.map(entityCard => {
            const id = getId(entityCard.url)
            return (
                <EntityCard key={entityCard.name} {...entityCard} entityId={id} path={pathname}/>
            )
        })
    } else if (status === 'failed') {
        content = <p>{error}</p>
    }
    return (
        <div className={'entities container'}>
            <h1 className={'entities__title'}>Planets</h1>
            <Paginator currentPage={currentPage} paginate={paginate} totalCount={totalCount} pageSize={pageSize}/>
            <div className={'entities__content'}>
                {content}
            </div>
        </div>
    );
};

export default Entities;