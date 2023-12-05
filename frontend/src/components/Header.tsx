import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const Header = (props: { path: string; hasReturnArrow: boolean }) => {
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <header
      className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none"
      style={{ backgroundColor: '#1B74E4', outline: 'none' }}
    >
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        {props.hasReturnArrow ? (
          <Link to={`/${props.path}`}>
            <Icon
              icon="ep:arrow-left-bold"
              color="white"
              width="25px"
              className="clickableIcon"
            />
          </Link>
        ) : (
          <div></div>
        )}
        <div className="hidden sm:block"></div>

        <Icon
          icon="clarity:sign-out-line"
          color="white"
          width="25px"
          className="clickableIcon"
          onClick={logout}
        />
      </div>
    </header>
  );
};

export default Header;
