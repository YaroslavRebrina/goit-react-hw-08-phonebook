import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './Auth/LoginPage/LoginPage';
import { RegisterationPage } from './Auth/RegistrationPage/RegitstrationPage';
import { Header } from './Header/Header';
import { Widget } from './ContactsWidget/Widged/Widget';
import { useDispatch } from 'react-redux';
import { userRefresh } from 'store/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<LoginPage />} />
        <Route path="registration" element={<RegisterationPage />} />
        <Route path="/contacts" element={<Widget />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
