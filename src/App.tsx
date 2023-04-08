import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
import TodoPage from './components/pages/TodoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/todo" />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
