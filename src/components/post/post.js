import React from 'react';

import './post.css'

const Post = (props) => {

  return (
    <div className='post__container'>
      <figure className='post-image'>
        <img src={props.photo} alt=''/>
      </figure>
      <p className='post-caption'>
        <b>@{props.author}</b>
        {props.caption}
      </p>
    </div>
  );
};

export default Post;
