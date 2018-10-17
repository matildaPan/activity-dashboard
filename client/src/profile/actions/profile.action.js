export const actionTypes = {
  PROFILE_FETCH_SUCCESS: 'PROFILE_FETCH_SUCCESS',
  PROFILE_FETCH_FAILURE: 'PROFILE_FETCH_FAILURE'
};

export const profileFetchSuccess = (data) => {
  return{
    type: actionTypes.PROFILE_FETCH_SUCCESS,
    data  
  };
};

export const profileFetchFailure = () => {
  return{
    type: actionTypes.PROFILE_FETCH_FAILURE,
  };
};