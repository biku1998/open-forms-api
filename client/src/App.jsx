import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/forms" component={() => <h1>Forms page </h1>} />
          <Route exact path="/demo" component={() => <h1>Demo</h1>} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
