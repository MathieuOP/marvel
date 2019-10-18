import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.scss';

import Search from 'containers/Search';
import Hero from 'containers/Hero';
import Error404 from 'components/Error404';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact component={Search} path="/"/>

        <Route
          exact
          path="/hero/:heroId"
          render={({ match }) => {
            const { heroId } = match.params;

            return <Hero heroId={heroId} />;
          }}
        />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
