import {
  H1,
  H3,
  GridRow,
  GridCol,
  Paragraph,
  ListItem,
  Details,
} from 'govuk-react';

const NotEligible = () => {
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <H1>The council may not be responsible for repairs at this property</H1>
        <H3>Emergencies</H3>
        <Paragraph>
          An emergency is defined as something which could cause danger to
          someone’s health or safety or cause serious damage and destruction to
          property.
        </Paragraph>
        <Paragraph>
          Emergency Out of Hours Repairs - Telephone: **01522 534747**
        </Paragraph>
        <Paragraph>For non-emergency requests, call **01522 873333**</Paragraph>
        <Details summary="Opening times" data-testid="opening-times">
          <ListItem> Monday 9am - 5pm</ListItem>
          <ListItem>Tuesday 9am - 5pm</ListItem>
          <ListItem>Wednesday 9am - 4.30pm</ListItem>
          <ListItem>Thursday 10am - 5pm</ListItem>
          <ListItem>Friday 9am - 4.30pm</ListItem>
        </Details>
        <Paragraph>
          Please do not call the emergency out of hours number if the repair is
          not urgent. We may charge you a fee if the repair is not deemed an
          emergency.
        </Paragraph>
        <Paragraph>
          If you suspect you have a gas leak, you must report it immediately to
          the Gas Emergency Service **0800 111 999** or via textphone (minicom)
          on **0800 371 787**
        </Paragraph>
        <hr></hr>
        <H3>Non-emergency requests</H3>
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

export default NotEligible;
