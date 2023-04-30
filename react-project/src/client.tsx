import React from 'react';
import { WrappedApp } from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { hydrate } from 'react-dom';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <WrappedApp />
//     </React.StrictMode>
//   </Provider>
// );

export function Main() {
  hydrate(
    <Provider store={store}>
      <React.StrictMode>{WrappedApp()}</React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
}
Main();
