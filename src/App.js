import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Courses from './Pages/Courses/Courses';
import Grades from './Pages/Grades/Grades';
import Messages from './Pages/Messages/Messages';
import Projects from './Pages/Projects/Projects';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <div className="container-fluid">
          <div className="row">
            <Navbar className="col-md-3 col-lg-2" />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/courses"><Courses /></Route>
                <Route path="/grades"><Grades /></Route>
                <Route path="/messages"><Messages /></Route>
                <Route path="/projects"><Projects /></Route>
                <Route path="/"><Dashboard /></Route>
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
}
