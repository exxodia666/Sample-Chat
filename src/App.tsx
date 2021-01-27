import React from 'react';
import { Provider } from 'react-redux'
import Component from './components/Component';
import Store from './redux/Store';

const App: React.FC = (): JSX.Element => {  
  return (
    <Provider store = {Store}>
      <Component />
    </Provider>
  );
};
export default App;
