import React, { createRef, useEffect } from 'react';

const VanillaScript = () => {
  const utteranceRef = createRef();

  useEffect(() => {
    const script = document.createElement('script');

    Object.entries({
      src: 'https://utteranc.es/client.js',
      repo: 'PaulieScanlon/utterances-comments-repo',
      'issue-term': 'title',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      defer: true
    }).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    utteranceRef.current.appendChild(script);
  }, [utteranceRef]);

  return <div ref={utteranceRef} />;
};

export default VanillaScript;
