import React, { createRef, Fragment, useEffect } from 'react';
import { graphql, Link } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Page = ({
  pageContext,
  data: {
    mdx: {
      frontmatter: { title },
      body
    }
  }
}) => {
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
  return (
    <Fragment>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
        <div ref={utteranceRef} id="utterances_container" />
      </MDXProvider>
    </Fragment>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export const Head = ({
  data: {
    mdx: {
      frontmatter: { title }
    }
  }
}) => {
  return <title>{title}</title>;
};

export default Page;
