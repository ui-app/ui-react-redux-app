import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from '../components/User';
import View from '../components/View';
import {setName, setAge} from '../actions/userActions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <User setName = {this.props.setName} setAge = {this.props.setAge} />
        <View name = {this.props.user.name} age = {this.props.user.age} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      setName: (name) => {
        dispatch(setName(name))
      },
      setAge: (age) => {
        dispatch(setAge(age))
      }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App)
