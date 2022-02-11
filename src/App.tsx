import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateType, DispatchType, StoreType } from './redux/store';

type PropsType = {
  store: StoreType;
  state: StateType;
  dispatch: DispatchType;
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
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/messages"
              element={<Messages store={props.store} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
