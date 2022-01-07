import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <main className={styles.profile}>
      <img
        className={styles.topImage}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="Userpic"
      />

      <div className={styles.about}>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="Avatar"
        />
        <div>
          <h1>Evgeniy Ch.</h1>
          <ul>
            <li>Date of birth: 10-31-1990</li>
            <li>City: Dolgoprudniy</li>
            <li>Education: MAVIAT im. N.N. Godovikova</li>
            <li>
              Web site:{' '}
              <a href="https://www.google.com" target="_blank">
                https://www.google.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <MyPosts />
    </main>
  );
};

export default Profile;
