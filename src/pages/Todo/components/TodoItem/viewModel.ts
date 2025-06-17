import { makeObservable, observable, action } from 'mobx';
import { uuidv4 } from '@src/utils';

interface TodoItemViewModelProps {
  content: string;
}

class TodoItemViewModel {
  id = uuidv4();
  @observable content = '';
  @observable interimContent = '';
  @observable completed = false;
  @observable editing = false;

  constructor(props: TodoItemViewModelProps) {
    this.content = props.content;
    this.interimContent = props.content;
    makeObservable(this);
  }

  @action onInterimContentChange = (v: string) => {
    this.interimContent = v;
  };

  @action onCompletedChange = (v: boolean) => {
    this.completed = v;
  };

  @action onEdit = () => {
    this.editing = true;
  };

  @action onEdited = () => {
    const newContent = this.interimContent.trim();

    if (!!newContent) {
      this.content = newContent;
    } else {
      this.interimContent = this.content;
    }

    this.editing = false;
  };
}

export default TodoItemViewModel;
