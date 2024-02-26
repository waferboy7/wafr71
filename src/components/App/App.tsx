import './App.css';

import { Route, Switch } from 'wouter';

import FormPage from 'pages/FormPage/FormPage';
import MainPage from 'pages/MainPage/MainPage';
import { Urls } from 'constants/urls';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={Urls.main} component={MainPage} />
        <Route path={Urls.form} component={FormPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
