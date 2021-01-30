import React from 'react';
import { Provider } from 'react-redux'
import 'react-native-gesture-handler';
import Store from './redux/Store';
import MainNavigator from './navigation/MainNavigator';

const App: React.FC = (): JSX.Element => {  
  return (
    <Provider store = {Store}>
      <MainNavigator />
    </Provider>
  );
};
export default App;
