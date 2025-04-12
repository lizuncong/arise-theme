import './styles/normalize.css';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { RouterProvider } from 'react-router';

import translation from './locales/en.json';
import router from './routes';

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation,
    },
  },
});
function App() {
  return <RouterProvider router={router} />;
}

export default App;
