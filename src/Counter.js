import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
	const [taps, setTaps] = useState([]);
	const [bpm, setBpm] = useState(0);

	return (
		<div className='counter-main'>
			<div className='counter'>
				<p>{bpm} bpm</p>
				<button
					onClick={() => {
						const time = new Date();

						setTaps([...taps, time.getTime()]);

						if (taps.length >= 2) {
							let topPart = Math.ceil(taps[taps.length - 1] - taps[taps.length - 2]);
							setBpm((bpm) => Math.ceil((bpm + 60000 / topPart) / 2));
						}
					}}
				>
					Tap
				</button>
			</div>
		</div>
	);
};

export default Counter;
