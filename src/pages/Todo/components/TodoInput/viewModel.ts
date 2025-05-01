import { useLocalObservable } from 'mobx-react';
import useMobxAction from '@src/hooks/useMobxAction';

function TodoInputViewModel() {
  const state = useLocalObservable(() => ({
    todo: ''
  }));

  const onTodoChange = useMobxAction((v: string) => (state.todo = v), [state]);

  const onTodoClear = useMobxAction(() => (state.todo = ''), [state]);

  return {
    todo: state.todo,
    onTodoChange,
    onTodoClear
  };
}

export default TodoInputViewModel;
