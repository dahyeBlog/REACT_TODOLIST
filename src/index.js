import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 생성한 store를 import 해와 연결해줘야한다.
import store from './redux/store'; 
// Provider 가 App을 감싸 그 안에 store 파라미터를 전달한다. 
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

