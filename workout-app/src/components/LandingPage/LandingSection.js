import Carousel from "./Carousel/Carousel"
import CarouselItem from "./Carousel/CarouselItem"

const LandingSection = () => {
	return (
		<Carousel>
			<CarouselItem>
				<h4>Welcome to the Workout App</h4>
			</CarouselItem>
			<CarouselItem>Item 2</CarouselItem>
			<CarouselItem>Item 3</CarouselItem>
		</Carousel>
	)
}

export default LandingSection
