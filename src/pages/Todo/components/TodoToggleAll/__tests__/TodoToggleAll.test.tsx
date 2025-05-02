// 匯入 React Testing Library 的工具函式：render（渲染元件）、fireEvent（模擬事件）
import { render, fireEvent } from '@testing-library/react';

// 匯入 screen，用來查詢畫面上的元素（例如用 getByPlaceholderText）
import { screen } from '@testing-library/dom';

// 匯入要被測試的元件
import TodoToggleAll from '../index';

describe('TodoToggleAll', () => {
  // 測試元件的渲染
  it('render TodoToggleAll with checkbox', () => {
    render(<TodoToggleAll toggle onToggleAllCheckedChange={() => {}} />);
    const toggleAll = screen.getByRole('checkbox');

    expect(toggleAll).toBeInTheDocument();
  });

  it('call onToggleAllCheckedChange on mouseDown', () => {
    const checked = false;
    const mockToggleAllCheckedChange = vi.fn();

    render(
      <TodoToggleAll
        toggle={checked}
        onToggleAllCheckedChange={mockToggleAllCheckedChange}
      />
    );
    const toggleAll = screen.getByRole('checkbox');

    fireEvent.click(toggleAll);

    expect(mockToggleAllCheckedChange).toHaveBeenCalledWith(true);
  });
});
