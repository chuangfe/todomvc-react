import { observer } from 'mobx-react';
import styles from './styles.module.scss';

function TodoHader() {
  console.log('TodoHader', 'render');

  return (
    <div className={styles.container}>
      <div className={styles.title}>todos</div>
    </div>
  );
}

export default observer(TodoHader);
