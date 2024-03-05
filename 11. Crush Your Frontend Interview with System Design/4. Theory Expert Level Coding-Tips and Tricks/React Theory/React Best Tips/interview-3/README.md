
-----

## NOTE:- Not Debouncing User Input

Instead of Doing like this:-

function SearchComponent(){
const [query,setQuery]=useState("");
const handleInputChange=(e)=>{
setQuery(e.target.value);
searchAPI(e.target.value);
};
return <input type="text" value={query} onChange={handleInputChange}/>;
}

do like this:-
function SearchComponent(){
const [query,setQuery]=useState("");
const debouncedQuery=useDebounce(query,300);
useEffect(()=>{
if(debouncedQuery){
searchAPI(debouncedQuery);
}
},[debouncedQuery])

    return (<input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>);

}
