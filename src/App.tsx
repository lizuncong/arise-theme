import './styles/normalize.css';

import i18next from 'i18next';
import { useEffect } from 'react';
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
  useEffect(() => {
    console.log('监听副页面');
    // 接收来自父页面的消息
    window.addEventListener('message', function (event) {
      // 验证消息来源
      // if (event.origin !== 'https://parentdomain.com') {
      //   console.warn('来自未知来源的消息：', event.origin);
      //   return;
      // }
      // 处理消息
      console.log('收到来自父页面的消息：', event.data);
      // 回复父页面
      const reply = { type: 'RESPONSE', text: '你好，父页面！' };
      event.source!.postMessage(reply, event.origin as never);
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
