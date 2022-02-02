import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddPostType, ChangeNewPostTextType, StateType } from './redux/state';

type PropsType = {
  state: StateType;
  addPost: AddPostType;
  changeNewPostText: ChangeNewPostTextType;
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
              element={<Messages data={props.state.messagesPage} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
