import {actionTypes} from '../actions/task.action';
import {createSelector} from 'reselect';
import {normalizer} from '../../common/normalizer';

export const initTaskState = {
  allIds: [],
  byId: {}
};

export const taskReducer = (state = initTaskState, action) => {
  switch(action.type){
    case actionTypes.TASK_FETCH_SUCCESS:
      return Object.assign(
        {},
        state,
        normalizer(action.data)
      );
    case actionTypes.TASK_FETCH_FAILURE:
      return Object.assign(
        {},
        state,
        initTaskState
      )
    default:
      return state;
  }
}

export const taskStateSelector = state => state.task;

export const singleTaskSelector = (taskId) => createSelector(
  taskStateSelector,
  taskState => taskState.byId[taskId] || {}
)
