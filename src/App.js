import React from "react";
import About from "./About";
import "./App.css";
import Counter from "./Counter";

const App = () => {
	return (
		<div className='app'>
			<Counter />
			<About />
		</div>
	);
};

export default App;
