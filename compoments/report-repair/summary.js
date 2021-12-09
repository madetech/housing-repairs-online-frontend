import React, {useEffect, useState} from 'react';
import SummaryList from '../summaryList';
import Button from '../button';
const Summary = ({values, changeLinkUrlValues}) => {
  let [whatIsRepairProblemLink, setWhatIsRepairProblemLink] = useState(null)
  let [describeRepairProblemLink, setDescribeRepairProblemLink] = useState(null)
  useEffect(()=>{
    setWhatIsRepairProblemLink(changeLinkUrlValues[values.repairLocation])
    setDescribeRepairProblemLink(changeLinkUrlValues[values.repairProblem])
  })
  const personalDetailsSummary = [
    {pageName:'Repair address', value: values.address?.substring(1)+ ',' + values.postcode, link: 'postcode'},
    {pageName:'Appointment contact number', value: values.contactPersonNumber, link: 'contact-person'},
  ]
  const repairDetailsSummary = [
    { pageName:'Where is the problem?', value: values.repairLocation, link:'repair-location'},
    { pageName:'What is the problem?', value: values.repairProblem, link: changeLinkUrlValues[values.repairLocation]},
    { pageName:'What best describes the problem?', values: values.repairProblemBestDescription, link: changeLinkUrlValues[values.repairProblem]},
    { pageName:'Description', value: values.description?.text, link:'repair-description'}
  ]
  const appointmentDetailsSummary = [
    { pageName:'Date', value: values.availability, link:'repair-availability'},
    { pageName:'Confirmation contact details', value: values.contactDetails?.input, link: 'contact-details'},
  ]

  return(
    <>{whatIsRepairProblemLink && describeRepairProblemLink && (
      <div>
        <div className="govuk-grid-row govuk-body-m">
          <div className="govuk-grid-column-two-thirds">
            <h1 className='govuk-heading-xl'>Request summary</h1>

            <h2 className="govuk-heading-m">Personal details</h2>
            <SummaryList summary={personalDetailsSummary}/>

            <h2 className="govuk-heading-m">Repair details</h2>
            <SummaryList summary={repairDetailsSummary}/>

            <h2 className="govuk-heading-m">Appointment details</h2>
            <SummaryList summary={appointmentDetailsSummary}/>

          </div>
        </div>
        <Button>continue</Button>
      </div>
    )}
    </>
  )
}
export default Summary
