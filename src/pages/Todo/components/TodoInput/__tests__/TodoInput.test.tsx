// 匯入 React Testing Library 的工具函式：render（渲染元件）、fireEvent（模擬事件）
import { render, fireEvent } from '@testing-library/react';

// 匯入 screen，用來查詢畫面上的元素（例如用 getByPlaceholderText）
import { screen } from '@testing-library/dom';

// 匯入要被測試的元件
import TodoInput from '../index';

// 描述一組測試，這裡是針對 TodoInput 元件
describe('TodoInput', () => {
  // 第一個測試：確認元件有正確渲染 input 並且含有 placeholder
  it('renders input with placeholder', () => {
    // 渲染元件，onInputEnter 傳一個空函式避免錯誤
    render(<TodoInput onInputEnter={() => {}} />);
    // 使用 placeholder 來找到 input 元素
    const input = screen.getByPlaceholderText('What needs to be done?');

    // 斷言：input 應該存在於文件中
    expect(input).toBeInTheDocument();
  });

  // 第二個測試：確認在按下 Enter 鍵時會觸發 props 的 onInputEnter 並清空 input
  it('calls onInputEnter and clears input on Enter key press', () => {
    // 建立一個模擬函式，用來檢查是否有被呼叫
    const mockEnter = vi.fn();

    // 渲染元件並傳入 mock 函式
    render(<TodoInput onInputEnter={mockEnter} />);
    const input = screen.getByPlaceholderText('What needs to be done?');

    // 測試 Enter
    const todo1 = 'HTML';
    // 模擬使用者輸入 'Buy milk'
    fireEvent.change(input, { target: { value: todo1 } });
    // 模擬按下 Enter 鍵
    fireEvent.keyDown(input, { code: 'Enter', key: 'Enter' });
    // 斷言：mock 函式應該被呼叫，而且傳入的是 'HTML'
    expect(mockEnter).toHaveBeenCalledWith(todo1);

    // 測試 NumpadEnter
    const todo2 = 'CSS';
    fireEvent.change(input, { target: { value: todo2 } });
    fireEvent.keyDown(input, { code: 'NumpadEnter', key: 'Enter' });
    expect(mockEnter).toHaveBeenCalledWith(todo2);

    // 斷言：input 的值應該被清空（由 viewModel 處理）
    expect((input as HTMLInputElement).value).toBe('');

    // 確保總共被呼叫兩次
    expect(mockEnter).toHaveBeenCalledTimes(2);
  });

  // 第三個測試：確認 input 在失焦（blur）時也會被清空
  it('clears input on blur', () => {
    // 渲染元件
    render(<TodoInput onInputEnter={() => {}} />);
    const input = screen.getByPlaceholderText('What needs to be done?');

    // 模擬輸入值
    fireEvent.change(input, { target: { value: 'Test blur' } });

    // 模擬失焦事件
    fireEvent.blur(input);

    // 斷言：input 值應該清空
    expect((input as HTMLInputElement).value).toBe('');
  });
});
