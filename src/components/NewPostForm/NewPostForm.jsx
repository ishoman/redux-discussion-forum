import React from 'react';
import styles from './NewPostForm.css';
import Moment from 'moment';

import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewPostForm(props){
  let _title = null;
  let _image = null;
  let _content = null;


  function handlePostFromSubmission(e) {
    const { dispatch } = props;
    e.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      title: _title.value,
      image: _image.value,
      content: _content.value,
      timePosted: new Moment().fromNow()
    };
    dispatch(action);
    _title.value = '';
    _image.value = '';
    _content.value = '';
  }
  return (
    <div className={styles.postForm}>
      <h1>Add a new post</h1>
      <form onSubmit={handlePostFromSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Post Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='image'
          placeholder='Optional Image'
          ref={(input) => {_image = input;}}/>
        <textarea
          type='text'
          id='content'
          placeholder='Post Content'
          ref={(textarea) => {_content = textarea;}}></textarea>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
}

export default connect()(NewPostForm);
