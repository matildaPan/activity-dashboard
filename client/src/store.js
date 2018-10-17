import { createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {initActivityFeedState, activityFeedReducer} from './activity-feed/reducers/activity-feed.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  activityFeed: activityFeedReducer
});

const initialState = {
  activityFeed: initActivityFeedState

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