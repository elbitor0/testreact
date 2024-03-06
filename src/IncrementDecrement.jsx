
import { useState } from 'react';
	
function IncrementDecrement() {
   const [count, setCount] = useState(0);
      return (
         <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={() => setCount(count - 1)}>-</button>
         </div>
    )
}
	
export default IncrementDecrement;