import React from 'react';
// import styles from './Home.css';
import PropTypes from 'prop-types';
import PostList from './PostList/PostList';


function Home(props) {
  return(
    <div>
      <PostList postList={props.postList} />
    </div>
  );
}

Home.propTypes = {
  postList: PropTypes.object
};

export default Home;
