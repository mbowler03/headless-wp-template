import React from "react";


function HeroSection() {
	return (
		<div className="flex justify-center items-center flex-col pt-20 pb-20 text-center font-bold lg:text-6xl text-5xl space-y-2">
			<h1 className="text-gray-900 pb-10">
				Matts  <span className="text-blue-500">Headless</span> &{" "}
				<span className="text-blue-400">Responsive WP Template</span>
			</h1>
		</div>
	);
}

export default HeroSection;