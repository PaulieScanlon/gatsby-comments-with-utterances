import { Link } from 'gatsby';
import React, { Fragment } from 'react';

const Page = () => {
  return (
    <Fragment>
      <h1>Index</h1>
      <ul>
        <li>
          <Link to="/posts/post-one">Post one</Link>
        </li>
        <li>
          <Link to="/posts/post-two">Post two</Link>
        </li>
        <li>
          <Link to="/posts/post-three">Post three</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Page;
