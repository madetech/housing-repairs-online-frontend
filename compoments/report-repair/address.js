import PropTypes from 'prop-types';
import {useState} from 'react';
import Select from "../select";
import Link from "../link";
import Button from "../button";
import React from 'react';

const Address = ({handleChange, values, addresses}) => {
  const [state, setState] = useState({error: {}, value: 'null'});

  addresses = addresses.map((a) => {
    return {
      obj: a,
      display: `${a.addressLine1}, ${a.addressLine2}, ${a.postCode}`
    }
  })

  const found_addresses = `${addresses?.length} ${addresses?.length === 1 ? 'address': 'addresses'} found`

  const onChange = e => {
    setState({error: {}, value: e.target.value})
  }

  const Continue = e => {
    e.preventDefault();

    if (state.value === 'null') {
      return setState({error: {
        error: 'Required',
        touched: true
      }})
    }
    return handleChange('address', state.value);
  }

  return <div className="govuk-grid-row">
    <div className="govuk-grid-column-two-thirds">
      <fieldset className="govuk-fieldset">
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
          <h1 className="govuk-fieldset__heading">Where is the repair located?</h1>
        </legend>
        <form action="">
          <div>
            <Select
              input={{
                name: 'address',
                onChange: onChange
              }}
              meta={state.error}
            >
              <option value="null">
                {found_addresses}
              </option>
              {addresses?.map((address, i) => (
                <option value={Object.values(address.obj)} key={i}>
                  {address.display}
                </option>
              ))}
            </Select>
          </div>
          <Link href="not-eligible">I can&apos;t find my address on this list</Link>
          <br/>
          <br/>
          <Button onClick={Continue} >Continue</Button>
        </form>
      </fieldset>
    </div>
  </div>
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
