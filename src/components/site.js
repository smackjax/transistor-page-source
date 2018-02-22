import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './header/header.component';
import Footer from './footer/footer.component';
import MainPage from './page-main/page-main.component';
import ContactPage from './page-contact/page-contact.component';

import './site.css';
import './text-style.css';
import './page-style.css';

class Site extends Component {
  componentWillUpdate(){
    window.scroll(0, 0);
  }

  render() {
    return (
      <div className="site">
        <Header />
        
        {/* Page routing */}
        <Switch>
          
          <Route path="/home" component={MainPage} />
          <Route path="/contact" component={ContactPage} />
          {/* If a route isn't found, defaults to home page */}
          <Route render={()=><Redirect to="/home" />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Site;
