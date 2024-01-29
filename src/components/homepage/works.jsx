import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./twitter.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Hence Technologies</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">June 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./facebook.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Sand Technologies</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">May 2022 - December 2022</div>
						</div>

						<div className="work">
							<img
								src="./Assetresource.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Asset and Resource Management Company</div>
							<div className="work-subtitle">
								Business Intelligence Developer
							</div>
							<div className="work-duration">June 2021 - August 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
