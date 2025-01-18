import * as React from 'react';
import {render, fireEvent} from "@testing-library/react-native"
import Display from '@/components/Display';
import AntDesign from '@expo/vector-icons/AntDesign';
jest.mock('@expo/vector-icons/AntDesign', () => 'MockedAntDesign');

describe('Display', () => {
  
  const mockTodos = [
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: true },
  ];
  


  const mockOnToggle = jest.fn();
  const mockOnRemove = jest.fn();

  it('renders the todos correctly', () => {

    const { getByText } = render(
      <Display todos={mockTodos} onToggle={mockOnToggle} onRemove={mockOnRemove} />
    );

    mockTodos.forEach(todo => {
      const todoElement = getByText(todo.title);
      expect(todoElement).toBeTruthy();
    });
  });

  it('applies completed styles to completed todos', () => {
    const { getByText } = render(
      <Display todos={mockTodos} onToggle={mockOnToggle} onRemove={mockOnRemove} />
    );

    const completedTodo = getByText('Task 2');
    expect(completedTodo.props.style).toContainEqual({ textDecorationLine: 'line-through', color: 'gray' });
  });

  it('triggers onToggle when a todo is pressed', () => {
    const { getByText } = render(
      <Display todos={mockTodos} onToggle={mockOnToggle} onRemove={mockOnRemove} />
    );

    const todoElement = getByText('Task 1');
    fireEvent.press(todoElement);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('triggers onRemove with correct id when delete icon is pressed', () => {
      const { getByTestId } = render(
      <Display todos={mockTodos} onToggle={mockOnToggle} onRemove={mockOnRemove} />
    );
      expect(getByTestId("1")).toBeTruthy()

      const todoElement = getByTestId("delete1");
      fireEvent.press(todoElement);
      expect(mockOnRemove).toHaveBeenCalledWith("1")
    });

  it('onRemove is triggered with correct id', () => {
      const { getByTestId } = render(
      <Display todos={mockTodos} onToggle={mockOnToggle} onRemove={mockOnRemove} />
    );
      expect(getByTestId("2")).toBeTruthy()

      const todoElement = getByTestId("delete2");
      fireEvent.press(todoElement);
      expect(mockOnRemove).toHaveBeenCalledWith('2');
    });
  });

