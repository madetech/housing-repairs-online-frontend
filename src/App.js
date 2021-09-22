import './App.css';
import LandingPage from './pages/landingPage';
import ReportRepairPage from './pages/reportRepair';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/report-repair">
          <ReportRepairPage />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
