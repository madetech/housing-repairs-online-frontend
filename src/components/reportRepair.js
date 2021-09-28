import React, {useEffect, useState} from 'react';
import Postcode from './reportRepair/postcode';
import Address from './reportRepair/address';
import Confirmation from './reportRepair/confirmation';
import PriorityList from './reportRepair/priorityList';
import EmergencyRepair from './reportRepair/emergencyRepair';
import NotEligible from './reportRepair/notEligible';
import SmellGas from './reportRepair/smellGas';
import Communal from './reportRepair/communal';
import { BackLink } from 'govuk-react';
import Flow from '../flow';
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
  const [state, setState] = useState({data:{}, step: 'priority-list'});
  const flow = new Flow(setState, history, path)
  const prevStep = () => {
    flow.prevStep(state)
  }

  const [ locationKeys, setLocationKeys ] = useState([])

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([ location.key ])
      }

      if (history.action === 'POP') {
        if (locationKeys[1] !== location.key) {
          setLocationKeys((keys) => [ location.key, ...keys ])
          prevStep();
        }
      }
    })
  }, [ locationKeys, ])

  const handleChange = (input, value) => {
    flow.handleChange(input,value,state)
  };
  const values = state.data;

  return (
    <div>
      <BackLink onClick={prevStep}>Back</BackLink>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/priority-list`} />
        </Route>
        <Route path={`${path}/priority-list`}>
          <PriorityList
            handleChange={handleChange}
            values={values}/>
        </Route>
        <Route path={`${path}/communal`}>
          <Communal
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
        <Route path={`${path}/emergency-repair`}>
          <EmergencyRepair/>
        </Route>
        <Route path={`${path}/not-eligible`}>
          <NotEligible/>
        </Route>
        <Route path={`${path}/smell-gas`}>
          <SmellGas/>
        </Route>
      </Switch>
    </div>
  )
}
