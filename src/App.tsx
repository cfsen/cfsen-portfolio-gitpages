import { useState } from 'react'
import Navigation from './components/UI/nav'
import Page from './components/Layout/page'

import './App.css'

function App() {
	const [displayPage, setDisplayPage] = useState(0);

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
			<p className="read-the-docs">
				Want to <a href="#" target="_blank">check out the source code</a>?
			</p>
		</>
	)
}

export default App
