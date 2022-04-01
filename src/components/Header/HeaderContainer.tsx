import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AuthStateType, authAC, authTC } from '../../redux/auth-reducer';
import { RootStateType } from '../../redux/store';
import Header from './Header';

export class AuthAPI extends React.Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.props.setAuthData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: RootStateType): AuthStateType => state.auth;

const connector = connect(mapStateToProps, { ...authAC, ...authTC });

export const HeaderContainer = connector(AuthAPI);
