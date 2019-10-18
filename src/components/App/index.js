import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.scss';
import Search from 'containers/Search';
import Hero from 'containers/Hero';
import Error404 from 'components/Error404';

const App = ({ error404 }) => {
  return (
    <div className="App">
        {
          error404 && (
            <Redirect to="/not-found" />
          )
        }

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

App.propTypes = {
  error404: PropTypes.bool.isRequired
};

export default App;
