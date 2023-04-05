import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getEntityError, getEntityStatus, loadProfile, selectEntity} from "./profileSlice";
import ProfileExcerpt from "./ProfileExcerpt";
import '../../common/Container.scss'

const Profile = (props) => {
    const {objectId} = useParams()
    const {pathname} = useLocation()
    const dispatch = useDispatch()

    const planet = useSelector(selectEntity)
    const status = useSelector(getEntityStatus)
    const error = useSelector(getEntityError)

    const apiPath = pathname.replace('/', '') // path to make api request

    useEffect(() => {
        dispatch(loadProfile(apiPath))
    }, [objectId, dispatch])

    let content
    if (status === 'pending') {
        content = <p>Pending...</p>
    } else if (status === 'idle') {
        content = <ProfileExcerpt path={pathname} objectId={objectId} {...planet} />
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