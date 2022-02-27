import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StateType } from '../../redux/store';
import {
  usersPageAC,
  UsersPageType,
  UsersType,
} from '../../redux/users-page-reducer';
import { Users } from './Users';

export type StateProps = UsersPageType;

export type DispatchProps = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (users: UsersType) => void;
};

const mapStateToProps = (state: StateType) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  follow: (id) => {
    dispatch(usersPageAC.followUserAC(id));
  },
  unfollow: (id) => {
    dispatch(usersPageAC.unfollowUserAC(id));
  },
  setUsers: (users) => {
    dispatch(usersPageAC.setUsersAC(users));
  },
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
