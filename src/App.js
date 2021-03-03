import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Courses from './Pages/Courses/Courses';
import Grades from './Pages/Grades/Grades';
import Messages from './Pages/Messages/Messages';
import Projects from './Pages/Projects/Projects';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { Component } from 'react';

// eslint-disable-next-line 
import * as bootstrap from 'bootstrap'; 

class AppBody extends Component {

  constructor(props) {
    super(props);
    this.state = { hideCalendar: false };
    
    this.props.history.listen(() => {
      this.updateCalendarVisibility();
    });
  }

  componentDidMount() {
    this.updateCalendarVisibility();
  }

  updateCalendarVisibility() {
    this.setState({
      hideCalendar:
        window.location.href.indexOf('/dashboard') < 0
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid d-flex p-0">
          <Navbar />

          <main>
            <Switch>
              <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/courses"><Courses /></Route>
              <Route path="/grades"><Grades /></Route>
              <Route path="/messages"><Messages /></Route>
              <Route path="/projects"><Projects /></Route>
              <Route path="/dashboard"><Dashboard /></Route>
            </Switch>
          </main>

        </div>
      </div>)
  }
}

let AppBodyWithRouter = withRouter(AppBody);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AppBodyWithRouter />
        </Router>
      </div>
    );
  }
}