// 匯入 React Testing Library 的工具函式：render（渲染元件）、fireEvent（模擬事件）
import { render, fireEvent } from '@testing-library/react';

// 匯入 screen，用來查詢畫面上的元素（例如用 getByPlaceholderText）
import { screen } from '@testing-library/dom';

import TODO_FILTERS from '../../../models/filters';

// 匯入要被測試的元件
import TodoFooter from '../index';

// css module
import styles from '../styles.module.scss'

describe('TodoFooter', () => {
  // 測試元件的渲染
  it('render TodoFooter with test-id', () => {
    render(
      <TodoFooter
        todoCount="0"
        filter={TODO_FILTERS.all.value}
        clearCompleted
        onCompletedDelete={() => {}}
      />
    );
    const toggleAll = screen.getByTestId('todo-footer');

    expect(toggleAll).toBeInTheDocument();
  });

  // 測試 todoCount 的文案
  it('test todoCount render label', () => {
    render(
      <TodoFooter
        todoCount="1"
        filter={TODO_FILTERS.all.value}
        clearCompleted
        onCompletedDelete={() => {}}
      />
    );
    const todoCount = screen.getByTestId('todo-count');

    expect(todoCount).toHaveTextContent('1 item left');
  });

  // 測試 clearCompletedButton, clearCompleted = true
  it('test clearCompletedButton render with clearCompleted is true', () => {
    render(
      <TodoFooter
        todoCount="0"
        filter={TODO_FILTERS.all.value}
        clearCompleted={true}
        onCompletedDelete={() => {}}
      />
    );
    const clearCompletedButton = screen.getByTestId('clear-completed-button');

    expect(clearCompletedButton).toBeInTheDocument();
  });

  // 測試 clearCompletedButton, clearCompleted = false
  it('test clearCompletedButton render with clearCompleted is false', () => {
    render(
      <TodoFooter
        todoCount="0"
        filter={TODO_FILTERS.all.value}
        clearCompleted={false}
        onCompletedDelete={() => {}}
      />
    );
    // queryByTestId 找不到 id 時會返回 null
    const clearCompletedButton = screen.queryByTestId('clear-completed-button');

    expect(clearCompletedButton).not.toBeInTheDocument();
  });

  // 測試 filters 的 class with filter props
  it("test filters class", ()=>{
    render(
      <TodoFooter
        todoCount="0"
        filter={TODO_FILTERS.all.value}
        clearCompleted={false}
        onCompletedDelete={() => {}}
      />
    );
    const filter = screen.getByTestId(TODO_FILTERS.all.testId);

    expect(filter).toHaveClass(styles.selected);
  })

  // 測試 onCompletedDelete 觸發
  it("test onCompletedDelete onClick", ()=>{
    // 測試的 Event function
    const mockCompletedDelete = vi.fn();

    render(
      <TodoFooter
        todoCount="0"
        filter={TODO_FILTERS.all.value}
        clearCompleted={true}
        onCompletedDelete={mockCompletedDelete}
      />
    );
    const clearCompletedButton = screen.getByTestId('clear-completed-button');

    // 觸發 Event
    fireEvent.click(clearCompletedButton);

    // 確認觸發次數
    expect(mockCompletedDelete).toHaveBeenCalledTimes(1)
  })
});
