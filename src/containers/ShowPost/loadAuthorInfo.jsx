import React from "react";
import './index.scss';

const LoadAuthorInfo = ({post}) =>
  post.tag === 'blog' ?
    <div className='postAuthor'>
      <h4>Author: {post.author ? post.author.username : '~Unknown Author~'}</h4>
      <p>Institute: {post.institute}</p>
      <p>Branch: {post.branch}</p>
    </div> :
    null;

export default LoadAuthorInfo;