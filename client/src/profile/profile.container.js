import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HoverLink from '../common/components/hover-link';
import {singleProfileSelector} from './reducers/profile.reducer';
import {mouseHovering, mouseLeaving} from '../path/actions/path.action';

export class ProfileContainer extends React.Component {

  mouseHoveringPath = (link) => {
    this.props.mouseHovering(link);
  }

  mouseLeaving = () => {
    this.props.mouseLeaving();
  }

  render(){
    const {first_name, slug} = this.props.profile;
    return(<HoverLink name={first_name} path={`users/${slug}`} mouseHovering={this.mouseHoveringPath} mouseLeaving={this.mouseLeaving}/>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    profile: singleProfileSelector(ownProps.id)(state)
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    mouseHovering: bindActionCreators(mouseHovering, dispatch),
    mouseLeaving: bindActionCreators(mouseLeaving, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchProps)(ProfileContainer);