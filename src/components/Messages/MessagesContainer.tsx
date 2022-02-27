import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  MessageItemsType,
  MessageSendersType,
  messagesPageAC,
} from '../../redux/messages-page-reducer';
import { StateType } from '../../redux/store';
import Messages from './Messages';

export type StateProps = {
  newMessageText: string;
  messageSenders: MessageSendersType;
  messageItems: MessageItemsType;
};

export type DispatchProps = {
  changeNewMessageText: (value: string) => void;
  addMessage: () => void;
};

const mapStateToProps = (state: StateType): StateProps => ({
  newMessageText: state.messagesPage.newMessageText,
  messageSenders: state.messagesPage.messageSenders,
  messageItems: state.messagesPage.messageItems,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeNewMessageText: (value) => {
    dispatch(messagesPageAC.changeNewMessageTextAC(value));
  },
  addMessage: () => {
    dispatch(messagesPageAC.addMessageAC());
  },
});

export const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
