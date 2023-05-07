'use client'; // client에서 사용할거니 에러 만들지 마라
import React, { useState } from 'react';

export default function Counter() {
  console.log('hi! - client');
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}
