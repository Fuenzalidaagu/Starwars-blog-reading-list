import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const VehicleItem = (props) => {
	const { store, setStore, actions } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true)
    const [vehicle, setVehicle] = useState([])


    useEffect(() => {getVehicleFetch(props.vehicle.uid)},[])

    async function getVehicleFetch(id) {
        setIsLoading(true)
        try {await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
        .then(res => res.json())
        .then(data => {setVehicle(data.result.properties)
            setIsLoading(false)
    })
    }catch (error) {
        console.log('there is a problem with fetch:' + error.message)
        setIsLoading(false);
    }
    }

    function addFavorite() {
        actions.addFavoriteItem(person)
    }

	return (
        <div>
        <div>
        <div className="card cardDescription">
            <img 
            src="https://isopixel.net/wp-content/uploads/2015/11/star-wars-2.jpg" 
            className="card-img-top" 
            alt="..." 
            />
            {isLoading?
            <div className="container d-flex justify-content-center mb-5 mt-5"><div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div></div>
            :
            <div className="card-body">
                <h5 className="card-title">{props.vehicle.name}</h5>
                <p className="card-text">
                    Cost in credits: {vehicle.cost_in_credits}<br/>
                    Model: {vehicle.model}<br/>
                    Sassengers: {vehicle.passengers}
                </p>

                <div className="d-flex justify-content-between">
                <Link to={`/vehicle/${props.vehicle.uid}`} className="btn btn-dark">Learn more</Link>
                    <button onClick={() => {addFavorite()}} className="btn btn-secondary"><i className="fas fa-heart"></i></button>
                </div>
            </div>}
        </div>
        </div>
        </div>
      );
};