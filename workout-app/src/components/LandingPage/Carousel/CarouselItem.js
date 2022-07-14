import React from "react"

import styles from "./CarouselItem.module.css"

const CarouselItem = ({ children }) => {
	return <div className={styles["carousel-item"]}>{children}</div>
}

export default CarouselItem
