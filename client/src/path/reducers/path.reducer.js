import {actionTypes} from '../actions/path.action';

const defaultLink = 'mouse hover a user or task to get their path'

export const initPathState = {
  link: defaultLink
}

  export const pathReducer = (state=initPathState, action) => {
    switch(action.type){
      case actionTypes.MOUSE_HOVERING:
          return Object.assign(
            {},
            state,
            {link: action.link}
          )
      case actionTypes.MOUSE_LEAVING:
            return Object.assign(
              {},
              state,
              {link: defaultLink}
            )
      default:
        return state
    }
  }


  export const pathStateSelector = state => state.path
