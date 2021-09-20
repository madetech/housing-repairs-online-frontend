import PropTypes from 'prop-types';
import { H1,GridRow, GridCol } from 'govuk-react'


const Emergency = ({handleChange, nextStep, values}) => {

  return <GridRow>
    <GridCol setWidth="one-third">
      <H1> Emergency repair</H1>
    </GridCol>
  </GridRow>
};

Emergency.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Emergency;
