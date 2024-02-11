import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { convertedCurrenciesReduser } from './slices/convertedCurrenciesSlice';
import { currentRatesReduser } from './slices/currentRatesSlice';

const rootReducer = combineReducers({
  currentRates: currentRatesReduser,
  convertedCurrencies: convertedCurrenciesReduser,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type IRootState = ReturnType<typeof store.getState>;

export { persistor, store };
