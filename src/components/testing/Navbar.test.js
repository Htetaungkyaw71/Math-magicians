import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

describe('Testing Navigation', () => {
  test('Test for Navbar component', () => {
    render(
      <div className="navBar">
        <h1>Math Magicians</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/calculator">Calculator</a>
          </li>
          <li>
            <a href="/quote">Quote</a>
          </li>
        </ul>
      </div>,
    );

    useEvent.click(screen.getByText('Home'));
    useEvent.click(screen.getByText('Calculator'));
    useEvent.click(screen.getByText('Quote'));
  });
});
