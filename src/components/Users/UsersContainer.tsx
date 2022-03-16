import { connect } from 'react-redux';
import { StateType } from '../../redux/store';
import {
  usersPageAC,
  UsersPageType,
  UsersType,
} from '../../redux/users-page-reducer';
import { Users } from './Users';
import React from 'react';
import axios from 'axios';
import { Preloader } from '../common/Preloader/Preloader';
import { ApiGetReturnType } from '../../types';

export type DispatchPropsPC = {
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
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
    axios
      .get<ApiGetReturnType<UsersType>>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  onPageChanged = (page: number) => {
    if (page === this.props.page) {
      return;
    }

    this.props.setPage(page);

    this.props.setIsFetching(true);

    axios
      .get<ApiGetReturnType<UsersType>>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
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
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: StateType): UsersPageType => state.usersPage;

export const UsersContainer = connect(mapStateToProps, usersPageAC)(UsersAPI);
