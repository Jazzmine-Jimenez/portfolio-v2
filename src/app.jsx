import React, { useEffect, useState } from 'react';
import parseRoute from './lib/parse-route';
import Home from './pages/home';

// import NotFound from './pages/not-found';

export default function App(){
  const [route, setRoute] = useState(parseRoute(window.location.hash))
  console.log(route)

  // renderPage(){
  //   if (route )
  // }

    return (
      <p>hi</p>
    );
}
