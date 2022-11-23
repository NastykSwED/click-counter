import { describe, expect, expectTypeOf, it } from 'vitest';

import { act, renderHook} from '@testing-library/react';

import { useCounter } from '../../hooks/useCounter';

describe('Testing useCounter Custom Hook', () => {
	it('Must return an initial counter value and 3 functions to modify it', () => {
		const { result } = renderHook(() => useCounter(0));

		expectTypeOf(result).toBeObject();
	});

	it('Should return a counter with a initial value', () => {
		const { result } = renderHook(() => useCounter(1));

		const { counter } = result.current;

		expect(counter).toBe(1);
	});

	it('Should increase the counter with an initial step', () => {
		const { result } = renderHook(() => useCounter(0));

		const { increment } = result.current;

		act(() => increment(5));

		const { counter } = result.current;

		expect(counter).toBe(5);
	});

	it('Should decrease the counter with an initial step', () => {
		const { result } = renderHook(() => useCounter(0));

		const { decrement } = result.current;

		act(() => decrement(5));

		const { counter } = result.current;

		expect(counter).toBe(-5);
	});

	it('Should reset the counter to zero', () => {
		const { result } = renderHook(() => useCounter(5));

		const { reset } = result.current;

		act(() => reset());

		const { counter } = result.current;

		expect(counter).toBe(0);
	});
});
