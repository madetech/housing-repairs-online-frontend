import PropTypes from 'prop-types';
import {
  GridRow,
  GridCol,
  Details
} from 'govuk-react'
import RadioFieldSet from '../radioFieldSet';

const Communal = ({handleChange, nextStep, values}) => {
  const name =  'communal';
  const title =  'Is the issue in a communal area?';
  const options =  [
    { value: 'yes', title: 'Yes'},
    { value: 'no', title: 'No'}
  ];
  const beforeButton =  (
    <Details summary="Which areas are communal?" data-testid="communal-area-prompt">
      <span data-testid="communal-area-info">
          Communal areas are any spaces that are shared with other residents. <br/>
          For example, this would include gardens, lifts, corridors, or car parks.
      </span>
    </Details>
  );

  const Continue = val => {
    const selected = val[name];
    handleChange(name, selected);
  }

  return <GridRow>
    <GridCol setWidth="two-third">
      <RadioFieldSet name={name}
        title={title}
        options={options}
        onSubmit={Continue}
        beforeButton={beforeButton}
        checked={values[name]}></RadioFieldSet>
    </GridCol>
  </GridRow>
};

Communal.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Communal;
