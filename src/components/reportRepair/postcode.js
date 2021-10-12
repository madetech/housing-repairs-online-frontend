import PropTypes from 'prop-types';
import {
  Button,
  InputField,
  GridRow,
  GridCol,
  Fieldset,
  FormGroup
} from 'govuk-react'
import {SearchProperties} from '../../gateways';


const Postcode = ({handleChange, values, storeAddresses}) => {
  let postcode;

  const onChange = e => {
    postcode = e.target.value
  }
  const Continue = e => {
    e.preventDefault();
    SearchProperties(postcode)
      .then(results => {
        storeAddresses(results);
        handleChange('postcode', postcode);
      })
      .catch(err => {
        console.error(err)
      });
  }
  const input = { defaultValue: values.postcode, id: 'postcode', onChange: onChange }
  return <GridRow>
    <GridCol setWidth="two-thirds">
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading>Where is the repair located?</Fieldset.Legend>
        <form action="">
          <FormGroup>
            <InputField name="postcode" input={input}>Postcode</InputField>
          </FormGroup>
          <Button onClick={Continue} >Continue</Button>
        </form>
      </Fieldset>
    </GridCol>
  </GridRow>
};

Postcode.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Postcode;
