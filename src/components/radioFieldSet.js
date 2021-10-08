import PropTypes from 'prop-types';
import {
  Button, Fieldset,
  MultiChoice, Radio
} from 'govuk-react'
import { Field, Form } from 'react-final-form';

const required = (value) => {
  return value ? undefined : 'Required'
};

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
            type='radio'
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
