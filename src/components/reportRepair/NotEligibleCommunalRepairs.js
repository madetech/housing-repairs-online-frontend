import {
  H1,
  GridRow,
  GridCol,
  Paragraph,
  ListItem,
  UnorderedList,
} from 'govuk-react';

const NotEligibleCommunalRepairs = () => {
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <H1>
          For communal repairs please call us during the office hours below
        </H1>
        <UnorderedList>
          <ListItem> Monday 9am - 5pm</ListItem>
          <ListItem> Tuesday 9am - 5pm</ListItem>
          <ListItem> Wednesday 10am - 4.30pm</ListItem>
          <ListItem> Thursday 9am - 5pm</ListItem>
          <ListItem> Friday 9am - 4.30pm</ListItem>
        </UnorderedList>
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

export default NotEligibleCommunalRepairs;
