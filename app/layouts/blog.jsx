import React from 'react';
import UserInfo from '../containers/user_info';

const BlogLayout = ({content}) => (
  <div>
    <div className="navigation">
    <a href="/">Home</a>
    </div>
    <h1> My Blog </h1>
    <UserInfo />
    {content}
  </div>
);

export default BlogLayout;
