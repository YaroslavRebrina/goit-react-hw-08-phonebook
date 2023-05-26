import { useSelector } from 'react-redux';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectName } from 'store/auth/selectors';

export const Header = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  const userName = useSelector(selectName);

  return (
    <>
      <header>
        <nav>
          {isUserLoggedIn ? (
            <div>Welcome {userName}</div>
          ) : (
            <Link to="login">Log in</Link>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};
