import {actionTypes} from '../actions/activity-feed.action.js';
// import {normalizer} from '../../common/normalizer';
// import {createSelector} from 'reselect';

export const initActivityFeedState = {
  feeds: []
};


export const activityFeedReducer = (state=initActivityFeedState, action) => {
  switch(action.type){
    
    case actionTypes.ACTIVITY_FEED_FETCH_SUCCESS:
      return Object.assign(
        {},
        state,
        {feeds: action.data}
      );
    
    case actionTypes.ACTIVITY_FEED_FETCH_FAILURE:
      return Object.assign({}, state, initActivityFeedState)
    

    default:
      return state;
  }

}

export const activityFeedStateSelector = state => state.activityFeed;
