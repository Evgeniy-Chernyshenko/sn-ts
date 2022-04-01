import { connect, ConnectedProps } from 'react-redux';
import { RootStateType } from '../../redux/store';
import {
  usersPageAC,
  usersPageTC,
  UsersPageType,
} from '../../redux/users-page-reducer';
import { Users } from './Users';
import React from 'react';
import { Preloader } from '../common/Preloader/Preloader';

export type DispatchPropsPC = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  toggleIsFolowingProgress: (id: number, inProgress: boolean) => void;
};

class UsersAPI extends React.Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.props.getUsers(this.props.page, this.props.count);
  }

  onPageChanged = (page: number) => {
    if (page === this.props.page) {
      return;
    }

    this.props.setPage(page);
    this.props.getUsers(page, this.props.count);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            count={this.props.count}
            isFetching={this.props.isFetching}
            page={this.props.page}
            totalCount={this.props.totalCount}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFolowingProgress={this.props.isFolowingProgress}
            toggleIsFolowingProgress={this.props.toggleIsFolowingProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: RootStateType): UsersPageType =>
  state.usersPage;

const connector = connect(mapStateToProps, {
  ...usersPageAC,
  ...usersPageTC,
});

export const UsersContainer = connector(UsersAPI);
