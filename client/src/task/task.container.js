import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HoverLink from '../common/components/hover-link';
import { singleTaskSelector } from './reducers/task.reducer';

export class TaskContainer extends React.Component {
  render(){
    const {name, slug} = this.props.task;
    return(<HoverLink name={name} link={`tasks/${slug}`}/>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    task: singleTaskSelector(ownProps.id)(state)
  }
}

const mapDispatchProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchProps)(TaskContainer);