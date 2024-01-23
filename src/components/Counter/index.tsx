'use client';

import { decrement, increment, incrementByAmount } from '@/redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" aria-label="Decrement value" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
}
