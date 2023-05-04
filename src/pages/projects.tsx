import React from 'react';
import '../index.css';

export interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
	return (
		<div
			className=" flex flex-col md:!flex-row justify-around
                            bg-opacity-70 drop-shadow-md
							bg-gray-900 text-white 
							dark:bg-gray-900 dark:text-white
                            w-screen md:!items-end"
		>
			<div
				className="bg-gray-700 bg-opacity-70 w-1/6 h-4/5
                                hover:h-full hover:relative hover:z-20"
			>
				<img
					src={require('../assets/img/Projects/blaz-erzetic-g5f0BJq-FRs-unsplash.jpg')}
					className=" max-w-sm h-full rounded border bg-slate-800 p-1 dark:border-neutral-700 dark:bg-neutral-800"
					alt="Project0"
				/>{' '}
			</div>

			<div
				className="bg-gray-700 w-1/6 h-4/5 z-0
                                hover:h-full hover:relative hover:z-20"
			>
				<img
					src={require('../assets/img/Projects/louis-reed-wSTCaQpiLtc-unsplash.jpg')}
					className="max-w-sm h-full rounded border bg-slate-800 p-1 dark:border-neutral-700 dark:bg-neutral-800"
					alt="Project1"
				/>{' '}
			</div>

			<div
				className="bg-gray-700 w-1/6 h-4/5 z-0
                                hover:h-full hover:relative hover:z-20"
			>
				<img
					src={require('../assets/img/Projects/michael-dziedzic-aQYgUYwnCsM-unsplash.jpg')}
					className="max-w-sm h-full rounded border bg-slate-800 p-1 dark:border-neutral-700 dark:bg-neutral-800"
					alt="Project2"
				/>{' '}
			</div>

			<div
				className="bg-gray-700 w-1/6 h-4/5 
                                hover:h-full hover:relative hover:z-20"
			>
				<img
					src={require('../assets/img/Projects/vishnu-mohanan-IAfNjy3fh6g-unsplash.jpg')}
					className="max-w-sm h-full rounded border bg-slate-800 p-1 dark:border-neutral-700 dark:bg-neutral-800"
					alt="Project3"
				/>{' '}
			</div>

			<div className="bg-stone-800 w-full md:!w-1/6 h-full z-0">
				<div className="h-full aspect-video aspect-w-16 aspect-h-16 aspect-square">
					<iframe
						src={'https://www.youtube.com/embed/4Z3r9X8OahA'}
						height="0"
						width="0"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Embedded youtube"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
