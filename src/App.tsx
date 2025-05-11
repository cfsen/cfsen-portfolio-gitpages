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
        <i>Developer, electronics engineer.</i>

        <Navigation activePage={displayPage} handleActive={handleNavigation} />
        <Page activePage={displayPage} handleActive={handleNavigation} />

      </div>
      <p className="read-the-docs">
        Want to check out the source code for this portfolio? <a href="#" target="_blank">Here's the Github repository.</a>
      </p>
    </>
  )
}

export default App
