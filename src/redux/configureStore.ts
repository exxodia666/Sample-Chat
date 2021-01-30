import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux'
import {
  persistStore,
  persistReducer
} from 'redux-persist'
import rootReducer from './RootReducer'
import AsyncStorage from '@react-native-community/async-storage';
import rootEpic from './RootEpic';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

export type StoreType = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2,
}

const epicMiddleware = createEpicMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)



let store = createStore(persistedReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(rootEpic)

let persistor = persistStore(store)

export { store, persistor }