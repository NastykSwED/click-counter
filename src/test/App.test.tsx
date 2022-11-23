import { describe, expect, it, afterEach } from 'vitest';

import { render, screen, fireEvent, cleanup } from '@testing-library/react';

import App from '../App';

describe('Testing Click Counter App', () => {
	afterEach(cleanup);

	it('Should match the snapshot', () => {
		const { container } = render(<App />);

		expect(container).toMatchSnapshot();
	});

	it('Should increase the counter value', () => {
		render(<App />);

		fireEvent.click(screen.getByText('Increment'));

		expect(screen.getByText(1).innerHTML).toBe('1');
	});

	it('Should decrease the counter value', () => {
		render(<App />);

		fireEvent.click(screen.getByText('Decrement'));

		expect(screen.getByText(-1).innerHTML).toBe('-1');
	});

	it('Should reset the counter value to zero', () => {
		render(<App />);

		fireEvent.click(screen.getByText('Increment'));

		expect(screen.getByText('1').innerHTML).toBe('1');

		fireEvent.click(screen.getByText('Reset'));

		expect(screen.getByText('0').innerHTML).toBe('0');
	});
});
