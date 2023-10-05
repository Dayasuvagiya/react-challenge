import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <div>
      <button onClick={
        () => setCount(count => count + 1)
      }> 
        Increment Count ({count})
      </button>
    </div>
  )
}

export default UseEffectCounter;
// [count] apelu che A jyare 2 button apela hoy tyare jo Ak par click kariye to banne sathe perform na thay Ana mate
// count A batave che aa tyarej fuction use thavu joye jyare aa render thay