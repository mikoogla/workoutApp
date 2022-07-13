import React from "react"

import styles from "./CarouselItem.module.css"

const CarouselItem = props => {
	return <div className={styles["carousel-item"]}>{props.children}</div>
}

export default CarouselItem
