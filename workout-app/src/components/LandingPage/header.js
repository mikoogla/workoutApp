import React from "react"

import "./header.css"

const Header = () => {
	return (
		<header>
			<div className='intro-logo' style={{ marginTop: "30px" }}>
				<img
					alt='ok'
					src={require("../../assets/images/logo2.png")}
					width={100}
				/>
				<h1>Welcome to the GYM</h1>
				<div className='intro-button'>
					<a href='/userlogin'>Get Started</a>
				</div>
				<div className='company-icons'>
					<span className='company-icons__item'>App store</span>
					<span className='company-icons__item'>Google Play</span>
					<span className='company-icons__item'>Windows</span>
				</div>
			</div>
		</header>
	)
}

export default Header
