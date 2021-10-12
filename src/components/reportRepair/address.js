import PropTypes from 'prop-types';
import { Button, Select, GridRow, GridCol, Fieldset, FormGroup, Link } from 'govuk-react'
import { Link as RouterLink } from 'react-router-dom';

const Address = ({handleChange, values, addresses}) => {
  let address;

  addresses = addresses.map((a) => Object.values(a).join(', '))

  const onChange = e => {
    address = e.target.value
  }
  const Continue = e => {
    e.preventDefault();
    handleChange('address', address);
  }

  return <GridRow>
    <GridCol setWidth="two-thirds">
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading>Where is the repair located?</Fieldset.Legend>
        <form action="">
          <FormGroup>
            <Select
              input={{
                name: 'address',
                onChange: onChange
              }}
            >
              {addresses?.map((address, i) => (
                <option value={address} key={i}>
                  {address}
                </option>
              ))}
            </Select>
          </FormGroup>
          <Button onClick={Continue} >Continue</Button>
        </form>
      </Fieldset>
      <Link as={RouterLink} to="not-eligible">Can not find my address</Link>
    </GridCol>
  </GridRow>
};

Address.defaultProps = {
  addresses: []
};

Address.propTypes = {
  addresses: PropTypes.array,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Address;
