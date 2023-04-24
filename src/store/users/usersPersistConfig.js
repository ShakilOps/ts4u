import storage from 'redux-persist/lib/storage';

const usersPersistConfig = {
  key: 'users',
  storage,
};

export default usersPersistConfig;
