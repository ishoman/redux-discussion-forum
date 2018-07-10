import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.css';
import VoteButtons from './VoteButtons/VoteButtons';

function Post(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      {props.image ? <img src={props.image} /> : null}
      <p>{props.content}</p>
      <VoteButtons />
    </div>
  );
}
Post.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
};
export default Post;
