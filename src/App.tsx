import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { MessagesContainer } from './components/Messages/MessagesContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/profile/" />
            </Route>
            <Route path="/profile/:userId?">
              <ProfileContainer />
            </Route>
            <Route path="/users">
              <UsersContainer />
            </Route>
            <Route path="/messages">
              <MessagesContainer />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
