import React, { useRef } from 'react';
import Navigation from './components/Navigation/navigation';
import './index.css';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import About from './pages/about';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
	let refAbout = useRef<HTMLDivElement>(null); //React.createRef<HTMLDivElement>();
	let refContact = useRef<HTMLDivElement>(null);

	const ScrollToAbout = () => refAbout.current?.scrollIntoView();
	const ScrollToContact = () => refContact.current?.scrollIntoView();

	return (
		<div>
			<div className="bg-homeBack bg-cover h-screen w-screen">
				<Navigation
					ScrollToAbout={ScrollToAbout}
					ScrollToContact={ScrollToContact}
				/>
				<Home ScrollToContact={ScrollToContact} />
			</div>
			<div className="w-screen flex">
				<Projects />
			</div>
			<div className="w-screen ">
				<About ref={refAbout} />
				<Contact ref={refContact} />
			</div>
		</div>
	);
};

export default Application;
