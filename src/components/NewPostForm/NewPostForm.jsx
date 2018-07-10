import React from 'react';
import styles from './NewPostForm.css';

function NewPostForm(){
  let _title = null;
  let _image = null;
  let _content = null;


  function handlePostFromSubmission(e) {
    const { dispatch } = props;
    e.preventDefault();
    dispatch()

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
          placeholder='Post Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          placeholder='Optional Image'
          ref={(input) => {_image = input;}}/>
        <textarea
          type='text'
          placeholder='Post Content'
          ref={(textarea) => {_content = textarea;}}></textarea>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
}

export default connect()(NewPostForm);
