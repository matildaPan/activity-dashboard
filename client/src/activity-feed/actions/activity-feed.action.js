
export const actionTypes = {
  ACTIVITY_FEED_FETCH_SUCCESS: 'ACTIVITY_FEED_FETCH_SUCCESS',
  ACTIVITY_FEED_FETCH_FAILURE: 'ACTIVITY_FEED_FETCH_FAILURE'
};

export const activityFeedFetchSuccess = (data) => {
  return{
    type: actionTypes.ACTIVITY_FEED_FETCH_SUCCESS,
    data  
  };
};

export const activityFeedFetchFailure = () => {
  return{
    type: actionTypes.ACTIVITY_FEED_FETCH_FAILURE,
  };
};
