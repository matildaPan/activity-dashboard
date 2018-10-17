import { createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {initActivityFeedState, activityFeedReducer} from './activity-feed/reducers/activity-feed.reducer';
import {initProfileState, profileReducer} from './profile/reducers/profile.reducer';
import {initTaskState, taskReducer} from './task/reducers/task.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  activityFeed: activityFeedReducer,
  profile: profileReducer,
  task: taskReducer
});

const initialState = {
  activityFeed: initActivityFeedState,
  profile: initProfileState,
  task: initTaskState
};

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});

export const initStore = (state = initialState) => {
    return createStore(
      reducers,
      state, 
      composeEnhancers(
        applyMiddleware(reduxThunk)
      )
    );
};