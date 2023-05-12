const redux=require('redux')
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')
//action
const initialState={
    loading:false,
    users:[],
    error:''
}

FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'

const fetchUsersRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess=(users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure=(error)=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

//reducers
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading:false,
                users:[],
                error:action.payload
            }
    }
}

//action craetor
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            //res.data is the array of users
            const users=res.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            //error.message is the error description
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
//store
const store=createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())
