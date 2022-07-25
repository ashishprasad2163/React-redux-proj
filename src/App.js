import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import SongList from './components/list/SongList';

function App() {
  return (
    <Provider store={store}>
      <SongList />
    </Provider>
  );
}

export default App;
