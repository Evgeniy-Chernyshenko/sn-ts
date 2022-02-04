import { ChangeEvent } from 'react';
import styles from './Messages.module.css';
import MessageSender from './MessageSender/MessageSender';
import MessageItem from './MessageItem/MessageItem';
import {
  MessagesPageType,
  AddMessageType,
  ChangeNewMessageTextType,
} from '../../redux/state';

type PropsType = {
  data: MessagesPageType;
  addMessage: AddMessageType;
  changeNewMessageText: ChangeNewMessageTextType;
};

const Messages = (props: PropsType) => {
  const messageSendersElements = props.data.messageSenders.map(
    (messageSender) => (
      <MessageSender
        key={messageSender.id}
        id={messageSender.id}
        name={messageSender.name}
      />
    )
  );

  const messageItemsElements = props.data.messageItems.map((messageItem) => (
    <MessageItem
      key={messageItem.id}
      name="Petya"
      avatar="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
      text={messageItem.text}
    />
  ));

  const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewMessageText(e.currentTarget.value);
  };

  const addMessage = () => {
    props.addMessage();
  };

  return (
    <div className={styles.messages}>
      <h1>Messages</h1>
      <div className={styles.messagesContainer}>
        <div className={styles.messagesSenders}>
          <ul>{messageSendersElements}</ul>
        </div>
        <div>
          {messageItemsElements}
          <textarea
            placeholder="Type your message here..."
            value={props.data.newMessageText}
            onChange={changeMessageTextHandler}
          ></textarea>
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
