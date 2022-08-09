import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

const Page = () => {
  return (
    <Fragment>
      <h1>
        Gatsby Comments With{' '}
        <a href="https://utteranc.es/" target="_blank" rel="noreferrer">
          Utterances
        </a>
      </h1>
      <p>Add a comment to each of the posts below.</p>
      <ul>
        <li>
          <Link to="/posts/post-one">Post One</Link>
        </li>
        <li>
          <Link to="/posts/post-two">Post Two</Link>
        </li>
        <li>
          <Link to="/posts/post-three">Post Three</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

export const Head = ({
  data: {
    site: {
      siteMetadata: { name }
    }
  }
}) => {
  return <title>{name}</title>;
};

export default Page;
