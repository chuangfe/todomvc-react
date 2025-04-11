import { Observer } from 'mobx-react';
import useDidMount from '@src/hooks/useDidMount';
import TodoStore from '@src/stores/todo';
import TodoHader from './components/TodoHader';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoFooter from './components/TodoFooter';
import TodoInfo from './components/TodoInfo';
import styles from './styles.module.scss';

const TodoPage = () => {
  console.log('# TodoPage.render');

  useDidMount(() => {
    console.log('[TodoPage] useDidMount');
  });

  return (
    <div className={styles.container}>
      <TodoHader />

      <div className={styles.mainContent}>
        <TodoInput />

        <ul className={styles.todoList}>
          <li className={styles.todoLi}>
            <TodoItem completed={false} editing={false} />
            <TodoItem completed={true} editing={false} />
            <TodoItem completed={false} editing={true} />
          </li>
        </ul>

        <TodoFooter />
      </div>

      <TodoInfo />
    </div>
  );
};

export default TodoPage;
