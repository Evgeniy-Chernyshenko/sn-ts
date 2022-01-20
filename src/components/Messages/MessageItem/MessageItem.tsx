import styles from "./MessageItem.module.css";

type MessageItemType = {
  name: string;
  avatar: string;
  text: string;
};

const MessageItem = (props: MessageItemType) => {
  return (
    <div className={styles.messageItem}>
      <div className={styles.avatar}>
        <img src={props.avatar} alt={props.name} />
        {props.name}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default MessageItem;
