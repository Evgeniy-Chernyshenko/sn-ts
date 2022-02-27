import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ProfileInfo
        name={'Evgeniy Ch.'}
        birthDate={'10-31-1990'}
        city={'Dolgoprudniy'}
        education={'MAVIAT im. N.N. Godovikova'}
        webSiteUrl={'https://www.google.com'}
        avatar={
          'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
        }
        topImage={
          'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
        }
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
