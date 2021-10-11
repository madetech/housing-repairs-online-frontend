import PropTypes from 'prop-types';
import {
  GridRow,
  GridCol,
} from 'govuk-react'

import RadioFieldSet from '../radioFieldSet';


const PriorityList = ({handleChange, values}) => {
  const Continue = val => {
    const selected = val['priority-list'];
    handleChange('priority-list', selected);
  }

  const radioOptions = [
    { value: 'gas-emergency/1', title: 'I can smell gas'},
    { value: 'emergency/2', title: 'I have no heating'},
    { value: 'emergency/3', title: 'I have no water'},
    { value: 'emergency/4', title: 'I have no electricity'},
    { value: 'emergency/5', title: 'I have water leaking on to electrics'},
    { value: 'emergency/6', title: 'I can\'t secure my property'},
    { value: 'emergency/7', title: 'I have exposed wiring or sockets'},
    { value: 'emergency/8', title: 'My carbon monoxide or smoke alarm is beeping'},
    { value: 'non-emergency/9', title: 'Something else'},
  ]

  const name =  'priority-list';
  const title =  'What is the problem?';
  const options =  radioOptions.map(o =>{
    if (values['priority-list'] == o.value) {
      o.checked =  true
    }
    return o
  });

  return <GridRow>
    <GridCol setWidth="two-third">
      <RadioFieldSet name={name}
        title={title}
        options={options} onSubmit={Continue}></RadioFieldSet>
    </GridCol>
  </GridRow>
};

PriorityList.propTypes = {
  nextStep: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default PriorityList;
