// ## NOTE:- Not Handling Errors

// Instead of Doing like this:-
const fetchData=async()=>{
    const response=await fetch("https://api.example.com/data");
    const data=await response.json();
    setMyData(data);
}

// do like this:-
const fetchData1=async()=>{
    try {
        const response=await fetch("https://api.example.com/data");
        const data=await response.json();
        setMyData(data);
    } catch (error) {
        console.log(error);
        setError("Failed to fetch data");
    }
}
