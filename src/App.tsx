import { useState } from 'react'
import Navigation from './components/UI/nav'
import Page from './components/Layout/page'

import './App.css'
import { ContentKey } from './types/navigationProps';

function App() {
	const [displayPage, setDisplayPage] = useState<ContentKey>(ContentKey.Projects);

	const handleNavigation = (navTo: number) => {
		setDisplayPage(navTo);
	}

	return (
		<>
			<div id="mainContainer">
				<h1>cfsen</h1>

				<Navigation activePage={displayPage} handleActive={handleNavigation} />
				<Page activePage={displayPage} handleActive={handleNavigation} />

			</div>
			<p className="footerText">
				Want to <a href="https://github.com/cfsen/cfsen-portfolio-gitpages" target="_blank">check out the source code</a>?
			</p>
		</>
	)
}

export default App
