import React from "react"

import styles from "./CarouselItem.module.css"

const CarouselItem = ({ children, width }) => {
	return (
		<div className={styles["carousel-item"]} style={{ width: width }}>
			{children}
		</div>
	)
}

export default CarouselItem
