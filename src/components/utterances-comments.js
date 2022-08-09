import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const UtterancesComments = ({ repo, theme, issueTerm }) => {
  useEffect(() => {
    const utterances = document.querySelector('.utterances');
    if (utterances) {
      utterances.remove();
    }
    const script = document.createElement('script');

    Object.entries({
      src: 'https://utteranc.es/client.js',
      repo: repo,
      'issue-term': issueTerm,
      theme: theme,
      crossOrigin: 'anonymous',
      defer: true
    }).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    document.getElementById('utterances-target').appendChild(script);
  }, [repo, theme, issueTerm]);

  return <div id="utterances-target" />;
};

UtterancesComments.defaultProps = {
  theme: 'github-light',
  issueTerm: 'title'
};

UtterancesComments.propTypes = {
  /** The name of the public repository to open issues  */
  repo: PropTypes.string.isRequired,
  /** The type of Theme to use */
  theme: PropTypes.oneOf(['github-light', 'github-dark']),
  /** The property to use as the issue title */
  issueTerm: PropTypes.string
};

export default UtterancesComments;
