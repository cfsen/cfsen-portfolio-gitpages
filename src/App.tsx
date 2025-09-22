import { useState } from 'react'
import Navigation from './components/UI/nav'
import Page from './components/Layout/page'

import './App.css'
import { ContentKey, SubContentKey } from './types/navigationProps';

function App() {
	const [displayContent, setDisplayContent] = useState<ContentKey>(ContentKey.Projects);
	const [displaySubContent, setDisplaySubContent] = useState<SubContentKey>(SubContentKey.None);

	const handleContentSwap = (key: ContentKey) => {
		setDisplayContent(key);
		setDisplaySubContent(SubContentKey.None);
	};

	return (
		<>
			<div id="mainContainer">
				<h1>cfsen</h1>

				<Navigation 
					displayContent={displayContent}
					displaySubContent={displaySubContent}
					handleContentChange={handleContentSwap}
					handleSubContentChange={setDisplaySubContent}
				/>
				<Page 
					displayContent={displayContent}
					displaySubContent={displaySubContent}
					handleContentChange={handleContentSwap}
					handleSubContentChange={setDisplaySubContent}
				/>

			</div>
			<p className="footerText">
				Source code available on <a href="https://github.com/cfsen/cfsen-portfolio-gitpages" target="_blank">GitHub</a>.
			</p>
		</>
	)
}

export default App
