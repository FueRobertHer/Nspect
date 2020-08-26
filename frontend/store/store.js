import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const storePersistorMaker = (preloadedState = {}) => {
  let store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  let persistor = persistStore(store)
  return { store, persistor }
}

export default storePersistorMaker;

