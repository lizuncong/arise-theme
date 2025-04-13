import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useInitEditor } from './hooks/useInitEditor';
import styles from './index.module.less';
const Home = memo(() => {
  const { t } = useTranslation();
  useInitEditor();
  return (
    <div className={styles.home}>
      <div>{t('home.title')}</div>
    </div>
  );
});

export default Home;
