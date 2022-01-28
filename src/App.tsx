import React from 'react';
import Time from "./components/time/Time";
import Counter from "./components/counter/Counter";


const App = () => {
    return (
        <div className="container">
          <Time/>
            <Counter/>
        </div>
    );
};

export default App;