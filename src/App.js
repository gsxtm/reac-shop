import './App.css';
import { Provider } from 'react-redux';
import store from './store/index'
import ShopLists from './pages/shop/index'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <ShopLists></ShopLists>
    </div>
    </Provider>
  );
}

export default App;
