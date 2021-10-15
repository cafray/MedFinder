import React from "react";
import {Router, Route, Switch} from 'react-router-dom';
import { store, FirebaseProvider } from './common';
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import Registration from "./views/registration";
import Checkout from "./views/checkout";
import Pharmacy from "./views/pharmacy";
import Sidebar from "./components/sidebar";
import Home from "./views/home";
import AssetsLoading from "./views/AssetsLoading";
var hist = createBrowserHistory();

function App() {
  return (
  
    <Provider store={store}>
      <FirebaseProvider>
            <Router history={hist}>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/pharmacy/:id" exact component={Pharmacy}/>
                <Route path="/checkout" exact component={Checkout}/>
                <Route path="/registration" exact component={Registration}/>
              </Switch>
              <Sidebar/>
            </Router>
      </FirebaseProvider> 
    </Provider>
);
}

export default App;
