import { ProfileType } from '../../../redux/profile-page-reducer';
import { Preloader } from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props: { profile: ProfileType }) => {
  if (!Object.keys(props.profile).length) {
    return <Preloader />;
  }

  return (
    <>
      <img
        className={styles.topImage}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="Top"
      />

      <div className={styles.about}>
        <img src={props.profile.photos.large} alt={props.profile.fullName} />
        <div>
          <h2>{props.profile.fullName}</h2>
          {props.profile.aboutMe && <p>{props.profile.aboutMe}</p>}
          {Object.keys(props.profile.contacts).length && (
            <ul>
              {props.profile.contacts.website && (
                <li>
                  Web site:{' '}
                  <a
                    href={props.profile.contacts.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.profile.contacts.website}
                  </a>
                </li>
              )}
              {props.profile.contacts.facebook && (
                <li>
                  Facebook:{' '}
                  <a
                    href={props.profile.contacts.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.profile.contacts.facebook}
                  </a>
                </li>
              )}
              {props.profile.contacts.github && (
                <li>
                  Github:{' '}
                  <a
                    href={props.profile.contacts.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.profile.contacts.github}
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
