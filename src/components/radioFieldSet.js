import PropTypes from 'prop-types';
import {
  Button, Fieldset,
  MultiChoice, Radio
} from 'govuk-react'
import { Field, Form } from 'react-final-form';


const required = (value) => (value ? undefined : 'Required');

const RadioGroup = ({label, hint, options, input, meta}) => (
  <div>
    <MultiChoice label={label} hint={hint} meta={meta}>
      {options.map((o) => (
        <div key={o.value}>
          <Radio {...input} value={o.value} checked={o.value === input.value}>
            {o.title}
          </Radio>
        </div>
      ))}
    </MultiChoice>
  </div>
);

RadioGroup.propTypes = {
  label: PropTypes.string,
  hint:  PropTypes.string,
  options:  PropTypes.array,
  input:  PropTypes.object,
  meta:  PropTypes.object
};

const RadioFieldSet = ({props}) => (
  <Form
    onSubmit={props.onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Fieldset>
          <Fieldset.Legend size="XL" isPageHeading>{props.title}</Fieldset.Legend>
          <Field
            name={props.name}
            label={props.label}
            hint={props.hint}
            component={RadioGroup}
            options={props.options}
            validate={required}
          />
        </Fieldset>
        <div className="govuk-!-margin-top-6">
          {props.beforeButton}
        </div>
        <Button>Continue</Button>
      </form>
    )}
  />
)
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
  beforeButton:  PropTypes.object
};
export default RadioFieldSet;

