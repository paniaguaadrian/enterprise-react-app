import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

// Components
// Custom Components - Layouts
import MainLayout from './layouts/main-layout';

import Routes from './routes';

import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <MainLayout>
        <Routes />
      </MainLayout>
      <GlobalStyle />
    </BrowserRouter>
  );
}
