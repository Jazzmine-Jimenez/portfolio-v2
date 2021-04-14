import React, { useEffect, useState } from 'react';
import parseRoute from './lib/parse-route';
import Navbar from '../src/components/navbar'
import Home from './pages/home';
import Projects from './pages/projects';

// import NotFound from './pages/not-found';

export default function App(){
  const [route, setRoute] = useState(parseRoute(window.location.hash))
  console.log(route)

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const change = parseRoute(window.location.hash)
      setRoute(change)
    })
  }, [])

  const renderPage = () => {
    if (route.path === 'projects'){
      return <Projects />
    }
    else {
      return <p>Hello, inside renderPage</p>
    }
  }

    return (
      <>
        <Navbar />
        {renderPage()}
      </>
    );
}
