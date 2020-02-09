import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

import './app.css'

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/bluezones">Blue</Link>
        {/* <Link to="/photos">Photos</Link>
        <Link to="/photos/macros">Macros</Link> */}
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
