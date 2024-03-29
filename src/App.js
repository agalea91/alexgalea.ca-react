import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

import './app.css'

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/twitter">Twitter</Link>
        <Link to="/vegan-prana-power-meals">Prana</Link>
        <Link to="/bluezones">Blue</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
