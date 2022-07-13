import React from "react"

import "./Carousel.css"

const Carousel = ({ children }) => {
	return (
		<div className='carousel'>
			<div className='carousel-inner' style={{ transform: "translateX(-0%)" }}>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child, { width: "100%" })
				})}
			</div>
		</div>
	)
}

export default Carousel
