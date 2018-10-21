import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HoverLink from '../common/components/hover-link';
import { singleTaskSelector } from './reducers/task.reducer';
import {mouseHovering, mouseLeaving} from '../path/actions/path.action';

export class TaskContainer extends React.Component {

  mouseHoveringPath = (link) => {
    this.props.mouseHovering(link);
  }

  mouseLeaving = () => {
    this.props.mouseLeaving();
  }

  render(){
    const {name, slug} = this.props.task;
    return(<HoverLink name={name} path={`tasks/${slug}`} mouseHovering={this.mouseHoveringPath} mouseLeaving={this.mouseLeaving}/>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    task: singleTaskSelector(ownProps.id)(state)
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    mouseHovering: bindActionCreators(mouseHovering, dispatch),
    mouseLeaving: bindActionCreators(mouseLeaving, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchProps)(TaskContainer);