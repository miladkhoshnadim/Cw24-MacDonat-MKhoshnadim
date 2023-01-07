import React, { useState, useEffect } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='counterSection'>
            <button className='PluseBottom' onClick={() => setCount(count + 1)}>+</button>
            <div> {count}</div>
            <button className='PluseBottom' onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};
export default Counter;