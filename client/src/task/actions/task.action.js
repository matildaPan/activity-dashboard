export const actionTypes = {
  TASK_FETCH_SUCCESS: 'TASK_FETCH_SUCCESS',
  TASK_FETCH_FAILURE: 'TASK_FETCH_FAILURE'
};

export const taskFetchSuccess = (data) => {
  return{
    type: actionTypes.TASK_FETCH_SUCCESS,
    data  
  };
};

export const taskFetchFailure = () => {
  return{
    type: actionTypes.TASK_FETCH_FAILURE,
  };
};