import { observer } from 'mobx-react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  toggle: boolean;
  onToggleAllCheckedChange: (v: boolean) => void;
}

function TodoToggleAll(props: Props) {
  return (
    <>
      <input
        id="toggle-all"
        className={styles.toggleInput}
        type="checkbox"
        checked={props.toggle}
        onChange={(e) => {
          props.onToggleAllCheckedChange(e.target.checked);
        }}
      />
      
      <label className={styles.toggleLabel} htmlFor="toggle-all">
        Mark all as complete
      </label>
    </>
  );
}

export default observer(TodoToggleAll);
