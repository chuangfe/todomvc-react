import clsx from 'clsx';
import TODO_FILTERS from '../../models/filters';
import styles from './styles.module.scss';

const filters = [TODO_FILTERS.all, TODO_FILTERS.active, TODO_FILTERS.completed];

interface Props {
  todoCount: string;
  filter: string;
  clearCompleted: boolean;
  onCompletedDelete: () => void;
}

function TodoFooter(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <span className={styles.todoCount}>
          <strong>{props.todoCount}</strong> item left
        </span>

        {props.clearCompleted && (
          <button
            className={styles.clearCompleted}
            onClick={props.onCompletedDelete}
          >
            Clear completed
          </button>
        )}
      </div>

      <ul className={styles.filters}>
        {filters.map((item) => {
          const href = `#/${item.value}`;

          return (
            <li key={item.label}>
              <a
                className={clsx([
                  styles.filterContent,
                  item.value === props.filter && styles.selected
                ])}
                href={href}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoFooter;
