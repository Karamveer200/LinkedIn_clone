import "./App.css";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Home from "./components/Home";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Header />
            <Home />
          </Route>

          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
