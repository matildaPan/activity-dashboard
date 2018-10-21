import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {mouseHovering} from './actions/path.action';
import {Path} from './components/path.component';
import {pathStateSelector} from './reducers/path.reducer';

export class PathContainer extends React.Component {

  render(){
    return <Path link={this.props.path.link}/>
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    path: pathStateSelector(state)
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    mouseHovering: bindActionCreators(mouseHovering, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(PathContainer);