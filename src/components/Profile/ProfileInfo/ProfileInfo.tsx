import styles from "./ProfileInfo.module.css";

type ProfileInfoType = {
  name: string;
  birthDate: string;
  city: string;
  education: string;
  webSiteUrl: string;
  avatar: string;
  topImage: string;
};

const ProfileInfo = (props: ProfileInfoType) => {
  return (
    <>
      <img className={styles.topImage} src={props.topImage} alt="Top image" />

      <div className={styles.about}>
        <img src={props.avatar} alt={props.name} />
        <div>
          <h2>{props.name}</h2>
          <ul>
            <li>Date of birth: {props.birthDate}</li>
            <li>City: {props.city}</li>
            <li>Education: {props.education}</li>
            <li>
              Web site:{" "}
              <a href={props.webSiteUrl} target="_blank" rel="noreferrer">
                {props.webSiteUrl}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
