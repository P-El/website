import React, {Component} from 'react';
import PageWrapper from './component/PageWrapper';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
//pages
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Contact from './component/Pages/Contact';
  
function App() {
  return (
    <Router>
    <PageWrapper >
     
        <Route exact={true} path ="/" component ={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
           </PageWrapper>
     </Router>
  );
}

export default App;
