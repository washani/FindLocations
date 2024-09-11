import React, {useEffect} from 'react';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HomeApp />
    </PersistGate>
  </Provider>
);

const HomeApp = () => {
  return <Navigator />;
};

export default App;
