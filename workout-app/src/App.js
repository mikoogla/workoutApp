import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Dashboard from "./components/Dashboard/Dashboard"
import LandingPage from "./components/LandingPage/LandingPage"
import UserLogin from "./components/UserLogin/UserLogin"

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/about' element={<LandingPage />} />
				<Route path='/contact' element={<UserLogin />} />
			</Routes>
		</Router>
	)
}

export default App
