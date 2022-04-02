import { ChangeEvent } from 'react';
import styles from './Messages.module.css';
import MessageSender from './MessageSender/MessageSender';
import MessageItem from './MessageItem/MessageItem';
import { DispatchProps, StateProps } from './MessagesContainer';
import { Redirect } from 'react-router-dom';

type PropsType = StateProps & DispatchProps;

const Messages = (props: PropsType) => {
  console.log(props);

  const messageSendersElements = props.messageSenders.map((messageSender) => (
    <MessageSender
      key={messageSender.id}
      id={messageSender.id}
      name={messageSender.name}
    />
  ));

  const messageItemsElements = props.messageItems.map((messageItem) => (
    <MessageItem
      key={messageItem.id}
      name="Petya"
      avatar="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
      text={messageItem.text}
    />
  ));

  const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewMessageText(e.currentTarget.value);
  };

  const onClickSendMessageHandler = () => {
    props.addMessage();
  };

  if (!props.isAuth) {
    return <Redirect to="/signin" />;
  }

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
            value={props.newMessageText}
            onChange={onChangeMessageTextHandler}
          ></textarea>
          <button onClick={onClickSendMessageHandler}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
