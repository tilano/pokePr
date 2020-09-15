import {applyMiddleware, createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {createPromise} from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './combineReducers';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(createPromise(), thunk, createLogger()),
  );
  let persistor = persistStore(store);

export {store, persistor};
