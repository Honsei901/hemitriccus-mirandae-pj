import { useState } from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../redux/slices/counterSlice';
import { useAppDispatch, useAppSlector } from '../redux/hooks';

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState<number>(5);

  const dispatch = useAppDispatch();
  const count = useAppSlector((state) => state.counter.value);

  return (
    <div
      style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}
    >
      <div
        style={{
          width: '600px',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'center',
          borderStyle: 'solid',
        }}
      >
        <div>
          <p style={{ fontSize: 15 }}>
            Counter: <span style={{ fontWeight: 'bold' }}>{count}</span>
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 20,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 5,
            }}
          >
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
          <div>
            <input
              type="number"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(Number(e.target.value))}
            />

            <button
              onClick={() => dispatch(incrementByAmount(incrementAmount))}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
