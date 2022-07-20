import React, { Fragment, useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

import "./Carousel.css"

const Carousel = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const updateIndex = newIndex => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0
		}

		setActiveIndex(newIndex)
	}

	return (
		<Fragment>
			<div className='carousel'>
				<div className='arrows'>
					<span onClick={() => updateIndex(activeIndex - 1)}>
						<AiOutlineArrowLeft size='20px' />
					</span>
					<span onClick={() => updateIndex(activeIndex + 1)}>
						<AiOutlineArrowRight size='20px' />
					</span>
				</div>
				<div
					className='carousel-inner'
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
					{React.Children.map(children, (child, index) => {
						return React.cloneElement(child, { width: "100%" })
					})}
				</div>

				<div className='indicators'>
					{React.Children.map(children, (child, index) => {
						return (
							<button
								className={`${index === activeIndex ? "active" : ""}`}
								onClick={() => updateIndex(index)}></button>
						)
					})}
				</div>
			</div>
		</Fragment>
	)
}

export default Carousel
