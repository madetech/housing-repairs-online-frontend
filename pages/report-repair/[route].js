import Router, {useRouter} from 'next/router';
import Address from '../../compoments/report-repair/address';
import Communal from '../../compoments/report-repair/communal';
import Confirmation from '../../compoments/report-repair/confirmation';
import EmergencyRepair from '../../compoments/report-repair/emergency-repair';
import NotEligible from '../../compoments/report-repair/not-eligible';
import NotEligibleCommunalRepairs
from '../../compoments/report-repair/not-eligible-communal-repairs';
import Postcode from '../../compoments/report-repair/postcode';
import PriorityList from '../../compoments/report-repair/priority-list';
import RepairLocation from '../../compoments/report-repair/repair-location';
import SmellGas from '../../compoments/report-repair/smell-gas';
import Flow from '../../flow';
import {useState} from 'react';
import React from 'react';
import BackLink from "../../compoments/backLink";

function ReportRepair() {
  const [state, setState] = useState({data:{}, step: 'priority-list'});

  const router = useRouter()

  const currentPath = router.query.route

  const flow = new Flow(setState, router, 'report-repair');

  const handleChange = (input, value) => {
    flow.handleChange(input,value,state)
  };

  const prevStep = () => {
    flow.prevStep(state)
  }

  const storeAddresses = (addresses) => {
    state.addresses = addresses
    setState(state)
  }

  const values = state.data;
  console.log('-----')
  console.log(values)
  console.log('-----')
  const addresses = state.addresses;

  const component = () => {
    if (currentPath === 'address') {
      return (
        <Address
          handleChange={handleChange}
          values={values}
          addresses={addresses}/>
      )
    }
    if (currentPath === 'communal') {
      return (
        <Communal
          handleChange={handleChange}
          values={values}/>
      )
    }
    if (currentPath === 'confirmation') {
      return (
        <Confirmation/>
      )
    }
    if (currentPath === 'emergency-repair') {
      return (
        <EmergencyRepair/>
      )
    }
    if (currentPath === 'not-eligible') {
      return (
        <NotEligible/>
      )
    }
    if (currentPath === 'not-eligible-communal-repairs') {
      return (
        <NotEligibleCommunalRepairs/>
      )
    }
    if (currentPath === 'postcode') {
      return (
        <Postcode
          handleChange={handleChange}
          values={values}
          storeAddresses={storeAddresses}/>
      )
    }
    if (currentPath === 'priority-list') {
      return (
        <PriorityList
          handleChange={handleChange}
          values={values}/>
      )
    }
    if (currentPath === 'repair-location') {
      return (
        <RepairLocation
          handleChange={handleChange}
          values={values}
        />
      )
    }
    if (currentPath === 'smell-gas') {
      return (
        <SmellGas/>
      )
    }
  }

  return (
    <>
      <BackLink href="#" onClick={prevStep  }>Back</BackLink>
      {component()}
    </>
  )
}
export default ReportRepair
