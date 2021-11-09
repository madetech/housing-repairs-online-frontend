import PropTypes from 'prop-types';
import Details from '../details';
import RadioFieldSet from '../radioFieldSet';
import React from 'react';


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

  return <div className="govuk-grid-row">
    <div className="govuk-grid-column-two-thirds">
      <RadioFieldSet name={name}
        title={title}
        options={options}
        onSubmit={Continue}
        beforeButton={beforeButton}
        checked={values[name]}></RadioFieldSet>
    </div>
  </div>
};

Communal.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Communal;
