import { Link } from 'react-router-dom';
import css from '../AuthForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSignup } from 'store/auth/operations';

export const RegisterationPage = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDeafult();
    dispatch(userSignup({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
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
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>

      <Link to="/login">Already have an account?</Link>
    </div>
  );
};
