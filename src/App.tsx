import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AddPostType,
  ChangeNewPostTextType,
  StateType,
  AddMessageType,
  ChangeNewMessageTextType,
} from './redux/state';

type PropsType = {
  state: StateType;
  addPost: AddPostType;
  changeNewPostText: ChangeNewPostTextType;
  addMessage: AddMessageType;
  changeNewMessageText: ChangeNewMessageTextType;
};

const App: React.FC<PropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  data={props.state.profilePage}
                  addPost={props.addPost}
                  changeNewPostText={props.changeNewPostText}
                />
              }
            />
            <Route
              path="/messages"
              element={
                <Messages
                  data={props.state.messagesPage}
                  addMessage={props.addMessage}
                  changeNewMessageText={props.changeNewMessageText}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
