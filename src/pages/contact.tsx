import React, { RefObject } from 'react';
import '../index.css';

export interface IContactProps {}

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<section
			className="
                flex flex-col
				fonts-body
				bg-opacity-85 drop-shadow-md
				bg-gray-900 text-white 
				dark:bg-gray-900 dark:text-white"
		>
			<div
				ref={ref as RefObject<HTMLInputElement>}
				className="flex flex-col text-white items-center justify-center bg-gray-800"
			>
				<h1 className=" mt-10  text-5xl md:!text-8xl  overline decoration-red-500">
					{' '}
					Contact{' '}
				</h1>
				<div className="flex flex-row mt-10">
					<h1 className=" text-1xl md:!text-4xl "> Email: </h1>
					<h1 className="mx-10 text-1xl  md:!text-3xl underline text-blue-300">
						{' '}
						overartist@protonmail.com{' '}
					</h1>
				</div>
				<div className="flex flex-row">
					<h1 className="text-1xl md:!text-4xl"> Phone: </h1>
					<h1 className="mx-10 text-1xl  md:!text-3xl underline text-blue-300">
						{' '}
						+48 518 145 445{' '}
					</h1>
				</div>
				<div className="h-40"></div>
			</div>
		</section>
	);
});

export default Contact;
