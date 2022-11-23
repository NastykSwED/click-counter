import './App.css';
import { useCounter } from './hooks/useCounter';

const App = () => {
	const { counter, increment, decrement, reset } = useCounter(0);

	return (
		<div className='re-CounterApp'>
			<h1 className='re-CounterTitle'>Simple Click Counter</h1>
			<p
				className={`re-Counter ${
					counter > 0
						? 'Counter--positive'
						: counter < 0
						? 'Counter--negative'
						: ''
				}`}
			>
				{counter}
			</p>
			<div className='re-Counter-wrapButtons'>
				<button
					className='re-Counter-button Counter-button--increment'
					onClick={() => increment()}
				>
					Increment
				</button>
				<button
					className='re-Counter-button Counter-button--reset'
					onClick={() => reset()}
				>
					Reset
				</button>
				<button
					className='re-Counter-button Counter-button--decrement'
					onClick={() => decrement()}
				>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default App;
