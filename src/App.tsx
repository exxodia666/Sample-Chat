import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
//import Store from './redux/Store';
import MainNavigator from './navigation/MainNavigator';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/configureStore';

const App: React.FC = (): JSX.Element => {  
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};
export default App;
