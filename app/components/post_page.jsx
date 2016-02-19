import React from 'react';
import NoSSR from 'react-no-ssr';
import Comments from './comments.jsx';
import { Waiting } from './comments.jsx';

const PostPage = ({post}) => (
  <div>
    <a href={FlowRouter.path('/')}>Back</a>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
    <hr />

    <NoSSR onSSR={<Waiting />}>
      <Comments />
    </NoSSR>
  </div>
);

export default PostPage;
