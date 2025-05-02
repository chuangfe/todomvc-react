import { observer } from 'mobx-react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import TodoInputViewModel from './viewModel';

interface Props {
  onInputEnter: (v: string) => void;
}

function TodoInput(props: Props) {
  const vm = TodoInputViewModel();

  return (
    <input
      className={styles.input}
      placeholder="What needs to be done?"
      autoFocus
      value={vm.todo}
      onChange={(e) => vm.onTodoChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          props.onInputEnter(vm.todo);
          vm.onTodoClear();
        }

        console.log(e.code, e.key)
      }}
      onBlur={vm.onTodoClear}
    />
  );
}

export default observer(TodoInput);
