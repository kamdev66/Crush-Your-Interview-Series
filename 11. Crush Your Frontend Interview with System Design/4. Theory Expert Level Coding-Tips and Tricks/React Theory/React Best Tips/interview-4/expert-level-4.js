// ## NOTE:- AVOID UNNECESSARY RENDERING (Not Optimizing Performance(not using useMemo))

// Instead of Doing like this:-
const MyComponent = ({ props }) => {
    return <div>{props}</div>
};

// do like this:-
const MyComponent1 = memo(({ props }) => {
    return <div>{props}</div>
});

