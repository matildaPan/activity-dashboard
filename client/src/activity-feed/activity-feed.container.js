import * as React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import TaskContainer from '../task/task.container';
import ProfileContainer from '../profile/profile.container';
import {activityFeedStateSelector} from './reducers/activity-feed.reducer';
import {parse} from '../common/templateParser';
import {ActivityFeed} from './components/activity-feed.component';

export class ActivityFeedContainer extends React.Component {

  render() {
    const results = [];
    this.props.activityFeed.feeds.forEach(
      (feed) => {
        let patternMap = {}
        if(feed.profile_ids && feed.profile_ids.length > 0){
          feed.profile_ids.forEach(
            (profileId) => {
              const profileIdString = `{ profiles:${profileId} }`;
              patternMap[profileIdString] = <ProfileContainer id={profileId} key={profileId}/>
            }
          )
        }
        const taskId = feed.task_id;
        if(taskId && taskId !== ''){
          const taskIdString = `{ task:${taskId} }`;
          patternMap[taskIdString] = <TaskContainer id={taskId} key={taskId}/>
        }

        const result = parse(patternMap, feed.template);
        results.push(result); 
      }
    );

    const feedComponets = results.map((x, i) => (<ActivityFeed data={x} key={i}/>));

    return (
      <div>
        {feedComponets}
      </div>
    )
  }


}

const mapStateToProps = (state, ownProps) => {
  return {
    activityFeed: activityFeedStateSelector(state)
  }
}

const mapDispatchProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ActivityFeedContainer);