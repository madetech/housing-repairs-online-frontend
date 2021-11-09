import React, {useEffect, useState} from 'react';
import Postcode from './reportRepair/postcode';
import Address from './reportRepair/address';
import Confirmation from './reportRepair/confirmation';
import PriorityList from './reportRepair/priorityList';
import EmergencyRepair from './reportRepair/emergencyRepair';
import NotEligible from './reportRepair/notEligible';
import SmellGas from './reportRepair/smellGas';
import Communal from './reportRepair/communal';
import NotEligibleCommunalRepairs from './reportRepair/NotEligibleCommunalRepairs'
import RepairLocation from './reportRepair/repairLocation';

import BackLink from "./backLink";
import Flow from '../flow';

import Router from 'next/router'

export default function Report() {

  let thing = 'thing'
  console.log('bwooo')
  // let history = useHistory();
  // let { path, url } = useRouteMatch();
  const [state, setState] = useState({data:{}, step: 'priority-list'});
  const flow = new Flow(setState, Router, '');

  const prevStep = () => {
    flow.prevStep(state)
  }

  // const handleChange = (input, value) => {
  //   flow.handleChange(input,value,state)
  // };

  // const storeAddresses = (addresses) => {
  //   state.addresses = addresses
  //   setState(state)
  // }
  const values = state.data;
  const addresses = state.addresses;

  useEffect(() => {
    const {pathname} = Router
    const repairPath = '/report-repair'
    // conditional redirect
    if(pathname == repairPath){
      console.log("reportin")
      // with router.push the page may be added to history
      // the browser on history back will  go back to this page and then forward again to the redirected page
      // you can prevent this behaviour using location.replace
      Router.push({pathname: `${pathname}/${state.step}`, data: state})

      return {
        redirect: {
          destination: '/hello-nextjs',
          permanent: false,
        },
      }
    }else{
    // something
    }
  },[]);


  return (
    <div>

      <BackLink onClick={prevStep}>Back</BackLink>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/priority-list`} />
        </Route>
        <Route path={`${path}/priority-list`}>
          {/*<PriorityList*/}
          {/*  handleChange={handleChange}*/}
          {/*  values={values}/>*/}
        </Route>
        <Route path={`${path}/communal`}>
          {/*<Communal*/}
          {/*  handleChange={handleChange}*/}
          {/*  values={values}/>*/}
        </Route>
        {/*<Route path={`${path}/postcode`}>*/}
        {/*  <Postcode*/}
        {/*    handleChange={handleChange}*/}
        {/*    values={values}*/}
        {/*    storeAddresses={storeAddresses}*/}
        {/*  />*/}
        {/*</Route>*/}
        <Route path={`${path}/address`}>
          {/*<Address*/}
          {/*  handleChange={handleChange}*/}
          {/*  values={values}*/}
          {/*  addresses={addresses}*/}
          {/*/>*/}
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
        <Route path={`${path}/not-eligible-communal-repairs`}>
          <NotEligibleCommunalRepairs/>
        </Route>
        <Route path={`${path}/smell-gas`}>
          <SmellGas/>
        </Route>
        <Route path={`${path}/repair-location`}>
          <RepairLocation
            handleChange={handleChange}
            values={values}
          />
        </Route>
      </Switch>
    </div>
  )
}
