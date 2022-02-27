import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MessagesContainer } from './components/Messages/MessagesContainer';
import { UsersContainer } from './components/Users/UsersContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/messages" element={<MessagesContainer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
