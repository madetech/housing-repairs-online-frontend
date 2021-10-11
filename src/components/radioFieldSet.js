import PropTypes from 'prop-types';
import {
  Button, Fieldset,
  MultiChoice, Radio
} from 'govuk-react'
import { Field, Form } from 'react-final-form';
import {Component} from 'react';

const RadioGroup = ({label, hint, options, input, meta}) => (
  <div>
    <MultiChoice label={label} hint={hint} meta={meta}>
      {options.map(o => (
        <Radio
          key={o.value}
          {...input}
          value={o.value}
          checked={o.checked}
        >
          {o.title}
        </Radio>
      ))}
    </MultiChoice>
  </div>
);

RadioGroup.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string
  }),
  meta: PropTypes.shape({}),
  label: PropTypes.string,
  hint: PropTypes.string,
  options: PropTypes.array,
};

RadioGroup.defaultProps = {
  input: {},
  meta: {},
  label: undefined,
  hint: undefined,
  options: [],
};

class RadioFieldSet extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.props.name;
    this.label = this.props.props.label;
    this.hint = this.props.props.hint;
    this.options = this.props.props.options;
    this.title = this.props.props.title;
    this.onSubmit = this.props.props.onSubmit;
  }

  formSubmit = (params)=>{
    if (Object.keys(params).length === 0 ) {
      params[this.name] = this.options.find(o => o.checked).value;
    }
    this.onSubmit(params)
  };

  required = (value) => {
    if (value || this.options.find(o => o.checked)) {
      return undefined
    } else
      return 'Required'
  }

  render(){
    return (
      <Form
        onSubmit={this.formSubmit}
        render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Fieldset>
              <Fieldset.Legend size="XL" isPageHeading>{this.title}</Fieldset.Legend>
              <Field
                name={this.name}
                label={this.label}
                hint={this.hint}
                component={RadioGroup}
                options={this.options}
                validate={this.required}
                type='radio'
              />
            </Fieldset>
            <div className="govuk-!-margin-top-6">
              {this.props.beforeButton}
            </div>
            <Button>Continue</Button>
          </form>
        )}
      />
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
