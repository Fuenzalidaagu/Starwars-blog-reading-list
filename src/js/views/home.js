import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { PersonItem } from "../component/personItem.js"
import { PlanetsItem } from "../component/planetsItem.js"
import { VehicleItem } from "../component/vehiclesItem.js"



import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState(store.people)
	const [planets, setPlanets] = useState(store.planets)
	const [vehicles, setVehicles] = useState(store.vehicles)

	useEffect(() => {
		setPeople(store.people);
		setPlanets(store.planets);
		setVehicles(store.vehicles)

	  }, [store.people, store.planets, store.vehicles]);

	return (
		<div>
			<div className="container mb-5">
				<div className="card-container cardHome">
					<h1>Characters</h1>
					<ul className="list-group list-group-horizontal">
						{people.map(person => {
							return <PersonItem key={person.uid} person={person}/>
						})}
					</ul>
				</div>
			</div>
			<div className="container mb-5">
				<div className="card-container cardHome">
					<h1>Planets</h1>
					<ul className="list-group list-group-horizontal">
						{planets.map(planet => {
							return <PlanetsItem key={planet.uid} planet={planet}/>
						})}
					</ul>
				</div>
			</div>
			<div className="container mb-5">
				<div className="card-container cardHome">
					<h1>Vehicles</h1>
					<ul className="list-group list-group-horizontal">
						{vehicles.map(vehicle => {
							return <VehicleItem key={vehicle.uid} vehicle={vehicle}/>
						})}
					</ul>
				</div>
			</div>
		</div>
		)
};