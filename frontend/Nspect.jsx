import React from 'react';
import ReactDOM from 'react-dom';
import storePersistorMaker from './store/store';
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", () => {
  let storePersistor;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    storePersistor = storePersistorMaker(preloadedState);
    delete window.currentUser;
  } else {
    storePersistor = storePersistorMaker();
  }
  let store = storePersistor.store;
  let persistor = storePersistor.persistor
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} persistor={persistor} />, root)
});
