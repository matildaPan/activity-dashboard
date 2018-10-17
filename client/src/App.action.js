import {get} from './common/http.js';
import {dataUrl} from './common/dataUrl';
import {activityFeedFetchSuccess, activityFeedFetchFailure} from './activity-feed/actions/activity-feed.action';

export const dataFetchRequest = () => {
  return(dispatch) => {
    get(dataUrl)
    .then(
      response => response.json()
    )
    .then(
      (data) => {
        dispatch(activityFeedFetchSuccess(data.activity_feed));
      }
    )
    .catch(
      dispatch(activityFeedFetchFailure())
    );
  }
};
