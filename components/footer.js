import React from 'react';
import PropTypes from 'prop-types';

const FooterListItem = ({text, location, index}) => {
  return (<li className="govuk-footer__inline-list-item">
    <a className="govuk-footer__link" href={location}
      data-testid={`govuk-footer__link_${index}`}>
      {text}
    </a>
  </li>)
}

FooterListItem.propTypes = {
  text: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}


const Footer = () => {
// TODO: only part of the licence link should be a link  - see in the gds standard for footer
  const links = [{
    text: 'Accessibility Statement',
    location: 'href=https://www.lincoln.gov.uk/accessibility'
  }, {
    text: 'Open Government Licence v3.0, except where otherwise stated',
    location: 'href=https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
  },

  ]

  return (<footer className="govuk-footer" role="contentinfo">
    <div className="govuk-width-container">
      <h2 className="govuk-visually-hidden">Support links</h2>
      <ul className="govuk-footer__inline-list">
        {links.map((link, index) => (
          <FooterListItem text={link.text} location={link.location} index={index} key={`footer-list-item-${index}`}/>))}
        <a
          className="govuk-footer__meta-item govuk-footer__link govuk-footer__copyright-logo"
          href="https://www.lincoln.gov.uk" target="_blank"
          rel="noopener noreferrer">©
          Crown copyright
        </a>
      </ul>
    </div>
  </footer>)
};

export default Footer;
