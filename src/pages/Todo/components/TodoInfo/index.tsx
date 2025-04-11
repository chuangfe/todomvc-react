import clsx from 'clsx';
import styles from './styles.module.scss';

function TodoInfo() {
  return (
    <div className={styles.container}>
      <p className={styles.item}>Double-click to edit a todo</p>

      <p className={styles.item}>
        Template by <a className={styles.link} href="http://sindresorhus.com">Sindre Sorhus</a>
      </p>

      <p className={styles.item}> 
        Created by <a className={styles.link} href="http://todomvc.com">you</a>
      </p>

      <p className={styles.item}>
        Part of <a className={styles.link} href="http://todomvc.com">TodoMVC</a>
      </p>
    </div>
  );
}

export default TodoInfo;
