import styles from "./Messages.module.css";
import MessageSender from "./MessageSender/MessageSender";
import MessageItem from "./MessageItem/MessageItem";
import { MessagesPageType } from "../../redux/state";

type PropsType = {
  data: MessagesPageType;
};

const Messages = (props: PropsType) => {
  const messageSendersElements = props.data.messageSenders.map(
    (messageSender) => (
      <MessageSender id={messageSender.id} name={messageSender.name} />
    )
  );

  const messageItemsElements = props.data.messageItems.map((messageItem) => (
    <MessageItem
      name="Petya"
      avatar="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
      text={messageItem.text}
    />
  ));

  return (
    <div className={styles.messages}>
      <h1>Messages</h1>
      <div className={styles.messagesContainer}>
        <div className={styles.messagesSenders}>
          <ul>{messageSendersElements}</ul>
        </div>
        <div className={styles.messageItems}>{messageItemsElements}</div>
      </div>
    </div>
  );
};

export default Messages;
