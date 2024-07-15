
import React from 'react';
import {
  BrowserRouter as
  Router,
  Routes,
  Route
} from "react-router-dom";
import { AuthProvider } from './component/contexts/AuthContext';
import styled from 'styled-components';

//Pages
import Login from './component/page/Login';
import MainPage from './component/page/MainPage';
import LoginMainPage from './component/page/LoginMainPage';
import EntireScholar from './component/page/EntireScholar';
import RecomScholar from './component/page/RecomScholar';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;

`;


function App(props) {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="main" element={<MainPage />} />
          <Route path="loginmain" element={<LoginMainPage />} />
          <Route path="entirescholar" element={<EntireScholar />} />
          <Route path="recomscholar" element={<RecomScholar />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
