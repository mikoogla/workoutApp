import React from "react"
import { AiFillApple, AiOutlineGoogle, AiFillWindows } from "react-icons/ai"
import WelcomeToIcon from "./assets/WelcomeToIcon"

import styles from "./WelcomeToSection.module.css"

const WelcomeToSection = () => {
	return (
		<div className={styles.section}>
			<div className={styles["intro-logo"]} style={{ marginTop: "30px" }}>
				<WelcomeToIcon />
				<h1>Welcome to the GYM</h1>
				<div className={styles["intro-button"]}>
					<a href='/userlogin'>Get Started</a>
				</div>
				<div className={styles["company-icons"]}>
					<span className={styles["company-icons__item"]}>
						{<AiFillApple />}App Store
					</span>
					<span className={styles["company-icons__item"]}>
						{<AiOutlineGoogle />}Google Play
					</span>
					<span className={styles["company-icons__item"]}>
						{<AiFillWindows />}Windows
					</span>
				</div>
			</div>
		</div>
	)
}

export default WelcomeToSection
