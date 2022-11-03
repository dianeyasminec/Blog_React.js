import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from "./components/Books";
import Create from "./components/Create";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./styles/app.css";
import BlogDetails from "./components/BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import imgOne from './Images/imgOne.jpg'
import poosh4 from './Images/poosh4.jpg'
import poosh2 from './Images/poosh2.jpg'
import poosh3 from './Images/poosh3.jpg'


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navigation />
          <div className="content">
            <Switch>
              <Route exact path="/books">
                <Books/>
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="/">
                <Home imgOne={imgOne} poosh4={poosh4} poosh2={poosh2} poosh3={poosh3}/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
