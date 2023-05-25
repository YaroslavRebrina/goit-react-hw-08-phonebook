import { Link } from 'react-router-dom';
import css from '../AuthForm.module.css';

export const LoginPage = () => {
  return (
    <div className={css.authPageWrapper}>
      <div className={css.authForm}>
        <div>
          <label htmlFor="email" className={css.label}>
            E-mail
          </label>
          <input type="email" name="email" placeholder="example@mail.com" />
        </div>

        <div>
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <input type="password" name="password" placeholder="password" />
        </div>

        <button type="submit">Log In</button>
      </div>

      <Link to="/registration">Don`t have an accaount yet?</Link>
    </div>
  );
};
