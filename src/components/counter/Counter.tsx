import React, {FC, useState} from 'react';

const Counter:FC = () => {
    const [num, numSet] = useState<number>(0);

    const increase = () =>{
        numSet(num + 1)
    }

    const decrease = () => {
        numSet(num - 1)
    }

    const reset = () => {
        numSet( 0)
    }
    return (
        <div>
            <div>
            <h2>{num}</h2>
            </div>
            <div>
                <div>
                <button className="btn btn-primary mx-2" onClick={increase}>increase</button>
                    <button className="btn btn-success mx-2" onClick={decrease}>decrease</button>
                    <button className="btn btn-danger mx-2" onClick={reset}>reset</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;