import { observer } from 'mobx-react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import TodoInputViewModel from './viewModel';

interface Props {
  toggle: boolean;
  onInputEnter: (v: string) => void;
  onToggleCheckedChange: (v: boolean) => void;
}

function TodoInput(props: Props) {
  const vm = TodoInputViewModel();

  return (
    <div className={clsx(['todoInput', styles.container])}>
      {props.toggle && (
        <div className={styles.toggle}>
          <input
            id="toggle-all"
            className={styles.toggleInput}
            type="checkbox"
            checked={vm.toggle}
            onChange={(e) => {
              const checked = e.target.checked;
              vm.onToggleChange(checked);
              props.onToggleCheckedChange(checked);
            }}
          />
          <label className={styles.toggleLabel} htmlFor="toggle-all">
            Mark all as complete
          </label>
        </div>
      )}

      <input
        className={styles.input}
        placeholder="What needs to be done?"
        autoFocus
        value={vm.todo}
        onChange={(e) => vm.onTodoChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            props.onInputEnter(vm.todo);
            vm.onTodoClear();
          }
        }}
        onBlur={vm.onTodoClear}
      />
    </div>
  );
}

export default observer(TodoInput);
