import React, { Component } from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom"
import './App.css';
import NavBar from "./components/navigation_bar"
import Footer from "./components/footer"
import HomePage from './pages/home_page'
import MinistriesPage from "./pages/ministries_page"
import TeamsPage from "./pages/team_page"
import FAQPage from "./pages/faq_page"
import AboutPage from "./pages/about_page"
import TimesPage from "./pages/times_page"


class App extends Component {

  render() {
    return (
      <div className="container App">
        <h1 className="text-center App-heading-text">Fremont Baptist Church</h1>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/home' component={HomePage} />
            <Route path='/ministries' component={MinistriesPage}/> 
            <Route path='/about' component={AboutPage}/>
            <Route path='/team' component={TeamsPage}/>
            <Route path='/times' component={TimesPage}/>
            <Route path='/faq' component={FAQPage}/>
          </Switch>
          <Footer />
        </main>
        <br/>
      </div>
    );
  }
}
 
export default App;
