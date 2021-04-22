import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/signinpage/signinpage.component";
import { auth } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log("log: user", user);
    });
  }

  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
