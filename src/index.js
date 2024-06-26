import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import TodoList from './components/TodoList';
import Page from './components/Page';
import Typo from './components/Typo';
import { Provider } from 'jotai'
import BigLayout from './components/BigLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import ProcessQueue from './components/ProcessQueue';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Provider>

      <BigLayout>
        <Routes>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/themeswitcher" element={<Page />} />
          <Route path="/" element={<EmptyPage/>} />
          <Route path="/Typo" element={<Typo />} />
          <Route path="/processqueue" element={<ProcessQueue />} />














        </Routes>
      </BigLayout>

    </Provider>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

