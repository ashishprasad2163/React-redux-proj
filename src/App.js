import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import SongList from './components/list/SongList';
import Blog from './components/blog';

function App() {
  return (
    <Provider store={store}>
      {/* <SongList /> */}
      <hr/>
      <Blog />
    </Provider>
  );
}

export default App;
