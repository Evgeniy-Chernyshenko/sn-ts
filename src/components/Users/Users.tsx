import { DispatchProps, StateProps } from './UsersContainer';
import styles from './Users.module.css';
import axios from 'axios';
import defaultUserpic from '../../assets/images/userpic.jpg';
import { UsersType } from '../../redux/users-page-reducer';
import { Component } from 'react';

type PropsType = StateProps & DispatchProps;

type ApiGetReturnType<T> = {
  error: null | string;
  items: T;
  totalCount: number;
};

export class Users extends Component<PropsType> {
  componentDidMount() {
    axios
      .get<ApiGetReturnType<UsersType>>(
        'https://social-network.samuraijs.com/api/1.0/users'
      )
      .then((response) => this.props.setUsers(response.data.items));
  }

  render() {
    return (
      <div className={styles.users}>
        {this.props.users.map((u) => (
          <div key={u.id} className={styles.user}>
            <div className={styles.left}>
              <img src={u.photos.small || defaultUserpic} alt={u.name} />{' '}
              {u.followed ? (
                <button onClick={() => this.props.unfollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(u.id)}>Follow</button>
              )}
            </div>
            <div className={styles.right}>
              <div className={styles.info}>
                <div className={styles.userName}>{u.name}</div>
                {u.status && <div>{u.status}</div>}
              </div>
              {/* <div className={styles.location}>
              <div>{u.location.country},</div>
              <div>{u.location.city}</div>
            </div> */}
            </div>
          </div>
        ))}
        <button className={styles.showMore}>Show more</button>
      </div>
    );
  }
}

// export const Users = (props: PropsType) => {
//   const getUsers = () => {
//     if (!props.users.length) {
//       axios
//         .get<ApiGetReturnType<UsersType>>(
//           'https://social-network.samuraijs.com/api/1.0/users'
//         )
//         .then((response) => props.setUsers(response.data.items));
//     }
//   };

//   return (
//     <div className={styles.users}>
//       <button onClick={() => getUsers()}>Get users</button>
//       {props.users.map((u) => (
//         <div key={u.id} className={styles.user}>
//           <div className={styles.left}>
//             <img src={u.photos.small || defaultUserpic} alt={u.name} />{' '}
//             {u.followed ? (
//               <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
//             ) : (
//               <button onClick={() => props.follow(u.id)}>Follow</button>
//             )}
//           </div>
//           <div className={styles.right}>
//             <div className={styles.info}>
//               <div className={styles.userName}>{u.name}</div>
//               {u.status && <div>{u.status}</div>}
//             </div>
//             {/* <div className={styles.location}>
//               <div>{u.location.country},</div>
//               <div>{u.location.city}</div>
//             </div> */}
//           </div>
//         </div>
//       ))}
//       <button className={styles.showMore}>Show more</button>
//     </div>
//   );
// };
