import {
  H1,
  GridRow,
  GridCol,
  Paragraph
} from 'govuk-react';

const NotEligibleNonEmergency = () => {
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <H1>The council may not be responsible for repairs at this property</H1>
        <Paragraph>
          If you think the council is responsible for your property, please call
          **01522 873 355**.
        </Paragraph>
        <Paragraph>
          If you are a leaseholder you can still report communal repairs on
          **01522 873333**.
        </Paragraph>
      </GridCol>
    </GridRow>
  );
};

export default NotEligibleNonEmergency;
