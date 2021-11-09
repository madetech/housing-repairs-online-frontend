import React from 'react';

export default function Select({input, children }) {
  return (
    <div className="govuk-form-group">
      <label className="govuk-label" htmlFor={input.name}>
        Sort by
      </label>
      <select className="govuk-select" id={input.name} name={input.name} onChange={input.onChange}>
        {children}
      </select>
    </div>
  )
}
