import { DispatchPropsPC } from './UsersContainer';
import styles from './Users.module.css';
import defaultUserpic from '../../assets/images/userpic.jpg';
import { UsersPageType } from '../../redux/users-page-reducer';
import { Link } from 'react-router-dom';
import { followAPI } from '../../api/api';

type PropsType = UsersPageType &
  DispatchPropsPC & { onPageChanged: (page: number) => void };

export const Users = (props: PropsType) => {
  const pageNumbers = Array.from(
    Array(Math.ceil(props.totalCount / props.count)),
    (_, i) => i + 1
  );

  return (
    <div className={styles.users}>
      <div className={styles.pagination}>
        {pageNumbers.map((p, i) => (
          <button
            key={i}
            className={p === props.page ? styles.active : undefined}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </button>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={styles.user}>
          <div className={styles.left}>
            <Link to={`/profile/${u.id}`}>
              <img src={u.photos.small || defaultUserpic} alt={u.name} />
            </Link>{' '}
            {u.followed ? (
              <button
                onClick={() => {
                  props.toggleIsFolowingProgress(u.id, true);

                  followAPI.unfollow(u.id).then((data) => {
                    data.resultCode === 0 && props.unfollowUser(u.id);

                    props.toggleIsFolowingProgress(u.id, false);
                  });
                }}
                disabled={!!props.isFolowingProgress.find((id) => id === u.id)}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.toggleIsFolowingProgress(u.id, true);

                  followAPI.follow(u.id).then((data) => {
                    data.resultCode === 0 && props.followUser(u.id);

                    props.toggleIsFolowingProgress(u.id, false);
                  });
                }}
                disabled={!!props.isFolowingProgress.find((id) => id === u.id)}
              >
                Follow
              </button>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.info}>
              <Link to={`/profile/${u.id}`}>
                <div className={styles.userName}>{u.name}</div>
              </Link>
              {u.status && <div>{u.status}</div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
