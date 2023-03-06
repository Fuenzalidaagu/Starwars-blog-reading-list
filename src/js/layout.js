import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context} from "./store/appContext"

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Person } from "./views/person"
import { Planet } from "./views/planet"
import { Vehicle } from "./views/vehicle"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context); 
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					{store.isLoading?<div className="container d-flex justify-content-center mb-5 mt-5"><div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div></div>:
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/person/:personId" element={<Person />} />
						<Route path="/planet/:planetId" element={<Planet />} />
						<Route path="/vehicle/:vehicleId" element={<Vehicle />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
						}
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
