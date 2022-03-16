import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profile-page-reducer';

const Profile = (props: { profile: ProfileType }) => {
  return (
    <div>
      <h1>Profile</h1>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
