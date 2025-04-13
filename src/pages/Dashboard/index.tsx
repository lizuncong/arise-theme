import { memo } from 'react';

import styles from './index.module.less';
const Dashboard = memo(() => {
  return <div className={styles.detail}>看板页面(todo)</div>;
});

export default Dashboard;
