import React, {useEffect} from 'react';

import {StatusBar, Platform} from 'react-native';
import Routes from './src/routes';

//Redux
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

export default () => {
  return (
    <Provider store={store}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};
