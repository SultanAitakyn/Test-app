import React from 'react';
import {screen, waitFor, act} from '@testing-library/react';
import {HomePage} from './HomePage';
import {renderWithProviders} from 'test-utils';
import userEvent from '@testing-library/user-event';

describe('Home page', () => {
  it('should render form fields and submit successfully', async () => {
    const mockStartCourse = jest.fn(() => Promise.resolve({status: 201}));
    jest.mock('api/course', () => ({startCourse: mockStartCourse}));

    const {container} = renderWithProviders(<HomePage/>);

    const nameInput = container.querySelector(`input[name="name"]`)
    const emailInput = container.querySelector(`input[name="email"]`)
    const submitButton = screen.getByText(/Start the Course/);

    if (nameInput && emailInput) {
      await act(async () => {
        userEvent.type(nameInput, 'John Doe');
        userEvent.type(emailInput, 'john@example.com');
        userEvent.click(submitButton);
      });
    }
  })

  it('should shows error messages on form validation failures', async () => {
    renderWithProviders(<HomePage/>);

    const submitButton = screen.getByText(/Start the Course/);

    await act(async () => userEvent.click(submitButton));

    await waitFor(() => {
      const nameError = screen.getByText(/Please provide a name!/);
      const emailError = screen.getByText(/Please provide an email!/);

      expect(nameError).toBeVisible();
      expect(emailError).toBeVisible();
    });
  })
})
