import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {
  AddPostType,
  ChangeNewPostTextType,
  PostsType,
} from '../../../redux/state';

type PropsType = {
  posts: PostsType;
  newPostText: string;
  addPost: AddPostType;
  changeNewPostText: ChangeNewPostTextType;
};

const MyPosts = (props: PropsType) => {
  const postsElements = props.posts.map((post) => (
    <Post
      userPic="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      userName="1 Evgeniy Ch."
      text={post.text}
      likesCount={post.likesCount}
    />
  ));

  const addPost = () => {
    props.addPost(props.newPostText);
    props.changeNewPostText('');
  };

  return (
    <div className={styles.myPosts}>
      <h3>My posts</h3>
      <div className={styles.addPost}>
        <textarea
          value={props.newPostText}
          onChange={(e) => props.changeNewPostText(e.currentTarget.value)}
          placeholder="Type your text here..."
        ></textarea>
        <button onClick={addPost}>Send post</button>
      </div>
      <div className={styles.postsList}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
