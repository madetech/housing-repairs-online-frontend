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
    {pageName:'Repair address', link: 'postcode', value: values.address?.substring(1)+ ',' + values.postcode},
  ]
  const repairDetailsSummary = [
    { pageName:'Where is the problem?', link:'repair-location', value: values.repairLocation},
    { pageName:'What is the problem?', link: changeLinkUrlValues[values.repairLocation], value: values.repairProblem},
    { pageName:'What best describes the problem?', link: changeLinkUrlValues[values.repairProblem], values: values.repairProblemBestDescription},
    { pageName:'Description', link:'repair-description', value: ''}
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

          </div>
        </div>
        <Button >continue</Button>
      </div>
    )}
    </>
  )
}
export default Summary
