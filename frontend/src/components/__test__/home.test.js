import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from '../../pages/Home';
test('should render home page',()=>{
  render(<Home/>)
  const homeElement  = screen.getByTestId('home1');
  expect(homeElement).toBeInTheDocument();
})