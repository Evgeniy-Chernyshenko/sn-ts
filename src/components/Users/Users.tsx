import { DispatchProps, StateProps } from './UsersContainer';
import styles from './Users.module.css';

type PropsType = StateProps & DispatchProps;

export const Users = (props: PropsType) => {
  if (!props.users.length) {
    props.setUsers([
      {
        followed: false,
        id: 1,
        location: {
          city: 'Moscow',
          country: 'Russia',
        },
        name: 'Vasia',
        statusText: "I'm a boss",
        userPic:
          'https://upload.wikimedia.org/wikipedia/commons/4/4b/Big_Boss_Man_cropped.png',
      },
      {
        followed: true,
        id: 2,
        location: {
          city: 'Minks',
          country: 'Belarus',
        },
        name: 'Petia',
        statusText: "I'm a boss too",
        userPic:
          'https://previews.123rf.com/images/ekina/ekina1702/ekina170202273/77576496-%E9%9D%9E%E5%B8%B8%E3%81%AB%E7%BE%8E%E3%81%97%E3%81%84%E5%B0%91%E5%A5%B3%E3%80%81%E6%9C%9B%E3%81%BE%E3%81%97%E3%81%84%E5%A5%B3%E6%80%A7%E3%80%81%E8%8C%B6%E8%89%B2%E3%81%AE%E9%AB%AA%E3%80%81%E5%A4%A7%E3%81%8D%E3%81%AA%E3%81%8A%E5%B0%BB%E3%80%81%E9%BB%92%E3%81%AE%E3%82%B9%E3%82%AB%E3%83%BC%E3%83%88.jpg',
      },
      {
        followed: false,
        id: 3,
        location: {
          city: 'Moscow',
          country: 'Russia',
        },
        name: 'Vasia',
        statusText: "I'm a boss too",
        userPic:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPMZ09V5-4dGddRzm6dv_fTeH-1viEo6YyA&usqp=CAU',
      },
    ]);
  }

  return (
    <div className={styles.users}>
      {props.users.map((u) => (
        <div key={u.id} className={styles.user}>
          <div className={styles.left}>
            <img src={u.userPic} alt={u.name} />{' '}
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>Follow</button>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.info}>
              <div className={styles.userName}>{u.name}</div>
              <div>{u.statusText}</div>
            </div>
            <div className={styles.location}>
              <div>{u.location.country},</div>
              <div>{u.location.city}</div>
            </div>
          </div>
        </div>
      ))}
      <button className={styles.showMore}>Show more</button>
    </div>
  );
};
