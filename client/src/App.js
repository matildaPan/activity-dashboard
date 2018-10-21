import * as React from 'react';
import "./App.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {dataFetchRequest} from './App.action'
import ActivityFeedContainer from './activity-feed/activity-feed.container';
import PathContainer from './path/path.container';


class App extends React.Component {

  componentDidMount(){
    this.props.dataFetchRequest();
  }
  
  render() {
    return (
      <div className="paper">
        <ActivityFeedContainer />
        <PathContainer />
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
