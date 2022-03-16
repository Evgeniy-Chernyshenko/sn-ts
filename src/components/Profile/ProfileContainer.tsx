import { connect, ConnectedProps } from 'react-redux';
import { StateType } from '../../redux/store';
import { profilePageAC, ProfileType } from '../../redux/profile-page-reducer';
import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
  userId: string;
};

class ProfileAPI extends React.Component<
  ConnectedProps<typeof connector> & RouteComponentProps<PathParamsType>
> {
  componentDidMount() {
    this.props.setProfile({} as ProfileType);

    axios
      .get<ProfileType>(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          this.props.match.params.userId || 2
        }`
      )
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: StateType) => ({
  profile: state.profilePage.profile,
});

const connector = connect(mapStateToProps, {
  setProfile: profilePageAC.setProfile,
});

export const ProfileContainer = connector(withRouter(ProfileAPI));
