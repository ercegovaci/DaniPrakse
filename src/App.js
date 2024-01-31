
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';


import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import ContactPage from "./page/contact";
import Home from "./page/home";
import OSavezu from "./page/o-savezu";
import DeloviProjektaStranica from "./page/delovi-projekta-stranica";
import VestiStranica from "./page/vesti-stranica";
import Kompanije from "./page/kompanije";
import OstaviCV from "./page/ostavi-cv";



function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="o-savezu" element={<OSavezu />} />
				<Route path="delovi-projekta" element={<DeloviProjektaStranica />} />
				<Route path="vesti" element={<VestiStranica />} />
				<Route path="kompanije" element={<Kompanije />} />
				<Route path="ostavi-cv" element={<OstaviCV />} />
				<Route path="kontakt" element={<ContactPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
