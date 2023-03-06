import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetsItem = (props) => {
	const { store, actions } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true)
    const [planet, setPlanet] = useState([])


    useEffect(() => {getPlanetFetch(props.planet.uid)},[])

    async function getPlanetFetch(id) {
        setIsLoading(true)
        try {await fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then(res => res.json())
        .then(data => {setPlanet(data.result.properties)
            setIsLoading(false)
    })
    }catch (error) {
        console.log('there is a problem with fetch:' + error.message)
        setIsLoading(false);
    }
    }

    function addFavorite() {
        actions.addFavoriteItem(planet)
    }

	return (
        <div>
        <div>
        <div className="card cardDescription">
            <img 
            src="https://rare-gallery.com/uploads/posts/1082805-illustration-Star-Wars-planet-space-minimalism-artwork-Earth-cartoon-circle-atmosphere-TIE-Fighter-Death-Star-line-number-screenshot-font-astronomical-object.jpg" 
            className="card-img-top" 
            alt="..." 
            />
            {isLoading?
            <div className="container d-flex justify-content-center mb-5 mt-5"><div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div></div>
            :
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <p className="card-text">
                    population:{planet.population} <br/>
                    terrain: {planet.terrain}<br/>
                </p>

                <div className="d-flex justify-content-between">
                    <Link to={`/planet/${props.planet.uid}`} className="btn btn-dark">Learn more</Link>
                    <button onClick={() => {addFavorite()}} className="btn btn-secondary"><i className="fas fa-heart"></i></button>
                </div>
            </div>}
        </div>
        </div>
        </div>
      );
};