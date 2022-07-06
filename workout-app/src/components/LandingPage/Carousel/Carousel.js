import React, { useState } from "react"
import WelcomeToIcon from "../assets/WelcomeToIcon"
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs"
import "./Carousel.css"

const Carousel = (props) => {
	const [isButtonClicked, setIsButtonClicked] = useState(false)

	return (
		<div className='carousel'>
			<WelcomeToIcon />
			<blockquote className='testimonial'>
				<p className='test-text'>
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
					nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo
					sunt hic illo fugit."
				</p>
				<p className='test-author'>Test Testing</p>
				<p className='test-foot'>Jobing working testing pesting</p>
			</blockquote>

			<button className='btn btn--left'>
				<BsFillArrowLeftCircleFill className='btn-ricons' />
			</button>
			<button className='btn btn--right'>
				<BsFillArrowRightCircleFill className='btn-ricons' />
			</button>
			<div className='dots'>
				<button className='dot dot--fill'>&nbsp;</button>
				<button className='dot'>&nbsp;</button>
				<button className='dot'>&nbsp;</button>
				<button className='dot'>&nbsp;</button>
			</div>
		</div>
	)
}

export default Carousel
