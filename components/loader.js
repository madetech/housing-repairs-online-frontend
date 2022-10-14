import React from 'react';
import { serviceName } from '../helpers/constants';

export default function Loader({}) {
  return (
    <>
      <div className="loader"></div>
      <h4 className="govuk-!-text-align-centre">Loading</h4>
    </>
  );
}
