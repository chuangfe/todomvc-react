import clsx from 'clsx';
import styles from './styles.module.scss';

function TodoInput() {
  return (
    <div className={clsx(['todoInput', styles.container])}>
      <div className={styles.toggle}>
        <input id="toggle-all" className={styles.toggleInput} type="checkbox" />
        <label className={styles.toggleLabel} htmlFor="toggle-all">
          Mark all as complete
        </label>
      </div>

      <input
        className={styles.input}
        placeholder="What needs to be done?"
        autoFocus
      />
    </div>
  );
}

export default TodoInput;
