import { store } from './redux/store';
import { Provider } from 'react-redux';

import User from './components/User';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
        <User />
      </Provider>
    </div>
  );
};

export default App;
