import { H1, GridRow, GridCol, Paragraph } from 'govuk-react'

const SmellGass = () => {

  return <GridRow>
    <GridCol setWidth="two-thirds">
      <H1>If you smell gas</H1>
      <Paragraph>
        If you can smell gas, please call the gas emergency number: 0800 111 999
      </Paragraph>
    </GridCol>
  </GridRow>
};

export default SmellGass;
