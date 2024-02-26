import './Header.css';

import { useLocation } from 'wouter';

import { Urls } from 'constants/urls';
import Button from 'components/Button/Button';

const Header: React.FC = () => {
  const [location, navigate] = useLocation();

  const toHomePage: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    navigate(Urls.main);
  };

  return (
    <header className="header">
      <Button onClick={toHomePage}>Home</Button>
    </header>
  );
};

export default Header;
