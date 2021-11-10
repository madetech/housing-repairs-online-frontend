import React from 'react';

export default function Select({input, children, label }) {
  return (
    <div className="govuk-form-group">
      <label className="govuk-label" htmlFor={input.name}>
        {label}
      </label>
      <select className="govuk-select" id={input.name} name={input.name} onChange={input.onChange}>
        {children}
      </select>
    </div>
  )
}
