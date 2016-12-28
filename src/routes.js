import React from 'react'
import { Route, IndexRoute } from 'react-router'

import LayoutComponent from './components/LayoutComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
// import AthletePage from './components/AthletePage';
import NotFoundComponent from './components/NotFoundComponent';


const routes = (
  <Route path="/" component={LayoutComponent}>
    <IndexRoute component={HomeComponent} />
    <Route path="about" name="about" component={AboutComponent} />
    <Route path="contact" name="contact" component={ContactComponent} />
    <Route path="*" component={NotFoundComponent} />
  </Route>
);

export default routes;
