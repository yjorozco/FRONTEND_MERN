import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import PlaceList from '../components/PlaceList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const UserPlaces = () => {
    const userId = useParams().userId;
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPlaces, setLoadedPlaces] = useState();
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const respondeData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`);
                console.log(respondeData);
                setLoadedPlaces(respondeData.places);

            } catch (err) { }
        }
        fetchPlaces();
    }, [sendRequest, userId]);

    const placeDeletedHandler = (deletedPlaceId) =>{
        setLoadedPlaces(prevPlaces => prevPlaces.filter(place => place.id !== deletedPlaceId))
    }
    return (<React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && <div className="center"><LoadingSpinner /></div>}
        {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler}/>}
    </React.Fragment>);
}

export default UserPlaces;