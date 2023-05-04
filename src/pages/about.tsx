import React, { RefObject } from 'react';
import '../index.css';

export interface IAboutProps {}

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div>
			<section
				className="
                flex flex-col
				fonts-body
				bg-opacity-85 drop-shadow-md
				bg-gray-900 text-white 
				dark:bg-gray-900 dark:text-white
				
				items-center"
			>
				<div
					ref={ref as RefObject<HTMLInputElement>}
					className="flex flex-col justify-evenly h-5/6 xl:!my-36 3xl:!my-80"
					id="About"
				>
					<h1 className=" mt-10 text-center text-5xl md:!text-8xl overline decoration-sky-500">
						{' '}
						About
					</h1>
					<p className=" mt-10 text-orange-400 text-center text-3xl md:!text-5xl">
						{' '}
						We provide various services such as:{' '}
					</p>
					<ul className=" mb-5 mt-5 xl:!mt-10 text-left ">
						<li className="text-center text-yellow-200 text-2xl md:!text-4xl font-bold">
							{' '}
							Electronic and Mechatronic design and prototyping
						</li>
						<ul className="text-center m-5 text-1xl md:!text-3xl">
							<li> Power electronics design</li>
							<li> Magnetic component design </li>
							<li> Electronic and mechanic simulations</li>
						</ul>

						<li className="text-center text-yellow-200 text-2xl md:!text-4xl font-bold">
							{' '}
							Software development
						</li>
						<ul className="text-center m-5 text-1xl md:!text-3xl">
							<li> FPGA programming</li>
							<li> Embedded software design</li>
							<li> Web projects </li>
							<li> Desktop aplications </li>
						</ul>

						<li className="text-center text-yellow-200 text-2xl md:!text-4xl font-bold">
							{' '}
							Mechanic design and construction of prototypes
						</li>
						<ul className="text-center m-5 text-1xl md:!text-3xl">
							<li> 3D printing </li>
							<li> Laser cutting </li>
							<li> CNC </li>
							<li> Precise welding</li>
						</ul>
					</ul>
				</div>
			</section>
		</div>
	);
});

export default About;
