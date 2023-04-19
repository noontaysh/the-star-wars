import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadProfile, selectEntity} from "./profileSlice";
import ProfileExcerpt from "./ProfileExcerpt";
import '../../common/Container.scss'
import Preloader from "../../components/preloader/Preloader";
import './Profile.scss'

const Profile = (props) => {
    const {objectId} = useParams()
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const [content, setContent] = useState()

    const {entity, status, error} = useSelector(selectEntity)

    useEffect(() => {
        dispatch(loadProfile(pathname))
    }, [objectId, dispatch, pathname])

    useEffect(() => {
        if (status === 'pending') {
            setContent(<Preloader />)
        } else if (status === 'success') {
            setContent(<ProfileExcerpt path={pathname} objectId={objectId} {...entity} />)
        } else if (status === 'failed') {
            setContent(<p>{error}</p>)
        }
    }, [status, pathname])

    return (
        <div className={'profile container'}>
            {content}
        </div>
    );
};

export default Profile;