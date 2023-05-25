import React from 'react';
import { ContactsForm } from './ContactsWidget/ContactsForm';
import { Filter } from './ContactsWidget/Filter';
import { ContactItem } from './ContactsWidget/ContactItem';
import { Error } from './ContactsWidget/Error/Error';

import css from './App.module.css';
import { useGetContactsQuery } from 'store/contacts/contactsApi';
import { Audio } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './Auth/LoginPage/LoginPage';
import { RegisterationPage } from './Auth/RegistrationPage/RegitstrationPage';
import { Header } from './Header/Header';

export const App = () => {
  // const getContacts = useSelector(state => state.contacts.items);
  // const { data, error, isLoading } = useGetContactsQuery();

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="registration" element={<RegisterationPage />} />
      </Route>
    </Routes>
    // <div className={css.global__wrapper}>
    //   <ContactsForm />
    //   <Filter />
    //   <ul className={css.itemList}>
    //     {error && <Error message={error.message} />}
    //     {isLoading && <Audio />}
    //     {data &&
    //       data.map(({ id, name, phone }) => (
    //         <ContactItem key={id} id={id} name={name} number={phone} />
    //       ))}
    //   </ul>
    // </div>
  );
};
