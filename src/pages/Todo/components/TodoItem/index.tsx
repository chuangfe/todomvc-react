import { observer } from 'mobx-react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import TodoItemViewModel from './viewModel';

interface Props {
  vm: TodoItemViewModel;
  onDelete: (id: string) => void;
}

function TodoItem(props: Props) {
  return (
    <div
      className={clsx([
        styles.container,
        props.vm.completed && styles.completed,
        props.vm.editing && styles.editing
      ])}
    >
      <div className={styles.view} onDoubleClick={props.vm.onEdit}>
        <input
          className={styles.toggle}
          id="todoItemToggle"
          type="checkbox"
          checked={props.vm.completed}
          onChange={(e) => props.vm.onCompletedChange(e.target.checked)}
        />

        <div className={styles.label}>
          {props.vm.contnet}
        </div>

        <button
          className={styles.destroy}
          onClick={() => props.onDelete(props.vm.id)}
        ></button>
      </div>

      <input
        autoFocus
        className={styles.edit}
        value={props.vm.interimContent}
        onChange={(e) => props.vm.onInterimContentChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            props.vm.onEdited();
          }
        }}
        onBlur={props.vm.onEdited}
      />
    </div>
  );
}

export default observer(TodoItem);
