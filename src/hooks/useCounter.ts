import { useState } from 'react';

export const useCounter = (initialValue: number) => {
	const [counter, setCounter] = useState<number>(initialValue);

	const increment = (step: number = 1) => {
		setCounter(counter + step);
	};

	const decrement = (step: number = 1) => {
		setCounter(counter - step);
	};

	const reset = () => {
		setCounter(0);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
