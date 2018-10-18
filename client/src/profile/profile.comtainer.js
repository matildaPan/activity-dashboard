import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HoverLink from '../common/components/hover-link';
import {singleProfileSelector} from './reducers/profile.reducer';

export class ProfileContainer extends React.Component {
  render(){
    const {first_name, slug} = this.props.profile;
    return(<HoverLink name={first_name} link={`users/${slug}`}/>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    profile: singleProfileSelector(ownProps.id)(state)
  }
}

const mapDispatchProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchProps)(ProfileContainer);