import React from "react"

const divbar = () => {
	return (
		<>
			<div>
				<div>
					<a href='/about' activeStyle>
						About
					</a>
					<a href='/contact' activeStyle>
						Contact Us
					</a>
					<a href='/blogs' activeStyle>
						Blogs
					</a>
					<a href='/sign-up' activeStyle>
						Sign Up
					</a>
				</div>
			</div>
		</>
	)
}

export default divbar
