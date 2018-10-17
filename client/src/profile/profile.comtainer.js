import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Profile} from './components/profile.component';

export class ProfileContainer extends React.Component {
  render(){
    return(<Profile profile={this.props.profile}/>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    profile: ownProps.profile
  }
}

const mapDispatchProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchProps)(ProfileContainer);