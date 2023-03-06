import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const PersonItem = (props) => {
	const { store, setStore, actions } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true)
    const [person, setPerson] = useState([])


    useEffect(() => {getPersonFetch(props.person.uid)},[])

    async function getPersonFetch(id) {
        setIsLoading(true)
        try {await fetch(`https://www.swapi.tech/api/people/${id}`)
        .then(res => res.json())
        .then(data => {setPerson(data.result.properties)
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
            src="https://i.pinimg.com/originals/e9/6a/96/e96a9624e8e9902caa135b1f362d0197.jpg" 
            className="card-img-top" 
            alt="..." 
            />
            {isLoading?
            <div className="container d-flex justify-content-center mb-5 mt-5"><div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div></div>
            :
            <div className="card-body">
                <h5 className="card-title">{props.person.name}</h5>
                <p className="card-text">
                    Gender: {person.gender}<br/>
                    hair color: {person.hair_color}<br/>
                    eye color: {person.eye_color}
                </p>

                <div className="d-flex justify-content-between">
                <Link to={`/person/${props.person.uid}`} className="btn btn-dark">Learn more</Link>
                    <button onClick={() => {addFavorite()}} className="btn btn-secondary"><i className="fas fa-heart"></i></button>
                </div>
            </div>}
        </div>
        </div>
        </div>
      );
};