import PropTypes from 'prop-types';
import { H1,GridRow, GridCol, Paragraph } from 'govuk-react'


const Emergency = () => {

  return <GridRow>
    <GridCol setWidth="two-thirds">
      <H1>This repair may be an emergency</H1>
      <Paragraph>
        An emergency repair is when there&apos;s immediate danger to you or the
        structure of the building. In an emergency we&apos;ll make the situation
        safe; we may need to return another day to complete the full repair.
      </Paragraph>
      <Paragraph>
        All emergency repairs can be reported 24 hours a day, 7 days a week by
        calling **0800 952 4444** or **020 7525 2600**. You may experience longer
        waiting times due to a high volume of calls.
      </Paragraph>
    </GridCol>
  </GridRow>
};

export default Emergency;
