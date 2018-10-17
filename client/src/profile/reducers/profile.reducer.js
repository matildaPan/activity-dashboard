import {actionTypes} from '../actions/profile.action';
import {createSelector} from 'reselect';
import {normalizer} from '../../common/normalizer';


export const initProfileState = {
  allIds: [],
  byId: {}
};

export const profileReducer = (state = initProfileState, action) => {
  switch(action.type){
    case actionTypes.PROFILE_FETCH_SUCCESS:
      return Object.assign(
        {},
        state,
        normalizer(action.data)
      );
    case actionTypes.PROFILE_FETCH_FAILURE:
      return Object.assign(
        {},
        state,
        initProfileState
      )
    default:
      return state;
  }
}

