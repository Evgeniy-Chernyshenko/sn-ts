import './App.css';
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
import { HeaderContainer } from './components/Header/HeaderContainer';
import { SignIn } from './components/SignIn/SignIn';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/profile" />
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
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
