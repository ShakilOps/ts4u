import { Provider } from 'react-redux';
import '../styles/globals.scss';

import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
