import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  MessageItemsType,
  MessageSendersType,
  messagesPageAC,
} from '../../redux/messages-page-reducer';
import { RootStateType } from '../../redux/store';
import Messages from './Messages';

export type StateProps = {
  newMessageText: string;
  messageSenders: MessageSendersType;
  messageItems: MessageItemsType;
  isAuth: boolean;
};

export type DispatchProps = {
  changeNewMessageText: (value: string) => void;
  addMessage: () => void;
};

const mapStateToProps = (state: RootStateType): StateProps => ({
  newMessageText: state.messagesPage.newMessageText,
  messageSenders: state.messagesPage.messageSenders,
  messageItems: state.messagesPage.messageItems,
  isAuth: state.auth.isAuth,
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
