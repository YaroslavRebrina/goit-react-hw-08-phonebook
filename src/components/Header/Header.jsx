import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { userLogout } from 'store/auth/operations';
import { selectIsLoggedIn, selectName } from 'store/auth/selectors';
import { DiReact } from 'react-icons/di';
import css from './Header.module.css';

export const Header = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectName);

  const dispatch = useDispatch();

  return (
    <>
      <section className={css.sectionHeader}>
        <header className={css.header}>
          <nav className={css.nav}>
            {isUserLoggedIn ? (
              <>
                <div>
                  Welcome <span className={css.username}>{userName}</span>
                </div>
                <button
                  type="button"
                  className={css.buttonLogout}
                  onClick={() => dispatch(userLogout())}
                >
                  Logout
                </button>
              </>
            ) : (
              <DiReact size="40px" />
            )}
          </nav>
        </header>
      </section>
      <Outlet />
    </>
  );
};
