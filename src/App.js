import React from "react";
import "./App.css";
import Home from "./componenets/home";
import ProductDetailPage from "./componenets/formComponent/productdetailpage";
import Error from "./componenets/errorComponent/error";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "animate.css";
class App extends React.Component {
  state = {
    loading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }
  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productdetail" component={ProductDetailPage} />
          <Route path="/error" component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
