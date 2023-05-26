import { Link, Navigate } from 'react-router-dom';
import { userLogin } from 'store/auth/operations';
import { useState } from 'react';
import css from '../AuthForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectIsLoggedIn } from 'store/auth/selectors';
import { Audio } from 'react-loader-spinner';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isUserLoggedin = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isUserLoggedin ? (
        <Navigate to="/contacts" />
      ) : isLoading === false ? (
        <div className={css.authPageWrapper}>
          <form className={css.authForm} onSubmit={e => handleSubmit(e)}>
            <div>
              <label htmlFor="email" className={css.label}>
                E-mail
              </label>
              <input
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                value={email}
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label htmlFor="password" className={css.label}>
                Password
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                name="password"
                value={password}
                placeholder="password"
              />
            </div>

            <button type="submit" className={css.authButton}>Log In</button>
          </form>

          <Link to="/registration">Don`t have an accaount yet?</Link>
        </div>
      ) : (
        <Audio />
      )}
    </>
  );
};
