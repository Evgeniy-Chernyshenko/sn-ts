import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { authAPI, profileAPI } from '../../api/api';
import { AuthStateType, authAC } from '../../redux/auth-reducer';
import { RootStateType } from '../../redux/store';
import Header from './Header';

export class AuthAPI extends React.Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    authAPI.getMe().then((authData) => {
      authData.resultCode === 0 &&
        profileAPI.getProfile(authData.data.id!).then((profileData) => {
          this.props.setUserData({
            ...authData.data,
            profile: profileData,
          });
        });
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: RootStateType): AuthStateType => state.auth;

const connector = connect(mapStateToProps, authAC);

export const HeaderContainer = connector(AuthAPI);
