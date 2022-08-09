import React from 'react';
import { Script } from 'gatsby';

const GatsbyScript = () => {
  return (
    <div>
      <Script
        src="https://utteranc.es/client.js"
        repo="PaulieScanlon/utterances-comments-repo"
        issue-term="title"
        theme="github-light"
        crossOrigin="anonymous"
        strategy="idle"
      />
    </div>
  );
};

export default GatsbyScript;
