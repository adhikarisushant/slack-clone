import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
    <Router>
      <>
      <Header />
      <AppBody>
        <Switch>
          <Route path="/" exact>
              {/* Chat */}
          </Route>
        </Switch>
      </AppBody>
      </>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`

`;
