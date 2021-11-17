import PropTypes from 'prop-types';
import React from 'react';


const Confirmation = ({ values }) => {
  return (
    <div>
      <h1>Confirmation</h1>
      <h3>postcode: {values.postcode}</h3>
      <h3>Address: {values.address}</h3>
    </div>
  );
};
Confirmation.propTypes = {
  values: PropTypes.object,
};
export default Confirmation;
