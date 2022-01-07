import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      <h2>My posts</h2>
      <div className={styles.addPost}>
        <textarea placeholder="Type your text here..."></textarea>
        <button>Send post</button>
      </div>
      <div className={styles.postsList}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
