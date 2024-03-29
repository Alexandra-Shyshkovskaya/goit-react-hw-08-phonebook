import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
//import { contactReducer } from './contact';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contact';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}; 

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);
// eslint-disable-next-line 
export default { store, persistor };

