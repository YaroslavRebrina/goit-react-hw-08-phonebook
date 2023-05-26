import { Link, Navigate } from 'react-router-dom';
import css from '../AuthForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from 'store/auth/operations';
import { selectIsLoggedIn } from 'store/auth/selectors';

export const RegisterationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isUserLoggedin = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userSignup({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isUserLoggedin ? (
        <Navigate to="/contacts" />
      ) : (
        <div className={css.authPageWrapper}>
          <div>
            <form className={css.authForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className={css.label}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  autoFocus
                  placeholder="Create your nickname"
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className={css.label}>
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="example@mail.com"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className={css.label}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <button type="submit">Register</button>
            </form>
          </div>

          <Link to="/login">Already have an account?</Link>
        </div>
      )}
    </>
  );
};
