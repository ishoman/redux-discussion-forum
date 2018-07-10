import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home/Home';
import NewPostForm from './NewPostForm/NewPostForm';
import Header from './Header/Header';



class App extends React.Component {

  constructor(props) {
    super(props);

  }
  render(){
    const global = {
      fontFamily: 'sans-serif'
    };
    return (
      <div style={global}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/newPost' component={NewPostForm} />
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPropList: state
  };
};

export default withRouter(connect(mapStateToProps)(App)) ;
