import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from "history";
import 'bulma/css/bulma.css';
import { store, FirebaseProvider } from './common';
import { Provider } from "react-redux";

import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';
import Dashboard from './views/Dashboard';
import AuthLoading from './views/AuthLoading';
import Home from './views/Home/Home';
import Newpharmacy from './views/Pharmacies/NewPharmacy';
import NewMed from './views/Meds/NewMed';
import Pharmacies from './views/Pharmacies/Pharmacies';

var hist = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <FirebaseProvider>
        <AuthLoading>
          <Router history={hist}>
            <Switch>
                <Route  path={'/'} exact component={Home} />
                <Route  path={'/signup'}  exact component={SignUp} />
                <Route  path={'/login'} exact component={SignIn} />
                <Route  path={'/pharmacies'} exact component={Pharmacies} />
                <Route  path={'/addpharmacy'} exact component={Newpharmacy} />
                <Route  path={'/addmed'} exact component={NewMed} />
            </Switch>
          </Router>
        </AuthLoading>   
        </FirebaseProvider>    
    </Provider>
  );
}

export default App;
