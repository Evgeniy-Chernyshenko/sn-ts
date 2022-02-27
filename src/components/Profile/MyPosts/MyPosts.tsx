import { ChangeEvent } from 'react';
import styles from './MyPosts.module.css';
import { DispatchProps, StateProps } from './MyPostsContainer';
import Post from './Post/Post';

type PropsType = StateProps & DispatchProps;

const MyPosts = (props: PropsType) => {
  const postsElements = props.posts.map((post) => (
    <Post
      key={post.id}
      userPic="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      userName="1 Evgeniy Ch."
      text={post.text}
      likesCount={post.likesCount}
    />
  ));

  const onChangeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewPostText(e.currentTarget.value);
  };

  const onClickSendPostHandler = () => {
    props.addPost();
  };

  return (
    <div className={styles.myPosts}>
      <h3>My posts</h3>
      <div className={styles.addPost}>
        <textarea
          value={props.newPostText}
          onChange={onChangeNewPostTextHandler}
          placeholder="Type your text here..."
        />
        <button onClick={onClickSendPostHandler}>Send post</button>
      </div>
      <div className={styles.postsList}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
