import './App.css';
import LandingPage from './pages/landingPage';
import ReportRepair from './pages/reportRepair';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/report-repair">
          <ReportRepair />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
