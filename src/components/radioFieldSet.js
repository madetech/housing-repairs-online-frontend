import PropTypes from 'prop-types';
import {
  Button
} from 'govuk-react'
import {Component} from 'react';

class RadioFieldSet extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.props.name;
    this.label = this.props.props.label;
    this.hint = this.props.props.hint;
    this.options = this.props.props.options;
    this.title = this.props.props.title;
    this.onSubmit = this.props.props.onSubmit;
    this.beforeButton = this.props.props.beforeButton;
    this.state = {
      error: null,
      value: {[this.name]: this.options.find(o => o.checked)?.value}
    };
  }

  setValue(event) {
    this.setState({
      value: {[this.name]: event.target.value},
      error: null
    })
  };

  formSubmit = () => {
    if (this.state.value[this.name]) {
      this.onSubmit(this.state.value)
    } else {
      this.setState({error: 'Required'})
    }
  };

  render(){
    return (
      <div className={this.state.error ? 'govuk-form-group--error' : 'govuk-form-group'}>
        <fieldset className="govuk-fieldset">
          <legend
            className="govuk-fieldset__legend govuk-fieldset__legend--l">
            <h1 className="govuk-fieldset__heading">
              {this.title}
            </h1>
          </legend>
          <span id={`${this.name}-error`}
            className="govuk-error-message">
            {this.state.error}
          </span>
          <div className="govuk-radios" onChange={this.setValue.bind(this)}>
            {this.options.map((o, i) => (
              <div className="govuk-radios__item" key={i}>
                <input className="govuk-radios__input"
                  id={`${this.name}-${i}`} name={this.name}
                  type="radio" value={o.value} defaultChecked={o.checked}/>
                <label className="govuk-label govuk-radios__label"
                  htmlFor={`${this.name}-${i}`}>
                  {o.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <div className="govuk-!-margin-top-6">
          {this.beforeButton}
        </div>
        <Button onClick={this.formSubmit}>Continue</Button>
      </div>
    )
  }
}

RadioFieldSet.propTypes = {
  props: PropTypes.object,
  name: PropTypes.string,
  options: PropTypes.array,
  onSubmit: PropTypes.func,
  hint:  PropTypes.string,
  label:  PropTypes.string,
  title:  PropTypes.string,
  input:  PropTypes.object,
  meta:  PropTypes.object,
  checked: PropTypes.string,
  beforeButton:  PropTypes.object
};
export default RadioFieldSet;
