import {get} from './common/http.js';
import {dataUrl} from './common/dataUrl';
import {activityFeedFetchSuccess, activityFeedFetchFailure} from './activity-feed/actions/activity-feed.action';
import {profileFetchSuccess, profileFetchFailure} from './profile/actions/profile.action';
import {taskFetchSuccess, taskFetchFailure} from './task/actions/task.action';

export const dataFetchRequest = () => {
  return(dispatch) => {
    get(dataUrl)
    .then(
      response => response.json()
    )
    .then(
      (data) => {
        console.log('DISPATCH...');
        dispatch(activityFeedFetchSuccess(data.activity_feed));
        dispatch(profileFetchSuccess(data.profiles));
        dispatch(taskFetchSuccess(data.tasks));
      }
    )
    .catch(
      (error) => {
        console.log(error);
        dispatch(activityFeedFetchFailure());
        dispatch(profileFetchFailure());
        dispatch(taskFetchFailure());
      } 
    );
  }
};
