import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    }, [count]);
    useEffect(()=>{
        console.log('Creating timer');
        const interval = setInterval(() => {
            console.log('Interval executed');
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log('cleaning up!');
            clearInterval(interval);
        }
    }, []);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter

// aa componentDidMount lifecycle method ni functionality che 
// [count] apelu che A jyare 2 button apela hoy tyare jo Ak par click kariye to banne sathe perform na thay Ana mate
// count A batave che aa Effects tyarej use thavu joye jyare aa specific property render/change thay
// [] empty arrey second peramite che jcomponentDidMount method ni fuctionality replicate kare che 1 click par 2 button na chale Ana mate 