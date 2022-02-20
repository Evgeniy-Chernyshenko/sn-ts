import { ChangeEvent } from "react";
import styles from "./Messages.module.css";
import MessageSender from "./MessageSender/MessageSender";
import MessageItem from "./MessageItem/MessageItem";
import {
  addMessageAC,
  changeNewMessageTextAC,
} from "../../redux/messages-page-reducer";
import { MessagesPageType } from "../../types/entities-types";
import { DispatchType } from "../../types/redux-types";

type PropsType = {
  data: MessagesPageType;
  dispatch: DispatchType;
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

  const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeNewMessageTextAC(e.currentTarget.value));
  };

  const onClickSendMessageHandler = () => {
    props.dispatch(addMessageAC());
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
            onChange={onChangeMessageTextHandler}
          ></textarea>
          <button onClick={onClickSendMessageHandler}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
