
---
## NOTE:- Incorrect use of usestate (Don't modify the state directly , use previous value.)


Instead of Doing like this:-

export default function App(){
const [count,setCount]=useState(0);

    const increaseCount=()=>{
        setCount(count+1);
        setCount(count+1);
    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={increaseCount}>Increase</button>
        </>
    )

}

Use like this:-
const increaseCount=()=> {
    setCount((prevValue)=>prevValue+1);
    setCount((prevValue)=>prevValue+1);
}
