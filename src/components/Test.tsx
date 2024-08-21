import react from 'react';

const Test = () => {
  const [count, setCount] = react.useState(0);

  return (
    <>
      count : {count}
      <button type='button' onClick={() => setCount((prev) => prev + 1)}>
        증가
      </button>
    </>
  );
};

export default Test;
