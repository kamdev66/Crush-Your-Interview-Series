// ## NOTE:- Not using lazy loading

//NOTE:- Lazy loading is a strategy to identify resources
// as non-blocking and load these only when needed

// Instead of Doing like this:-
import LazyComponent from "./LazyComponent";

// do like this:-
const LazyComponent1 = React.lazy(() => import("./LazyComponent1"));

// and then
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
