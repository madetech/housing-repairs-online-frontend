import React from 'react';

export default function Button({onClick, children }) {
  return (
    <button className="govuk-button" onClick={onClick} data-module="govuk-button">
      {children}
    </button>
  )
}
