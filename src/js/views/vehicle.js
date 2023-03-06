import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = (props) => {
	const { store, actions } = useContext(Context);
	const { vehicleId } = useParams();

	const [isLoading, setIsLoading] = useState(true)
    const [vehicle, setVehicle] = useState([])


    useEffect(() => {getVehicleFetch(vehicleId)},[])

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

	return (
			<div className="container">
			<div className="card mb-3">
			{isLoading?
			<div className="container d-flex justify-content-center mb-5 mt-5"><div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
				</div></div>
			:
			<div className="row g-0">
			  <div className="col-md-4">
				<img src="https://isopixel.net/wp-content/uploads/2015/11/star-wars-2.jpg" className="img-fluid rounded-start " alt="..."/>
			  </div>
			  <div className="col-md-8">
				<div className="card-body text-center">
				  <h1 className="card-title">{vehicle.name}</h1>
				  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
			  </div>
			<div className="card-footer text-muted">
				<div className="row">
					<div className="container col-2">
						Name: <br/>
						{vehicle.name}
					</div>
					<div className="container col-2">
						Model: <br/>
						{vehicle.model}
					</div>
					<div className="container col-2">
                        Cost in credits: <br/>
						{vehicle.cost_in_credits}
					</div>
					<div className="container col-2">
                        Length: <br/>
						{vehicle.length}
					</div>
					<div className="container col-2">
                        Manufacturer: <br/>
						{vehicle.manufacturer}
					</div>
					<div className="container col-2">
                        Passengers: <br/>
						{vehicle.passengers}
					</div>
				</div>
  			</div>

			</div>
			}
		  </div>
		  </div>
	);
};

Vehicle.propTypes = {
	match: PropTypes.object
};