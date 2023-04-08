import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadProfile, selectEntity} from "./profileSlice";
import ProfileExcerpt from "./ProfileExcerpt";
import '../../common/Container.scss'

const Profile = (props) => {
    const {objectId} = useParams()
    const {pathname} = useLocation()
    const dispatch = useDispatch()

    const {entity, status, error} = useSelector(selectEntity)

    useEffect(() => {
        dispatch(loadProfile(pathname))
    }, [objectId, dispatch, pathname])

    let content
    if (status === 'pending') {
        content = <p>Pending...</p>
    } else if (status === 'success') {
        content = <ProfileExcerpt path={pathname} objectId={objectId} {...entity} />
    } else if (status === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <div className={'container'}>
            {content}
        </div>
    );
};

export default Profile;