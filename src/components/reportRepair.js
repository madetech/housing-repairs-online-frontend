import { useState } from 'react';
import Postcode from './reportRepair/postcode';
import Address from './reportRepair/address';
import Confirmation from './reportRepair/confirmation';
import TypeOfRepair from './reportRepair/typeOfRepair';
import Emergency from './reportRepair/emergency';
import { BackLink } from 'govuk-react'

import {
  Redirect,
  Switch,
  Route,
  useHistory,
  useRouteMatch
} from 'react-router-dom';

const FLOW = {
  'type': {prevStep: false, nextStep: [
    {condition: 'emergency', nextStep: 'emergency'},
    {condition: 'non-emergency', nextStep: 'postcode'}
  ]},
  'postcode': {prevStep: 'type', nextStep: 'address'},
  'address': {prevStep: 'postcode', nextStep: 'confirmation'},
  'confirmation': {prevStep: 'address'}
}

export default function Report() {
  let history = useHistory();
  let { path, url } = useRouteMatch();
  const [state, setState] = useState({data:{}, step: 'type'});

  const nextStep = (step) => {
    state.prevStep = state.step
    state.step = step;
    setState(state);
    history.push(`${path}/${step}`)
  };

  const prevStepIsNotDefinedOrEqualsCurrentStep = () => (state.prevStep === state.step || !state.prevStep)

  const prevStepIsInFlow = () => (FLOW[state.step] && FLOW[state.step].prevStep)

  const prevStep = () => {
    // Clicking the back button twice will result in the current
    // step being the same as the previous step, so we need to
    // workout what the new previous step should be.
    if (prevStepIsNotDefinedOrEqualsCurrentStep()) {
      if (prevStepIsInFlow()) {
        state.prevStep = FLOW[state.step].prevStep
      } else {
        return history.push('/')
      }
    }
    state.step = state.prevStep
    setState(state);
    history.push(`${path}/${state.prevStep}`)
  }

  const handleChange = (input, value) => {
    state.data[input] = value
    setState(state);
    let nextFlowStep = FLOW[state.step].nextStep
    if (Array.isArray(nextFlowStep)) {
      nextFlowStep = nextFlowStep.find(o => o.condition === value).nextStep;
    }
    nextStep(nextFlowStep);
  };

  const values = state.data;

  return (
    <div>
      <BackLink onClick={prevStep}>Back</BackLink>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/type`} />
        </Route>
        <Route path={`${path}/type`}>
          <TypeOfRepair
            handleChange={handleChange}
            values={values}/>
        </Route>
        <Route path={`${path}/postcode`}>
          <Postcode
            handleChange={handleChange}
            values={values}/>
        </Route>
        <Route path={`${path}/address`}>
          <Address
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
    </div>
  )
}
