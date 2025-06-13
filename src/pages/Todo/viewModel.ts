import { useCallback } from 'react';
import { useLocalObservable } from 'mobx-react';
import useMobxAction from '@src/hooks/useMobxAction';
import TODO_FILTERS from './models/filters';
import TodoItemViewModel from './components/TodoItem/viewModel';
import { useLocation } from 'react-router-dom';

function TodoPageViewModel() {
  const state = useLocalObservable(() => ({
    todos: [] as TodoItemViewModel[],
    
    toggleAll: false,

    filter: TODO_FILTERS.all.value,

    get checks() {
      return {
        todos: !!this.todos.length,
        completed: !!this.todos.filter((item) => item.completed).length,
        toggleAll: !!this.todos.length
      };
    },

    get labels() {
      return {
        unCompleted: String(
          this.todos.filter((item) => !item.completed).length
        ),
        todos: this.todos.filter((item) => {
          switch (this.filter) {
            case TODO_FILTERS.active.value:
              return !item.completed;

            case TODO_FILTERS.completed.value:
              return item.completed;

            default:
              return true;
          }
        })
      };
    }
  }));

  const onTodoCreate = useMobxAction(
    (v: string) => {
      if (!!v.trim()) {
        state.todos.push(new TodoItemViewModel({ content: v }));
      }
    },
    [state]
  );

  const onTodoCompletedsChange = useMobxAction(
    (v: boolean) => {
      state.toggleAll = v;
      state.todos.forEach((todo) => todo.onCompletedChange((v = v)));
    },
    [state]
  );

  const onTodoDelete = useMobxAction(
    (id: string) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
    [state]
  );

  const onTodoCompletedsDelete = useMobxAction(
    () => (state.todos = state.todos.filter((todo) => !todo.completed)),
    [state]
  );

  const onFilterChange = useMobxAction(
    (v: string) => {
      switch (v) {
        case `#/${TODO_FILTERS.active.value}`:
          state.filter = TODO_FILTERS.active.value;
          break;

        case `#/${TODO_FILTERS.completed.value}`:
          state.filter = TODO_FILTERS.completed.value;
          break;

        default:
          state.filter = TODO_FILTERS.all.value;
          break;
      }
    },
    [state]
  );

  return {
    todos: state.labels.todos,
    toggleAll: state.toggleAll,
    filter: state.filter,
    checks: state.checks,
    labels: state.labels,
    onTodoCreate,
    onTodoCompletedsChange,
    onTodoDelete,
    onTodoCompletedsDelete,
    onFilterChange
  };
}

export default TodoPageViewModel;
