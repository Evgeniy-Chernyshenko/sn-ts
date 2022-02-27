import styles from './Post.module.css';
import React from 'react';

type PostType = {
  userPic: string;
  userName: string;
  text: string;
  likesCount: number;
};

const Post = (props: PostType) => {
  console.log('Render post');

  return (
    <div className={styles.post}>
      <img
        src={props.userPic}
        alt={props.userName}
        className={styles.userpic}
      />
      <div>
        <div className={styles.text}>{props.text}</div>
        <div className={styles.likeButton}>
          <button>🖒</button>
          <span>{props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
