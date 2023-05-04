import React from 'react';
import '../index.css';

export interface IHomeProps {
	ScrollToContact: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Home: React.FunctionComponent<IHomeProps> = ({ ScrollToContact }) => {
	return (
		<div className="flex flex-col h-5/6  w-full my-8 md:!my-14 xl:!my-36 3xl:!my-80 ">
			<div
				className="
                    flex  flex-row
                    justify-around h-2/4"
			>
				<div className="my-30 mr-5 md:!mr-40 w-2/4 h-full flex flex-col bg-black bg-opacity-80 items-center justify-around">
					<h1 className="text-white capital text-center text-1xl md:!text-7xl">
						{' '}
						Design Process
					</h1>
					<p className="my-5 text-white capital text-center text-sm md:!text-3xl">
						{' '}
						Design, develop and Deploy. New technologies, robotics,
						automation, power electronics, software, general-use
						electronics, and much more!{' '}
					</p>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white
                                         font-bold w-2/3 py-3 px-4 rounded-full text-1xl md:!text-4xl"
						onClick={ScrollToContact}
					>
						Contact us!
					</button>
				</div>
				<div className="w-2/6 h-max mr-2 bg-black bg-opacity-80">
					<h1 className="text-white capital text-center text-1xl md:!text-4xl 3xl:!text-4xl ">
						What we do?
					</h1>
					<p className="text-white capital text-sm md:!text-2xl my-10 ml-2 mr-2 text-justify">
						Comprehensive project implementation, from consultation on the
						first sketch, through prototyping, to product implementation in
						production. Backed by many years of experience in the industry.
						We are a young independent team full of innovative ideas. We are
						looking for new challenges and partners.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
