import { ContactsForm } from '../ContactsForm';
import { Filter } from '../Filter';
import { useGetContactsQuery } from 'store/contacts/contactsApi';
import { Audio } from 'react-loader-spinner';
import { ContactItem } from '../ContactItem';
import { Error } from '../Error/Error';
import { useSelector } from 'react-redux';

import css from '../../App.module.css';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { Navigate } from 'react-router-dom';

export const Widget = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const isUserLoggedin = useSelector(selectIsLoggedIn);

  return (
    <>
      {isUserLoggedin ? (
        <div className={css.global__wrapper}>
          <ContactsForm />
          <Filter />

          <ul className={css.itemList}>
            {error && <Error message={error.message} />}
            {isLoading && <Audio />}

            {data &&
              data.map(({ id, name, phone }) => (
                <ContactItem key={id} id={id} name={name} number={phone} />
              ))}
          </ul>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
