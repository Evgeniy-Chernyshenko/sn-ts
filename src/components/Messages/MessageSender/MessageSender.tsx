import styles from "./MessageSender.module.css";
import { NavLink } from "react-router-dom";

type MessageSenderType = {
  id: number;
  name: string;
};

const MessageSender = (props: MessageSenderType) => {
  return (
    <li className={styles.messageSenderItem}>
      <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

export default MessageSender;
