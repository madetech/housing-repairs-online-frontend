import PropTypes from 'prop-types';
import {
  Button, Fieldset, FormGroup, InputField
} from 'govuk-react'
import {Component} from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.title = this.props.title;
    this.label = this.props.label;
    this.onSubmit = this.props.onSubmit;
    this.state = {
      value: this.props.value || '',
      error: {}
    };
  }

  input = {
    defaultValue: this.props.value,
    id: this.name, onChange: this.setValue.bind(this)
  }

  setValue(event) {
    this.setState({
      value: event.target.value,
      error: {}
    })
  };

  formSubmit = (e) => {
    if (this.state.value?.length > 0) {
      this.setState({
        value: this.state.value,
        error: {}
      });
      return this.onSubmit(this.state.value)
    }
    this.setState({
      value: this.state.value,
      error: {
        error: 'Required',
        touched: true
      }
    })
  };

  render(){
    return (
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading className='govuk-!-margin-bottom-6'>{this.title}</Fieldset.Legend>
        <form action="" className='govuk-grid-column-one-third govuk-!-padding-0'>
          <FormGroup>
            <InputField name={this.name} input={this.input} meta={this.state.error}>{this.label}</InputField>
          </FormGroup>
          <Button onClick={this.formSubmit} >Continue</Button>
        </form>
      </Fieldset>
    )
  }
}

TextInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  title:  PropTypes.string.isRequired
};
export default TextInput;
