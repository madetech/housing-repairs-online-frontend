import { H1, GridRow, GridCol, Paragraph } from 'govuk-react'

const NotEligible = () => {

  return <GridRow>
    <GridCol setWidth="two-thirds">
      <H1>The council may not be responsible for repairs at this property</H1>
      <Paragraph>
        If you think the council is responsible for your property, please call **0800 952 4444**.
      </Paragraph>
      <Paragraph>
        You can also view the progress of any reported communal breakdown on the same page.
      </Paragraph>
    </GridCol>
  </GridRow>
};

export default NotEligible;
