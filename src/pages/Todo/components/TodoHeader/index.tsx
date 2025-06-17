import { observer } from 'mobx-react';
import styles from './styles.module.scss';

function TodoHeader() {
  console.log('TodoHeader', 'render');

  return (
    <div className={styles.container}>
      <div className={styles.title}>todos</div>
    </div>
  );
}

export default observer(TodoHeader);
