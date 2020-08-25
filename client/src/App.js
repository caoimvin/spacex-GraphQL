import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import Ships from "./components/Ships";
import "./App.css";
import Navbar from "./components/Navbar";
import image1 from "./logo.png";
import Rockets from "./components/Rockets";
import Rocket from "./components/Rocket";

const client = new ApolloClient({
  uri: "/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Navbar />
            <Route exact path="/" component={Ships} />
            <Route exact path="/" component={Launches} />
            <Route exact path="/" component={Rockets} />
            <Route exact path="/launch/:flight_number" component={Launch} />
            {/* <Route exact path="/rocket/:rocket_id" component={Rocket} /> */}
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
