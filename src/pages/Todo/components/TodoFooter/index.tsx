import { observer } from 'mobx-react';
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
  console.log('TodoFooter', 'render');

  return (
    <div className={styles.container} data-testid="todo-footer">
      <div className={styles.flex}>
        <span className={styles.todoCount} data-testid="todo-count">
          <strong>{props.todoCount}</strong> item left
        </span>

        {props.clearCompleted && (
          <button
            data-testid="clear-completed-button"
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
                data-testid={item.testId}
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

export default observer(TodoFooter);
