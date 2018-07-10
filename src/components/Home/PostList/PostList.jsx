import React from 'react';
import styles from './PostList.css';
import PropTypes from 'prop-types';
import Post from './Post/Post';

function PostList(props) {
  return(
    <div>
      {Object.keys(props.postList).map((postId) => {
        let post = props.postList[postId];
        return <Post title={post.title}
          image={post.image}
          content={post.content}
          key={postId}
          postId={postId}/>;
      })}
    </div>
  );
}
PostList.propTypes = {
  postList: PropTypes.object
}

export default PostList;
