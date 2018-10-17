import * as React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { activityFeedsListSelector } from './reducers/activity-feed.reducer';
import { ActivityFeed } from './components/activity-feed.component'

export class ActivityFeedContainer extends React.Component {


  render() {
    const feeds = this.props.activityFeed.feeds.map(f => (<ActivityFeed feed={f} />));

    return (
      <div>
        {feeds}
      </div>
    );
  }


}

const mapStateToProps = (state, ownProps) => {
  return {
    activityFeed: state.activityFeed
  }
}

const mapDispatchProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ActivityFeedContainer);