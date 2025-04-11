import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  completed: Boolean;
  editing: Boolean;
}

function TodoItem(props: Props) {
  const { completed, editing } = props;

  return (
    <div
      className={clsx([
        styles.container,
        completed && styles.completed,
        editing && styles.editing
      ])}
    >
      <div className={styles.view}>
        <input className={styles.toggle} id="todoItemToggle" type="checkbox" />

        <label className={styles.toggleLabel} htmlFor="todoItemToggle">
          Buy a unicorn
        </label>

        <button className={styles.destroy}></button>
      </div>

      <input className={styles.edit} value="Rule the web" />
    </div>
  );
}

export default TodoItem;
