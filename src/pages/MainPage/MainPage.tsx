import { useLocation } from 'wouter';

import Button from 'components/Button/Button';
import { Urls } from 'constants/urls';
import Header from 'components/Header/Header';
import NormalizeWrapper from 'components/NormalizedWrapper/NormalizedWrapper';

const MainPage: React.FC = () => {
  const [location, navigate] = useLocation();

  const toFormPage = (): void => {
    navigate(Urls.form);
  };

  return (
    <>
      <Header />
      <NormalizeWrapper>
        <Button onClick={toFormPage}>Form</Button>
      </NormalizeWrapper>
    </>
  );
};

export default MainPage;
