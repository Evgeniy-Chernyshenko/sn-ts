import { connect, ConnectedProps } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { profilePageAC, profilePageTC } from '../../redux/profile-page-reducer';
import React from 'react';
import Profile from './Profile';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
  userId: string;
};

class ProfileAPI extends React.Component<
  ConnectedProps<typeof connector> & RouteComponentProps<PathParamsType>
> {
  componentDidMount() {
    this.props.getProfile(+this.props.match.params.userId || 2);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
});

const connector = connect(mapStateToProps, {
  ...profilePageAC,
  ...profilePageTC,
});

export const ProfileContainer = connector(withRouter(ProfileAPI));
