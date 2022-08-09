import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// import VanillaScript from '../../components/vanillia-script';
import GatsbyScript from '../../components/gatsby-script';

const Page = ({
  pageContext,
  data: {
    mdx: {
      frontmatter: { title },
      body
    }
  }
}) => {
  return (
    <Fragment>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
      <GatsbyScript />
      {/* <VanillaScript /> */}
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
