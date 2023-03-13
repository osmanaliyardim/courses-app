import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ['ali'],
}));

test('test', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const username = screen.getByTestId('username');
  const logo = screen.getAllByTestId('logo');

  expect(username).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
