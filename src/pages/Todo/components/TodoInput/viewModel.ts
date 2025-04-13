import { useLocalObservable } from 'mobx-react';
import useMobxAction from '@src/hooks/useMobxAction';

function TodoInputViewModel() {
  const state = useLocalObservable(() => ({
    toggle: false,
    todo: ''
  }));

  const onToggleChange = useMobxAction(
    (v: boolean) => (state.toggle = v),
    [state]
  );

  const onTodoChange = useMobxAction((v: string) => (state.todo = v), [state]);

  const onTodoClear = useMobxAction(() => (state.todo = ''), [state]);

  return {
    toggle: state.toggle,
    todo: state.todo,
    onToggleChange,
    onTodoChange,
    onTodoClear
  };
}

export default TodoInputViewModel;
