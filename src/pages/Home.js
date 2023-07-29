import React from "react";
import Hero from "../components/Hero";
import Vision from "../content/home/Vision";
import Goals from "../content/home/Goals";
import Partners from "../content/home/Partners";
import Service from "../content/home/Service";

export default function Home() {
	return (
		<>
			<Hero/>
			<Vision/>
			<Goals/>
			<Partners/>
			<Service/>
		</>
	)
}