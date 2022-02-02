import state, { addPost, changeNewPostText } from './redux/state';
import { rerenderEntireTree } from './rerender';

rerenderEntireTree(state, addPost, changeNewPostText);
