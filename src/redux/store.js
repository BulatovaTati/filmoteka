import { configureStore } from '@reduxjs/toolkit';
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
import authReducer from './auth/slice';
import { moviesReducer } from './movies/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const moviesPersistConfig = {
  key: 'movies',
  storage,
  blacklist: [
    'upcomingMovies',
    'items',
    'genres',
    'selectedMovie',
    'trailerKey',
    'isLoading',
    'error',
    'currentPage',
    'totalPages',
    'searchQuery',
  ],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const moviesPersistedReducer = persistReducer(moviesPersistConfig, moviesReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    movies: moviesPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
