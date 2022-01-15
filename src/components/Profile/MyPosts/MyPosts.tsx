import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      <h3>My posts</h3>
      <div className={styles.addPost}>
        <textarea placeholder="Type your text here..."></textarea>
        <button>Send post</button>
      </div>
      <div className={styles.postsList}>
        <Post
          userPic="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          userName="1 Evgeniy Ch."
          text="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed?"
          likesCount={5}
        />
        <Post
          userPic="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2019/04/suprised-man.jpg"
          userName="2 Evgeniy Ch."
          text="2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed?"
          likesCount={1}
        />
        <Post
          userPic="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg"
          userName="3 Evgeniy Ch."
          text="3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed?"
          likesCount={3}
        />
      </div>
    </div>
  );
};

export default MyPosts;
