import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    route = '/',
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return (
      <BrowserRouter initialEntries={['/']}>
        {children}
      </BrowserRouter>
    );
  }

  return {...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
