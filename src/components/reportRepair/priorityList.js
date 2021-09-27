import PropTypes from 'prop-types';
import {
  Button,
  Radio,
  GridRow,
  GridCol,
  Fieldset,
  FormGroup
} from 'govuk-react'


const PriorityList = ({handleChange, nextStep, values}) => {
  const Continue = e => {
    e.preventDefault();
    const el = document.querySelector('input[name="priority-list"]:checked');
    handleChange('priority-list', el.value);
  }
  return <GridRow>
    <GridCol setWidth="two-third">
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading>What is the problem?</Fieldset.Legend>
        <form action="">
          <FormGroup>
            <Radio name="priority-list" value="gas-emergency">I can smell gas</Radio>
            <Radio name="priority-list" value="emergency">I have no heating</Radio>
            <Radio name="priority-list" value="emergency">I have no water</Radio>
            <Radio name="priority-list" value="emergency">I have no electricity</Radio>
            <Radio name="priority-list" value="emergency">I have water leaking on to electrics</Radio>
            <Radio name="priority-list" value="emergency">I can&apos;t secure my property</Radio>
            <Radio name="priority-list" value="emergency">I have exposed wiring or sockets</Radio>
            <Radio name="priority-list" value="emergency">My carbon monoxide or smoke alarm is beeping</Radio>
            <Radio name="priority-list" value="non-emergency">Something else</Radio>
          </FormGroup>
          <Button onClick={Continue} >Continue</Button>
        </form>
      </Fieldset>
    </GridCol>
  </GridRow>
};

PriorityList.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default PriorityList;
