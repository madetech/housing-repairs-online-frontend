import React, {useEffect, useState} from 'react';

import BackLink from "../compoments/backLink";
import Flow from '../flow';

import Router from 'next/router'

export default function ReportRepairPage() {

  let thing = 'thing'
  console.log('bwooo')
  // let history = useHistory();
  // let { path, url } = useRouteMatch();
  const [state, setState] = useState({data:{}, step: 'priority-list'});
  const flow = new Flow(setState, Router, 'pathname');

  const prevStep = () => {
    flow.prevStep(state)
  }

  const handleChange = (input, value) => {
    flow.handleChange(input,value,state)
  };

  const storeAddresses = (addresses) => {
    state.addresses = addresses
    setState(state)
  }
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

    </div>
  )
}
