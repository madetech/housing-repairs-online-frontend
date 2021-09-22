import React, { useState } from 'react';
import Postcode from './reportRepair/postcode';
import Address from './reportRepair/address';
import Confirmation from './reportRepair/confirmation';
import TypeOfRepair from './reportRepair/typeOfRepair';
import Emergency from './reportRepair/emergency';
import { BackLink } from 'govuk-react';
import Flow from './flow';
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
  const [state, setState] = useState({data:{}, step: 'type'});
  const flow = new Flow(setState, history, path)
  const prevStep = () => {
    flow.prevStep(state)
  }

  const handleChange = (input, value) => {
    flow.handleChange(input,value,state)
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
