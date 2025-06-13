import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TodoHader from './components/TodoHader';
import TodoInput from './components/TodoInput';
import TodoToggleAll from './components/TodoToggleAll';
import TodoItem from './components/TodoItem';
import TodoFooter from './components/TodoFooter';
import TodoInfo from './components/TodoInfo';

import TodoPageViewModel from './viewModel';
import styles from './styles.module.scss';

function TodoPage() {
  const vm = TodoPageViewModel();

  const location = useLocation();

  useEffect(() => {
    vm.onFilterChange(location.hash);
  }, [location]);

  return (
    <div className={styles.container}>
      <TodoHader />

      <div className={styles.mainContent}>
        <div className={styles.actionsContainer}>
          {vm.checks.toggleAll && (
            <div className={styles.toggleAll}>
              <TodoToggleAll
                toggle={vm.toggleAll}
                onToggleAllCheckedChange={vm.onTodoCompletedsChange}
              />
            </div>
          )}

          <TodoInput onInputEnter={vm.onTodoCreate} />
        </div>

        <ul className={styles.todoList}>
          <li className={styles.todoLi}>
            {vm.todos.map((todo) => (
              <TodoItem key={todo.id} vm={todo} onDelete={vm.onTodoDelete} />
            ))}
          </li>
        </ul>

        {vm.checks.todos && (
          <TodoFooter
            todoCount={vm.labels.unCompleted}
            filter={vm.filter}
            clearCompleted={vm.checks.completed}
            onCompletedDelete={vm.onTodoCompletedsDelete}
          />
        )}
      </div>

      <TodoInfo />
    </div>
  );
}

export default observer(TodoPage);
