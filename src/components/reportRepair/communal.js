import PropTypes from 'prop-types';
import {
  Button,
  Radio,
  GridRow,
  GridCol,
  Fieldset,
  FormGroup, Details
} from 'govuk-react'


const Communal = ({handleChange, nextStep, values}) => {
  const Continue = e => {
    e.preventDefault();
    const el = document.querySelector('input[name="communal"]:checked');
    handleChange('communal', el.value);
  }
  return <GridRow>
    <GridCol setWidth="two-third">
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading>Is the issue in a communal area?</Fieldset.Legend>
        <form action="">
          <FormGroup>
            <Radio name="communal" value="yes">Yes</Radio>
            <Radio name="communal" value="no">No</Radio>
          </FormGroup>
          <Details summary="Which areas are communal?" className="govuk-!-margin-top-6" data-testid="landing-page-gas-prompt">
            Communal areas are any spaces that are shared with other residents. <br/>
            For example, this would include gardens, lifts, corridors, or car parks.
          </Details>
          <Button onClick={Continue} >Continue</Button>
        </form>
      </Fieldset>
    </GridCol>
  </GridRow>
};

Communal.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Communal;
