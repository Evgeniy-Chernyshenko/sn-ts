import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { RootStateType } from '../../../redux/store';
import { Dispatch } from 'redux';
import { PostsType, profilePageAC } from '../../../redux/profile-page-reducer';

export type StateProps = {
  posts: PostsType;
  newPostText: string;
};

export type DispatchProps = {
  changeNewPostText: (value: string) => void;
  addPost: () => void;
};

const mapStateToProps = (state: RootStateType): StateProps => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeNewPostText: (value) => {
    dispatch(profilePageAC.changeNewPostText(value));
  },
  addPost: () => {
    dispatch(profilePageAC.addPost());
  },
});

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
