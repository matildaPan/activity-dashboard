import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {dataFetchRequest} from './App.action'
import ActivityFeedContainer from './activity-feed/activity-feed.container';
import TaskContainer from './task/task.container';
class App extends React.Component {

  componentDidMount(){
    this.props.dataFetchRequest();
  }
  
  render() {
    return (
      // <ActivityFeedContainer />
      <TaskContainer id={6441} />
    )
  }
}

const mapStateToProps = (state) => {
  return{
  }
}

const mapDispatchProps = (dispatch) => {
  return{
    dataFetchRequest: bindActionCreators(dataFetchRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(App);
