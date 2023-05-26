import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { userLogout } from 'store/auth/operations';
import { selectIsLoggedIn, selectName } from 'store/auth/selectors';

export const Header = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectName);

  const dispatch = useDispatch();

  return (
    <>
      <header>
        <nav>
          {isUserLoggedIn ? (
            <>
              <div>Welcome {userName}</div>
              <button type="button" onClick={() => dispatch(userLogout())}>
                Logout
              </button>
            </>
          ) : (
            <Link to="login">Log in</Link>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};
