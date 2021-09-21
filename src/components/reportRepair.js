import { Component } from 'react';
import Postcode from './reportRepair/postcode';
import Address from './reportRepair/address';
import Confirmation from './reportRepair/confirmation';
import TypeOfRepair from './reportRepair/typeOfRepair';
import Emergency from './reportRepair/emergency';
import {
  Redirect,
  Switch,
  Route,
  useHistory,
  useRouteMatch
} from 'react-router-dom';

export default function Report() {
  let history = useHistory();
  let { path, url } = useRouteMatch();

  let state = {
    step: 1,
    postcode: '',
    address: '',
  };

  const prevStep = () => {
    const { prevStep, step } = this.state;
    const backstep = step - 1;
    this.setState({ prevStep: backstep > 0 ? backstep : 1});
    this.setState({ step: prevStep });
  };
  const nextStep = (step) => {
    history.push(`${path}/${step}`)
    console.log(state);
  };
  const handleChange = (input, value) => {
    state[input] = value;
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.step !== 1) {
  //     const back = this.prevStep
  //     window.history.pushState(null, document.title, window.location.href);
  //     window.addEventListener('popstate', function (event){
  //       window.history.replaceState(null, document.title, window.location.href);
  //       back();
  //     });
  //   }
  // }

  // const { step } = this.state;
  const {postcode, address} = state;
  const values = {postcode, address};

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/typeOfRepair`} />
      </Route>
      <Route path={`${path}/typeOfRepair`}>
        <TypeOfRepair
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}/>
      </Route>
      <Route path={`${path}/postcode`}>
        <Postcode
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}/>
      </Route>
      <Route path={`${path}/address`}>
        <Address
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}/>
      </Route>
      <Route path={`${path}/confirmation`}>
        <Confirmation
          values={values}/>
      </Route>
      <Route path={`${path}/emergency`}>
        <Emergency/>
      </Route>
    </Switch>
  )
}
