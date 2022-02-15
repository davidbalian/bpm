import React from "react";
import "./About.css";
import src from "./metro-img.jpeg";

const About = () => {
	return (
		<div className='about'>
			<h2>What does BPM mean in music?</h2>
			<img src={src} alt='image of a metronome' className='about-metro' />
			<p className='p'>In music, BPM stands for Beats Per Minute.</p>
			<p className='p'>
				In musical terminology, tempo (Italian for "time"; plural tempos, or tempi from the
				Italian plural) is the speed or pace of a given piece. In classical music, tempo is
				typically indicated with an instruction at the start of a piece (often using
				conventional Italian terms) and is usually measured in beats per minute (or bpm). In
				modern classical compositions, a "metronome mark" in beats per minute may supplement
				or replace the normal tempo marking, while in modern genres like electronic dance
				music, tempo will typically simply be stated in bpm.
			</p>
			<p className='p'>
				Tempo may be separated from articulation and meter, or these aspects may be
				indicated along with tempo, all contributing to the overall texture. While the
				ability to hold a steady tempo is a vital skill for a musical performer, tempo is
				changeable. Depending on the genre of a piece of music and the performers'
				interpretation, a piece may be played with slight tempo rubato or drastic variances.
				In ensembles, the tempo is often indicated by a conductor or by one of the
				instrumentalists, for instance the drummer.
			</p>
		</div>
	);
};

export default About;
