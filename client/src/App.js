import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {dataFetchRequest} from './App.action'
import ActivityFeedContainer from './activity-feed/activity-feed.container';
import TaskContainer from './task/task.container';
import ProfileContainer from './profile/profile.comtainer';
class App extends React.Component {

  componentDidMount(){
    this.props.dataFetchRequest();
  }
  
  render() {
    return (
      // <ActivityFeedContainer />
      <div>
        <TaskContainer id={6441} />
        <span>-----------</span>
        <ProfileContainer id={490} />
      </div>
        
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
