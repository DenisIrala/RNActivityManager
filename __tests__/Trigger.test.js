import * as React from 'react';
import {render, fireEvent} from "@testing-library/react-native"
import Trigger from '@/components/Trigger';

describe('Trigger', () => {
  
it('Correct rendering', () => {
  
  const {getByText} = render(<Trigger/>);
  expect(getByText("Loading")).toBeTruthy();
}
)

}
);
