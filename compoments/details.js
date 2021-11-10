import React from 'react';

export default function Details({summary, children, testId }) {
  return (
    <>
      <details className="govuk-details" data-module="govuk-details">
        <summary className="govuk-details__summary">
          <span className="govuk-details__summary-text" data-testid={testId}>
          {summary}
          </span>
        </summary>
        <div className="govuk-details__text">
          {children}
        </div>
      </details>

    </>
  )
}
