import React from 'react';
import logo from './CAT_LOGO.svg';

export interface INavigationProps {
	ScrollToAbout: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	ScrollToContact: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ScrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

const Navigation: React.FunctionComponent<INavigationProps> = ({
	ScrollToAbout,
	ScrollToContact,
}) => {
	return (
		<section
			className=" m-0 
							flex sm:flex-row flex-col items-center
							fonts-body
							bg-opacity-70 drop-shadow-md
							bg-gray-900 text-white 
							dark:bg-gray-900 dark:text-white"
		>
			<div
				className="my-3 mx-10 items-center
							h-8 w-8 rounded-md 
							xl:my-5 xl:h-12 xl:w-12
							bg-white"
			>
				<img src={logo} alt="LOGO" />
			</div>
			<div className="w-60 text-center text-3xl">Over Artist</div>
			<div className="flex sm:flex-row flex-col basis-full justify-center">
				<div
					className="px-10 hover:bg-gray-100 hover:bg-opacity-10 "
					onClick={ScrollToTop}
				>
					<p className="text-center capitalize text-md flex-nowrap xl:text-3xl hover:underline">
						Home
					</p>
				</div>
				<div
					className="px-10 hover:bg-gray-100 hover:bg-opacity-10"
					onClick={ScrollToAbout}
				>
					<p className=" text-center capitalize text-md xl:text-3xl hover:underline">
						About
					</p>
				</div>
				<div
					className="px-10 hover:bg-gray-100 hover:bg-opacity-10"
					onClick={ScrollToContact}
				>
					<p className=" text-center capitalize text-md xl:text-3xl hover:underline">
						Contact
					</p>
				</div>
			</div>
			<div className="px-10 hover:bg-gray-100 hover:bg-opacity-10">
				<p
					className=" text-center text-md xl:text-3xl"
					onClick={() => alert('Please contact the web Administration!')}
				>
					Login
				</p>
			</div>
		</section>
	);
};

export default Navigation;
