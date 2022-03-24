import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import {
  usersPageAC,
  UsersPageType,
  UsersType,
} from '../../redux/users-page-reducer';
import { Users } from './Users';
import React from 'react';
import { Preloader } from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

export type DispatchPropsPC = {
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  toggleIsFolowingProgress: (id: number, inProgress: boolean) => void;
};

type DispatchPropsCC = {
  setUsers: (users: UsersType) => void;
  setTotalCount: (totalCount: number) => void;
  setPage: (page: number) => void;
  setIsFetching: (isFetching: boolean) => void;
};

class UsersAPI extends React.Component<
  UsersPageType & DispatchPropsCC & DispatchPropsPC
> {
  componentDidMount() {
    this.props.setIsFetching(true);

    usersAPI.getUsers(this.props.page, this.props.count).then((data) => {
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
      this.props.setIsFetching(false);
    });
  }

  onPageChanged = (page: number) => {
    if (page === this.props.page) {
      return;
    }

    this.props.setPage(page);

    this.props.setIsFetching(true);

    usersAPI.getUsers(page, this.props.count).then((data) => {
      this.props.setUsers(data.items);
      this.props.setIsFetching(false);
    });
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
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
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

export const UsersContainer = connect(mapStateToProps, usersPageAC)(UsersAPI);
