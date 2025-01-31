import * as React from 'react';
import {render, fireEvent} from "@testing-library/react-native"
import AddTab from '@/components/AddTab';
import { press } from '@testing-library/react-native/build/user-event/press';
jest.useFakeTimers();

describe('AddTab', () => {

  it('Button is working appropriately without text', () => {
  
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<AddTab todos={[]} onAddTodo={mockOnPress}/>);
    const button = getByTestId("button");
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(0);
    
    }
    )

    it('Button is working appropriately after adding text', () => {
  
      const mockOnPress = jest.fn();
      const { getByTestId } = render(<AddTab todos={[]} onAddTodo={mockOnPress}/>);
      const button = getByTestId("button");
      const input = getByTestId("input");
      fireEvent.changeText(input, 'New text');
      fireEvent.press(button);
      expect(mockOnPress).toHaveBeenCalledTimes(1);
      
      }
      )
}
);
