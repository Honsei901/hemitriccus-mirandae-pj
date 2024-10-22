import { store } from './redux/store';
import { Provider } from 'react-redux';

import User from './components/User';
import Counter from './components/Counter';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <div>
      <AppRouter />

      <Provider store={store}>
        <Counter />
        <User />
      </Provider>
    </div>
  );
};

export default App;
