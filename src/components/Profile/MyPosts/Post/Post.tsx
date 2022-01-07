import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={styles.post}>
      <img
        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
        alt="Userpic"
      />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          consequuntur error aspernatur doloremque a quasi id maxime omnis quas
          quo?
        </p>
      </div>
    </div>
  );
};

export default Post;
