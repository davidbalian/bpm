import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
	const [taps, setTaps] = useState([]);
	const [bpm, setBpm] = useState(0);

	return (
		<div className='counter'>
			<p>{bpm} bpm</p>
			<button
				onClick={() => {
					const time = new Date();

					setTaps([...taps, time.getTime()]);

					if (taps.length >= 2) {
						setBpm((bpm) =>
							Math.round(
								(bpm +
									60000 /
										Math.round(
											taps[taps.length - 1] -
												taps[taps.length - 2]
										)) /
									2
							)
						);
					}
				}}
			>
				Tap
			</button>
		</div>
	);
};

export default Counter;
