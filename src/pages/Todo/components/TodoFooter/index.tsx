import clsx from 'clsx';
import styles from './styles.module.scss';

function TodoFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <span className={styles.todoCount}>
          <strong>0</strong> item left
        </span>

        <button className={styles.clearCompleted}>Clear completed</button>
      </div>

      <ul className={styles.filters}>
        <li>
          <a
            className={clsx([styles.filterContent, styles.selected])}
            href="#/"
          >
            All
          </a>
        </li>

        <li>
          <a className={clsx([styles.filterContent])} href="#/active">
            Active
          </a>
        </li>

        <li>
          <a className={clsx([styles.filterContent])} href="#/completed">
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TodoFooter;
