import React from "react"

import styles from "./WelcomeToSection.module.css"

const WelcomeToSection = () => {
	return (
		<header className={styles.header}>
			<div className={styles["intro-logo"]} style={{ marginTop: "30px" }}>
				<img
					alt='ok'
					src={require("../../assets/images/logo2.png")}
					width={100}
				/>
				<h1>Welcome to the GYM</h1>
				<div className={styles['intro-button']}>
					<a href='/userlogin'>Get Started</a>
				</div>
				<div className={styles["company-icons"]}>
					<span className={styles["company-icons__item"]}>App store</span>
					<span className={styles["company-icons__item"]}>Google Play</span>
					<span className={styles["company-icons__item"]}>Windows</span>
				</div>
			</div>
		</header>
	)
}

export default WelcomeToSection
